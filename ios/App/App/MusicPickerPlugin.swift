import AVFoundation
import Capacitor
import MediaPlayer
import UIKit

/// Lets the web code pick a song from the iPhone's Music library
/// (songs bought on iTunes or synced from a computer) for the timer alarm.
@objc(MusicPickerPlugin)
public class MusicPickerPlugin: CAPPlugin, CAPBridgedPlugin, MPMediaPickerControllerDelegate {
    public let identifier = "MusicPickerPlugin"
    public let jsName = "MusicPicker"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "pickSong", returnType: CAPPluginReturnPromise)
    ]

    private var pendingCall: CAPPluginCall?

    @objc func pickSong(_ call: CAPPluginCall) {
        MPMediaLibrary.requestAuthorization { status in
            DispatchQueue.main.async {
                guard status == .authorized else {
                    call.reject("ミュージックへのアクセスが許可されていません。設定アプリから許可してください。", "DENIED")
                    return
                }
                guard let presenter = self.bridge?.viewController else {
                    call.reject("画面を表示できませんでした。", "UNAVAILABLE")
                    return
                }
                self.pendingCall?.reject("別の選択が始まりました。", "CANCELLED")
                self.pendingCall = call

                let picker = MPMediaPickerController(mediaTypes: .music)
                picker.allowsPickingMultipleItems = false
                // Cloud-only and copy-protected (Apple Music) songs have no exportable file.
                picker.showsCloudItems = false
                picker.showsItemsWithProtectedAssets = false
                picker.prompt = "アラームに使う曲を選んでください"
                picker.delegate = self
                presenter.present(picker, animated: true)
            }
        }
    }

    public func mediaPickerDidCancel(_ mediaPicker: MPMediaPickerController) {
        mediaPicker.dismiss(animated: true)
        pendingCall?.reject("キャンセルされました。", "CANCELLED")
        pendingCall = nil
    }

    public func mediaPicker(_ mediaPicker: MPMediaPickerController, didPickMediaItems mediaItemCollection: MPMediaItemCollection) {
        mediaPicker.dismiss(animated: true)
        guard let call = pendingCall else { return }
        pendingCall = nil

        guard let item = mediaItemCollection.items.first,
              let assetURL = item.assetURL,
              !item.hasProtectedAsset else {
            call.reject("この曲は著作権保護のためアラームに使えません。", "PROTECTED")
            return
        }

        let title = item.title ?? "ミュージックの曲"
        let name = item.artist.map { "\(title) - \($0)" } ?? title
        exportSong(assetURL: assetURL) { result in
            switch result {
            case .success(let fileURL):
                guard let webPath = self.bridge?.portablePath(fromLocalURL: fileURL)?.absoluteString else {
                    call.reject("曲を読み込めませんでした。", "EXPORT_FAILED")
                    return
                }
                call.resolve(["name": name, "webPath": webPath, "mimeType": "audio/mp4"])
            case .failure:
                call.reject("曲を読み込めませんでした。", "EXPORT_FAILED")
            }
        }
    }

    private func exportSong(assetURL: URL, completion: @escaping (Result<URL, Error>) -> Void) {
        let asset = AVURLAsset(url: assetURL)
        guard let session = AVAssetExportSession(asset: asset, presetName: AVAssetExportPresetAppleM4A) else {
            completion(.failure(CocoaError(.fileWriteUnknown)))
            return
        }

        let dir = FileManager.default.temporaryDirectory.appendingPathComponent("MusicPicker", isDirectory: true)
        try? FileManager.default.removeItem(at: dir)
        do {
            try FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        } catch {
            completion(.failure(error))
            return
        }

        let outputURL = dir.appendingPathComponent("\(UUID().uuidString).m4a")
        session.outputURL = outputURL
        session.outputFileType = .m4a
        session.exportAsynchronously {
            DispatchQueue.main.async {
                if session.status == .completed {
                    completion(.success(outputURL))
                } else {
                    completion(.failure(session.error ?? CocoaError(.fileWriteUnknown)))
                }
            }
        }
    }
}

/// Bridge view controller that registers this app's own native plugins.
class AppViewController: CAPBridgeViewController {
    override open func capacitorDidLoad() {
        bridge?.registerPluginInstance(MusicPickerPlugin())
    }
}
