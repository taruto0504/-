// 画面で使うアイコン（SVG）。絵文字は端末によって「□」などに文字化けするため使わない。

const PATHS = {
  home: '<path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16v4z"/><path d="m14 6 4 4"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 14.2c2.8.3 5 2.3 5 5.8"/>',
  bell: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
  cross: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  alert: '<path d="M12 3 2 21h20z"/><path d="M12 10v5M12 18v.5"/>',
  ai: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  doc: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>',
  inbox: '<path d="M4 4h16l1 9v7H3v-7z"/><path d="M3 13h5l1.5 3h5L16 13h5"/>',
  ok: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
};

export function icon(name, cls = "") {
  return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${PATHS[name]}</svg>`;
}
