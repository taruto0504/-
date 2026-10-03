/* ============ デモ版 ============
   claude.ai のアーティファクトで動かすための差し替え。
   Firebase の代わりに、この画面の中だけで動く仮のデータ保存を使う(ページを閉じると消える)。 */
(function(){
  const DAY = 86400000;
  const now = Date.now();
  const ts = (ms)=>({ toMillis:()=>ms, toDate:()=>new Date(ms) });
  const isTs = (v)=>v && v.__ts;
  const fix = (v)=>isTs(v) ? ts(Date.now()) : v;

  const ME_DEMO = { uid:'me', id:'DR-0001', name:'山田 太郎', occupation:'医師' };
  const USERS = [
    { uid:'u-sato',   personalId:'NR-0001',  name:'佐藤 花子', occupation:'看護師' },
    { uid:'u-suzuki', personalId:'EMT-0001', name:'鈴木 一郎', occupation:'救急救命士' },
    { uid:'u-taka',   personalId:'DR-0002',  name:'高橋 健',   occupation:'医師' },
  ];
  const FREE = { id:'free', label:'無料プラン', price:'無料', aiDailyLimit:3, maxAttachments:3, maxRecipients:10, showAds:true };
  const PRO  = { id:'pro',  label:'プロプラン', price:'準備中', aiDailyLimit:30, maxAttachments:6, maxRecipients:50, showAds:false };

  const DB = { reports:{}, comments:{}, aiReviews:{}, favorites:['NR-0001','EMT-0001'], aiUsed:0 };
  const listeners = [];
  let seq = 0;
  const newId = ()=> (Math.random().toString(36).slice(2,8) + (seq++).toString(36) + 'xx').slice(0,10);

  /* ---- サンプルデータ ---- */
  const mine = { authorUid:'me', authorId:'DR-0001', authorName:'山田 太郎', authorOccupation:'医師' };
  DB.reports['mi7k2q9a'] = Object.assign({}, mine, {
    title:'急性心筋梗塞(STEMI)の初期対応まとめ', status:'sent', reportType:'free', sections:[], attachments:[], originalId:null,
    body:'胸痛の患者さんを受け入れたときの初期対応を、ガイドラインに沿って整理した。\n\n・来院後10分以内に12誘導心電図を記録し、ST上昇の有無を判断する\n・STEMIでは、来院からバルーン拡張まで(Door-to-Balloon)90分以内を目標にする\n・SpO2 90%未満の場合に酸素を投与する(ルーチンでの投与は勧められていない)\n・アスピリン162〜325mgを噛み砕いて服用してもらう\n・ニトログリセリンは収縮期血圧90mmHg未満では使わない',
    fields:[{ name:'参考', value:'日本循環器学会 急性冠症候群ガイドライン(2018年改訂版)' }],
    question:'下壁梗塞で右室梗塞を合併している場合、輸液はどの程度まで行ってよいでしょうか?',
    recipients:{ 'NR-0001':{ read:true, name:'佐藤 花子' }, 'EMT-0001':{ read:false, name:'鈴木 一郎' } }, recipientIdList:['NR-0001','EMT-0001'],
    createdAt: ts(now - 2*DAY), lastCommentAt: ts(now - 3*3600e3), lastCommentByUid:'u-sato', commentReads:{ me: ts(now - 1*DAY) },
  });
  DB.comments['mi7k2q9a'] = [
    { id:'c1', data:{ senderUid:'me', senderName:'山田 太郎', text:'当直で経験した症例をもとにまとめました。ご意見をお願いします。', createdAt: ts(now - 2*DAY + 600e3) } },
    { id:'c2', data:{ senderUid:'u-sato', senderName:'佐藤 花子', text:'まとめありがとうございます。ニトログリセリンを使う前の確認事項(右室梗塞の合併、PDE5阻害薬の内服)も追記すると、看護師側でも確認しやすいと思います。', createdAt: ts(now - 3*3600e3) } },
  ];
  DB.aiReviews['mi7k2q9a'] = [{ id:'rv1', data:{ requestedByUid:'me', requestedByName:'山田 太郎', model:'demo', createdAt: ts(now - 1*DAY), review:{
    overall:{ level:'fair', summary:'(デモ用のサンプル評価です)初期対応の要点がガイドラインに沿って整理されています。ニトログリセリンの禁忌が一部だけなので、追記するとより安全なまとめになります。' },
    claims:[
      { statement:'来院後10分以内に12誘導心電図を記録する', verdict:'correct', explanation:'急性冠症候群が疑われる患者では、10分以内の12誘導心電図が推奨されています。', correction:'' },
      { statement:'Door-to-Balloon 90分以内を目標にする', verdict:'correct', explanation:'STEMIに対する primary PCI の時間目標として一般的に用いられています。', correction:'' },
      { statement:'SpO2 90%未満の場合に酸素を投与する', verdict:'correct', explanation:'低酸素血症がない患者へのルーチンの酸素投与は勧められていません。', correction:'' },
      { statement:'アスピリン162〜325mgを噛み砕いて服用', verdict:'correct', explanation:'禁忌がなければ早期に咀嚼服用させることが推奨されています。', correction:'' },
      { statement:'ニトログリセリンは収縮期血圧90mmHg未満では使わない', verdict:'partly_correct', explanation:'低血圧以外にも、使用を避けるべき状況があります。', correction:'右室梗塞の合併が疑われる場合や、PDE5阻害薬(勃起不全・肺高血圧症の治療薬)を最近内服している場合も使用を避ける' },
    ],
    evidence:{ assessment:'参考にしたガイドラインは書かれていますが、どの項目がどの推奨にもとづくかが分かりにくいです。', issues:['各項目の根拠となる推奨や章を書き添える'] },
    suggestions:[
      { point:'ニトログリセリンの禁忌を追記', detail:'右室梗塞の合併、PDE5阻害薬の内服を確認する手順を加えましょう。' },
      { point:'時間目標の位置づけ', detail:'Door-to-Balloon のほか、救急隊接触からの時間目標についても調べると、病院前との連携が整理できます。' },
    ],
    references:[
      { title:'急性冠症候群ガイドライン(2018年改訂版)', publisher:'日本循環器学会', url:'', verified:false, note:'初期対応と再灌流療法の推奨', confidence:'high' },
      { title:'JRC蘇生ガイドライン2020', publisher:'日本蘇生協議会', url:'', verified:false, note:'急性冠症候群の章(病院前を含む初期対応)', confidence:'medium' },
    ],
    search_keywords:['急性冠症候群','右室梗塞 輸液'],
    question_answer:'右室梗塞では前負荷を保つことが大切で、低血圧のときは輸液が行われます。投与量は血圧や尿量などの反応を見ながら調整するため、施設の手順と指導医の指示に従ってください。',
    privacy_warning:'',
  } } }];

  DB.reports['sp4x8b2c'] = Object.assign({}, mine, {
    title:'敗血症の初期対応(qSOFAと1時間バンドル)', status:'saved', reportType:'free', sections:[], attachments:[], originalId:null, fields:[],
    body:'感染症が疑われる患者さんで、次のうち2項目以上あれば敗血症を疑う(qSOFA)。\n・呼吸数 22回/分以上\n・意識の変容\n・収縮期血圧 100mmHg以下\n\n1時間以内に行うこと(1時間バンドル)\n・乳酸値の測定\n・抗菌薬投与の前に血液培養を採取\n・広域抗菌薬の投与\n・低血圧または乳酸値4mmol/L以上なら、30mL/kgの晶質液を投与\n・輸液に反応しない低血圧には昇圧薬を使う',
    question:'', recipients:{}, recipientIdList:[], createdAt: ts(now - 1*DAY),
  });
  DB.reports['fl3m9n1d'] = {
    authorUid:'u-sato', authorId:'NR-0001', authorName:'佐藤 花子', authorOccupation:'看護師',
    title:'夜間の転倒インシデントの振り返り', status:'sent', reportType:'free', sections:[], attachments:[], originalId:null, fields:[],
    body:'夜間2時ごろ、一人でトイレに向かった80代の患者さんが病室内で転倒した。外傷はなく、バイタルサインにも変化はなかった。\n\n要因\n・睡眠薬の内服後で、ふらつきがあった\n・ナースコールの位置がベッドから遠かった\n・センサーマットを使っていなかった\n\n対策\n・睡眠薬の内服後は夜間の排泄パターンを確認し、声をかける\n・センサーマットの使用基準をチームで見直す',
    question:'センサーマットの使用基準について、ほかの病棟の例があれば教えてください。',
    recipients:{ 'DR-0001':{ read:false, name:'山田 太郎' } }, recipientIdList:['DR-0001'], createdAt: ts(now - 5*3600e3),
  };
  DB.reports['cp8r5t6e'] = {
    authorUid:'u-suzuki', authorId:'EMT-0001', authorName:'鈴木 一郎', authorOccupation:'救急救命士',
    title:'CPA事案の振り返り(バイスタンダーCPRあり)', status:'sent', reportType:'free', sections:[], attachments:[], originalId:null, fields:[],
    body:'60代男性。自宅で倒れているところを家族が発見し、119番通報。通信指令員の口頭指導で、家族が胸骨圧迫を開始していた。\n\n現着時の心電図はVF。AEDで除細動を1回行い、胸骨圧迫を継続。医師の指示のもとアドレナリンを投与し、搬送中に心拍再開(ROSC)を確認した。\n\n良かった点:口頭指導による早期の胸骨圧迫\n改善点:現着から除細動までの時間をもう少し短くできた',
    question:'', recipients:{ 'DR-0001':{ read:true, name:'山田 太郎' } }, recipientIdList:['DR-0001'], createdAt: ts(now - 3*DAY),
    lastCommentAt: ts(now - 2*DAY), lastCommentByUid:'me', commentReads:{ me: ts(now - 2*DAY) },
  };
  DB.comments['cp8r5t6e'] = [
    { id:'c3', data:{ senderUid:'me', senderName:'山田 太郎', text:'口頭指導がうまく機能した好事例ですね。病院到着後の経過も、分かったら共有します。', createdAt: ts(now - 2*DAY) } },
  ];

  /* ---- 仮のデータ保存(Firebase の代わり) ---- */
  function setPath(obj, path, val){
    const parts = path.split('.');
    let o = obj;
    for(let i=0; i<parts.length-1; i++){ if(typeof o[parts[i]]!=='object' || !o[parts[i]]) o[parts[i]] = {}; o = o[parts[i]]; }
    const k = parts[parts.length-1];
    if(val && val.__union) o[k] = Array.from(new Set([...(o[k]||[]), ...val.__union]));
    else if(val && val.__remove) o[k] = (o[k]||[]).filter(x=>!val.__remove.includes(x));
    else o[k] = fix(val);
  }
  function refreshReports(){
    authoredMap = {}; receivedMap = {};
    Object.entries(DB.reports).forEach(([id, data])=>{
      const r = fromFirestoreReport(id, data);
      if(data.authorUid===ME.uid) authoredMap[id] = r; else if((data.recipientIdList||[]).includes(ME.id)) receivedMap[id] = r;
    });
    mergeAndRenderReports();
  }
  function snapOf(list){ return { docs: list.map(x=>({ id:x.id, data:()=>x.data })) }; }
  function notify(kind, rid){
    listeners.filter(l=>l.kind===kind && l.rid===rid).forEach(l=>l.cb(snapOf(listFor(kind, rid))));
  }
  function listFor(kind, rid){
    if(kind==='comments') return (DB.comments[rid]||[]).slice();
    return (DB.aiReviews[rid]||[]).slice().sort((a,b)=>b.data.createdAt.toMillis()-a.data.createdAt.toMillis()).slice(0,1);
  }
  const ref = (...segs)=>({ path: segs.slice(1).join('/') });
  const copy = (o)=>JSON.parse(JSON.stringify(o, (k,v)=> (v && v.toMillis) ? { __keepTs: v.toMillis() } : v), (k,v)=> (v && v.__keepTs!==undefined) ? ts(v.__keepTs) : v);

  window.fb = {
    auth:{ currentUser:null }, db:{}, storage:{}, functions:{},
    doc: ref, collection: ref, query: (c)=>c, where: ()=>null, orderBy: ()=>null, limit: ()=>null,
    serverTimestamp: ()=>({ __ts:true }),
    arrayUnion: (...v)=>({ __union:v }), arrayRemove: (...v)=>({ __remove:v }),
    async addDoc(c, data){
      const p = c.path.split('/');
      const id = newId();
      const clean = {}; Object.entries(data).forEach(([k,v])=>{ clean[k] = fix(v); });
      if(p[0]==='reports' && p.length===1){ DB.reports[id] = clean; refreshReports(); }
      else if(p[0]==='reports' && p[2]==='comments'){ (DB.comments[p[1]] = DB.comments[p[1]]||[]).push({ id, data:clean }); notify('comments', p[1]); }
      return { id };
    },
    async updateDoc(d, data){
      const p = d.path.split('/');
      if(p[0]==='reports' && DB.reports[p[1]]){ Object.entries(data).forEach(([k,v])=>setPath(DB.reports[p[1]], k, v)); refreshReports(); }
      else if(p[0]==='users'){ const o = { favoriteIds: DB.favorites }; Object.entries(data).forEach(([k,v])=>setPath(o, k, v)); DB.favorites = o.favoriteIds; }
    },
    async deleteDoc(d){
      const p = d.path.split('/');
      if(p[0]==='reports'){ delete DB.reports[p[1]]; refreshReports(); }
    },
    async getDocs(c){
      if(c.path==='users') return { docs: USERS.map(u=>({ id:u.uid, data:()=>({ personalId:u.personalId, name:u.name, occupation:u.occupation }) })) };
      return { docs:[] };
    },
    async getDoc(d){
      return { exists:()=>true, data:()=>({ name:ME.name, occupation:ME.occupation, personalId:ME.id, favoriteIds: DB.favorites.slice() }) };
    },
    onSnapshot(q, cb){
      const p = (q.path||'').split('/');
      if(p[0]==='reports' && (p[2]==='comments' || p[2]==='aiReviews')){
        const l = { kind:p[2], rid:p[1], cb };
        listeners.push(l);
        setTimeout(()=>cb(snapOf(listFor(l.kind, l.rid))), 0);
        return ()=>{ const i = listeners.indexOf(l); if(i>-1) listeners.splice(i,1); };
      }
      return ()=>{};
    },
    httpsCallable(f, name){
      return async (payload)=>{
        await new Promise(r=>setTimeout(r, name==='evaluateReport' ? 1600 : 50));
        if(name==='getMyPlan') return { data:{ plan:{ ...FREE, expiresAt:null, expired:false }, usage:{ aiUsedToday:DB.aiUsed, aiRemainingToday:Math.max(0, FREE.aiDailyLimit-DB.aiUsed) }, plans:[FREE, PRO] } };
        if(name==='evaluateReport'){
          if(DB.aiUsed >= FREE.aiDailyLimit){
            throw Object.assign(new Error('AI評価は無料プランでは1日3回までです。明日またお試しください(プロプランなら1日30回まで使えます)'), { code:'functions/resource-exhausted', details:{ reason:'daily_limit', plan:'free', limit:3 } });
          }
          DB.aiUsed++;
          const rid = payload.reportId;
          const sample = rid && DB.aiReviews[rid] ? copy(DB.aiReviews[rid][0].data.review) : demoReview(rid ? DB.reports[rid] : payload.draft);
          if(rid){
            (DB.aiReviews[rid] = DB.aiReviews[rid]||[]).push({ id:newId(), data:{ review:sample, requestedByUid:ME.uid, requestedByName:ME.name, model:'demo', createdAt: ts(Date.now()) } });
            notify('aiReviews', rid);
          }
          return { data:{ review:sample, model:'demo', reviewId: rid ? 'rv' : null, remaining: FREE.aiDailyLimit - DB.aiUsed, plan:'free' } };
        }
        throw Object.assign(new Error('not-found'), { code:'functions/not-found' });
      };
    },
  };

  function demoReview(r){
    const title = (r && r.title) || 'このレポート';
    return {
      overall:{ level:'fair', summary:`(デモ用のサンプル評価です)実際のAI評価では、「${title}」の内容に合わせて、ガイドラインを検索しながら評価します。` },
      claims:[{ statement:'本文中の医学的な記述', verdict:'unverifiable', explanation:'デモ版のため判定していません。実際には、数値・薬剤・手順などの記述ごとに正誤を判定します。', correction:'' }],
      evidence:{ assessment:'実際の評価では、根拠や出典が十分に示されているかを確認します。', issues:['参考にしたガイドラインや文献の名前と版を書く'] },
      suggestions:[{ point:'根拠を書き添える', detail:'結論ごとに、もとになったガイドラインや観察事実を書くと、読み手が確認しやすくなります。' }],
      references:[{ title:'Minds ガイドラインライブラリ', publisher:'日本医療機能評価機構', url:'', verified:false, note:'国内の診療ガイドラインを探せます', confidence:'high' }],
      search_keywords:[ String(title).slice(0, 20) ],
      question_answer: (r && r.question) ? '(デモ版のため回答していません)実際には、疑問・困りごと欄の質問に回答します。' : '',
      privacy_warning:'',
    };
  }

  /* ---- このページでは使えない機能の差し替え ---- */
  window.confirm = ()=>true;                                    // 確認ダイアログは表示できないため、デモでは「はい」として進める
  window.alert = (m)=>toast(String(m).split('\n')[0]);
  const notInDemo = (what)=>()=>toast(`デモ版では${what}は使えません`);
  window.addAttachment = notInDemo('画像の添付');
  window.toggleMic = notInDemo('音声入力');
  window.deleteAccount = notInDemo('アカウント削除');
  window.changeEmail = notInDemo('メールアドレスの変更');
  window.changePassword = notInDemo('パスワードの変更');
  window.resendVerificationEmail = notInDemo('確認メールの送信');
  window.sendPasswordReset = notInDemo('パスワードの再設定');
  window.installApp = notInDemo('アプリのインストール');
  window.upgradePlan = ()=>toast('有料プランは準備中です');
  window.doLogin = async function(){ startDemo(); };
  window.doLogout = async function(){ S.screen='login'; render(); toast('ログアウトしました(デモ)'); };
  // 印刷・PDF:別タブを開けないため、画面の上にプレビューを重ねて表示する
  window.openPrintWindow = function(d){
    if(!d || !d.title || !d.body){ toast('タイトルと本文は必須です'); return; }
    const html = buildPrintDocumentHTML(d, 'print').replace('</style>', '.toolbar,.hint{display:none!important} body{background:#E9EDF2}</style>');
    const ov = document.createElement('div');
    ov.className = 'demo-print';
    ov.innerHTML = `<div class="demo-print-bar"><b>印刷プレビュー</b><span>アプリ版では、ここから印刷・PDF保存ができます</span><button type="button">閉じる</button></div><iframe title="印刷プレビュー"></iframe>`;
    ov.querySelector('iframe').srcdoc = html;
    ov.querySelector('button').onclick = ()=>ov.remove();
    document.body.appendChild(ov);
  };

  function startDemo(){
    Object.assign(ME, ME_DEMO, { emailVerified:true });
    DIRECTORY = USERS.map(u=>({ uid:u.uid, id:u.personalId, name:u.name, occupation:u.occupation }));
    S.myContacts = DB.favorites.slice();
    refreshReports();
    loadMyPlan();
    go('home');
  }
  startDemo();
})();
