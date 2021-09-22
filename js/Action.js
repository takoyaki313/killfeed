function tank_Action(skill){
  //共通スキル
  if(skill == 'ロウブロウ'
  ||skill == '疾走'
  ||skill == '軍用ポーション'){
    return 'tnk';
  }
  //ロールアクション
  else if(skill == 'フルスイング'
  ||skill == 'ウェポンスロー'
  ||skill == 'リプライザル'
  ||skill == 'ランパート'
  ||skill == '逆襲'
  ||skill == 'イージスブーン'){
    return 'tnk';
  }
  //ナイト
  else if (skill == 'ファストブレード'
  ||skill == 'ライオットソード'
||skill == 'ロイヤルアソリティ'
||skill == 'トータルエクリプス'
||skill == 'プロミネンス'
||skill == 'シールドロブ'
||skill == 'ホーリースピリット'
||skill == 'ホーリーサークル'
||skill == 'コンフィテオル'
||skill == 'インターヴィーン'
||skill == 'レクイエスカット'
||skill == 'インビンシブル'
||skill == 'インターベンション'
||skill == 'テストゥド'
||skill == 'ロイエ'
||skill == 'グローリースラッシュ'){
    return 'pld';
  }
  else if (skill ==　'ヘヴィスウィング'
||skill == 'メイム'
||skill == 'シュトルムヴィント'
||skill == 'ミスリルテンペスト'
||skill == 'スチールサイクロン'
||skill == 'トマホーク'
||skill == 'フェルクリーヴ'
||skill == 'デシメート'
||skill == 'オンスロート'
||skill == 'ホルムギャング'
||skill == 'ウォークライ'
||skill == '原初の解放'
||skill == '原初の猛り'
||skill == 'シェイクオフ'
||skill == 'インナーカオス'
||skill == 'カオティックサイクロン') {
    return 'war';
  }
  else if (skill == 'ハードスラッシュ'
||skill == 'サイフォンストライク'
||skill == 'ソウルイーター'
||skill == 'アンリーシュ'
||skill == 'ストルワートソウル'
||skill == 'アンメンド'
||skill == 'ブラッドスピラー'
||skill == 'クワイタス'
||skill == '漆黒の剣'
||skill == '漆黒の波動'
||skill == 'プランジカット'
||skill == 'ブラッドデリリアム'
||skill == 'ブラックナイト'
||skill == 'ダークミッショナリー') {
    return 'drk';
  }
  else if (skill == ''
  ||skill == 'キーンエッジ'
  ||skill == 'ブルータルシェル'
  ||skill == 'ソリッドバレル'
  ||skill == 'デーモンスライス'
  ||skill == 'デーモンスローター'
  ||skill == 'ビートファング'
  ||skill == 'サベッジクロウ'
  ||skill == 'ウィケッドタロン'
  ||skill == 'サンダーバレット'
  ||skill == 'バーストストライク'
  ||skill == 'フェイテッドサークル'
  ||skill == 'コンティニュエーション'
  ||skill == 'ラフディバイド'
  ||skill == 'ブラッドドロー'
  ||skill == 'バウショック'
||skill == 'オーロラ'
||skill == 'ジャギュラーリップ'
||skill == 'アブドメンテアー'
||skill == 'アイガウジ'
) {
    return 'gnb';
  }
  else {
    console.warn('謎スキル＝' + skill);
    return 'tnk';
  }
}

function healer_Action(skill){
  //共通スキル
  if(skill == '浄化'
  ||skill == '疾走'
  ||skill == '軍用ポーション'){
    return 'hea';
  }
  //ロールアクション
  else if(skill == 'リポーズ'
  ||skill == 'プロテス'
  ||skill == '救出'
  ||skill == '慈愛'
  ||skill == '調和'
  ||skill == 'エンピリアンレイン'){
    return 'hea';
  }
  else if (skill == 'ケアル'
  ||skill == 'ケアルラ'
  ||skill == 'メディカ'
  ||skill == 'グレア'
  ||skill == 'ディア'
  ||skill == 'ハート・オブ・ソラス'
  ||skill == 'ハート・オブ・ラプチャー'
  ||skill == 'ハート・オブ・ミゼリ'
  ||skill == 'テトラグラマトン'
  ||skill == 'アサイズ'
  ||skill == 'テンパランス') {
    return 'whm';
  }
  else if (skill == 'フィジク'
  ||skill == '鼓舞激励の策'
  ||skill == '士気高揚の策'
  ||skill == '死炎法'
  ||skill == '蠱毒法'
  ||skill == '生命活性法'
  ||skill == '不撓不屈の策'
  ||skill == '深謀遠慮の策'
  ||skill == '精神統一の策'
  ||skill == '生命波動法'
  ||skill == '転化') {
    return 'sch';
  }
  else if (skill == 'ベネフィク'
  ||skill == 'ベネフィラ'
  ||skill == 'ヘリオス'
  ||skill == 'マレフィジャ'
  ||skill == 'コンバガ'
  ||skill == 'グラビデ'
  ||skill == 'ディグニティ'
  ||skill == '星天対抗'
  ||skill == 'マイナーアルカナ'
  ||skill == 'ディヴィネーション'
  ||skill == 'ニュートラルセクト'
  ||skill == 'アスペクト・ベネフィク'
  ||skill == 'アスペクト・ヘリオス'
  ||skill == 'クラウンロード'
  ||skill == 'クラウンレディ') {
    return 'ast';
  }
  else {
    //console.warn('謎スキル＝' + skill);
    return 'hea';
  }
}
function mellee_Action(skill){
  if(skill == 'スマイト'
  ||skill == '疾走'
  ||skill == '軍用ポーション'){
    return 'mel';
  }
  //ロールアクション
  else if(skill == '牽制'
  ||skill == 'ブラッドバス'
  ||skill == 'アームズレングス'
  ||skill == 'フェターウォード'
  ||skill == 'バックステップ'
  ||skill == 'ロウディストラクション'){
    return 'mel';
  }
  else if (skill == '連撃'
  ||skill == '正拳突き'
  ||skill == '崩拳'
  ||skill == '四面脚'
  ||skill == '地烈斬'
  ||skill == '六合星導脚'
  ||skill == '陰陽闘気斬'
  ||skill == '万象闘気圏'
  ||skill == '闘魂旋風脚'
  ||skill == '羅刹衝'
  ||skill == 'かかと落とし'
  ||skill == '紅蓮の極意'
  ||skill == '金剛の極意'
  ||skill == '桃園結義') {
    return 'mnk';
  }
  else if (skill == '竜眼雷電'
  ||skill == 'フルスラスト'
  ||skill == '竜牙竜爪'
  ||skill == '竜尾大車輪'
  ||skill == 'ドゥームスパイク'
  ||skill == 'ソニックスラスト'
  ||skill == 'クルザントーメント'
  ||skill == 'ピアシングタロン'
  ||skill == 'ハイジャンプ'
  ||skill == 'スパインダイブ'
  ||skill == 'スターダイバー'
  ||skill == 'イルーシブジャンプ'
  ||skill == 'ミラージュダイブ'
  ||skill == 'ゲイルスコグル'
  ||skill == 'ライフサージ'
  ||skill == 'ドラゴンサイト'
  ||skill == 'ナーストレンド') {
    return 'drg';
  }
  else if (skill == '双刃旋'
  ||skill == '風断ち'
  ||skill == '旋風刃'
  ||skill == '血花五月雨'
  ||skill == '八卦無刃殺'
  ||skill == '投刃'
  ||skill == '六道輪廻'
  ||skill == '口寄せの術・大蝦蟇'
  ||skill == '終撃'
  ||skill == '辻風'
  ||skill == '三印自在'
  ||skill == '分身の術'
  ||skill == '縮地'
  ||skill == '隠身の術'
  ||skill == '氷晶乱流の術'
  ||skill == '劫火滅却の術'
  ||skill == 'だまし討ち') {
    return 'nin';
  }
  else if (skill == '雪風'
  ||skill == '月光'
  ||skill == '花車'
  ||skill == '満月'
  ||skill == '桜花'
  ||skill == '燕飛'
  ||skill == '乱れ雪月花'
  ||skill == '天下五剣'
  ||skill == '燕返し'
  ||skill == '必殺剣・震天'
  ||skill == '必殺剣・九天'
  ||skill == '必殺剣・早天'
  ||skill == '必殺剣・地天'
  ||skill == '照破'
  ||skill == '返し雪月花'
  ||skill == '返し五剣') {
    return 'sam';
  }
  else {
    console.warn('謎スキル＝' + skill);
    return 'mel';
  }
}
function ranged_Action(skill){
  if(skill == 'ヘッドグレイズ'
  ||skill == '疾走'
  ||skill == '軍用ポーション'){
    return 'rng';
  }
  //ロールアクション
  else if(skill == 'レッググレイズ'
  ||skill == 'フットグレイズ'
  ||skill == '集中'
  ||skill == 'プロトン'
  ||skill == '快気'
  ||skill == 'ターミナルベロシティ'){
    return 'rng';
  }
  else if (skill == 'バーストショット'
  ||skill == 'クイックノック'
  ||skill == 'エイペックスアロー'
  ||skill == 'エンピリアルアロー'
  ||skill == 'ピッチパーフェクト'
  ||skill == 'サイドワインダー'
  ||skill == 'シャドウバイト'
  ||skill == 'リペリングショット'
  ||skill == '旅神のメヌエット'
  ||skill == '軍神のパイオン'
  ||skill == '地神のミンネ') {
    return 'brd';
  }
  else if (skill == 'ヒートスプリットショット'
  ||skill == 'ヒートスラッグショット'
  ||skill == 'ヒートクリーンショット'
  ||skill == 'スプレッドショット'
  ||skill == 'ドリル'
  ||skill == 'エアアンカー'
  ||skill == 'バイオブラスト'
  ||skill == 'ガウスラウンド'
  ||skill == 'リコシェット'
  ||skill == 'ワイルドファイア'
  ||skill == 'ブランク'
  ||skill == 'ハイパーチャージ'
  ||skill == 'タクティシャン'
  ||skill == 'ヒートブラスト'
  ||skill == 'オートボウガン') {
    return 'mch';
  }
  else if (skill == 'カスケード'
  ||skill == 'ファウンテン'
  ||skill == 'ウィンドミル'
  ||skill == 'ブレードシャワー'
  ||skill == '剣の舞い'
  ||skill == '扇の舞い【序】'
  ||skill == '扇の舞い【破】'
  ||skill == '扇の舞い【急】'
  ||skill == 'スタンダードステップ'
  ||skill == 'テクニカルステップ'
  ||skill == '癒やしのワルツ'
  ||skill == 'クローズドポジション'
  ||skill == 'アン・アヴァン'
  ||skill == 'リバースカスケード'
  ||skill == 'ファウンテンフォール'
  ||skill == 'ライジングウィンドミル'
  ||skill == 'ブラッドシャワー'
  ||skill == '薔薇のアンボワテ'
  ||skill == '小鳥のアントルシャ'
  ||skill == '緑葉のジュテ'
  ||skill == '金冠のピルエッテ'
  ||skill == 'スタンダードフィニッシュ'
  ||skill == 'テクニカルフィニッシュ'
  ||skill == 'クローズドポジション解除') {
    return 'dnc';
  }
  else {
    console.warn('謎スキル＝' + skill);
    return 'rng';
  }
}
function caster_Action(skill){
  if(skill == 'ファントムダート'
  ||skill == '疾走'
  ||skill == '軍用ポーション'){
    return 'cas';
  }
  //ロールアクション
  else if(skill == 'ドレイン'
  ||skill == 'アドル'
  ||skill == 'エーテルバースト'
  ||skill == '迅速魔'
  ||skill == 'マバリア'
  ||skill == 'コメテオ'){
    return 'cas';
  }
  else if (skill == 'ファイア'
  ||skill == 'ブリザド'
  ||skill == 'サンダー'
  ||skill == 'サンダラ'
  ||skill == 'フレア'
  ||skill == 'フリーズ'
  ||skill == 'エノキアン'
  ||skill == 'ファウル'
  ||skill == 'ゼノグロシー'
  ||skill == 'ナイトウィング'
  ||skill == 'エーテリアルステップ'
  ||skill == 'サンダガ'
  ||skill == 'サンダジャ'
  ||skill == 'ファイジャ'
  ||skill == 'ブリザジャ') {
    return 'blm';
  }
  else if (skill == 'ルインガ'
  ||skill == 'バイオガ'
  ||skill == 'エナジードレイン'
  ||skill == 'トライディザスター'
  ||skill == 'アウトバースト'
  ||skill == 'ミアズマバースト'
  ||skill == 'ペインフレア'
  ||skill == 'ベイン'
  ||skill == 'ウィザー'
  ||skill == 'デスフレア'
  ||skill == 'トランス・バハムート'
  ||skill == '霊泉の炎'
  ||skill == '煉獄の炎'
  ||skill == 'トランス・フェニックス') {
    return 'smn';
  }
  else if (skill == 'エンリポスト'
  ||skill == 'エンツヴェルクハウ'
  ||skill == 'エンルドゥブルマン'
  ||skill == 'ヴァルストーン'
  ||skill == 'ヴァルファイア'
  ||skill == 'スキャッター'
  ||skill == 'ヴァルケアル'
  ||skill == 'エンルプリーズ'
  ||skill == 'エンムーリネ'
  ||skill == 'コル・ア・コル'
  ||skill == 'デプラスマン'
  ||skill == 'アンガジェマン'
  ||skill == 'エンボルデン'
  ||skill == 'ヴァルエアロ'
  ||skill == 'ヴァルサンダー'
  ||skill == 'ヴァルホーリー'
  ||skill == 'ヴァルフレア'
  ||skill == 'インパクト'
  ||skill == 'スコーチ') {
    return 'rdm';
  }
  else {
    console.warn('謎スキル＝' + skill);
    return 'cas';
  }
}
/*
else if (skill == ''
||skill == ''
||skill == ''
||skill == ''
||skill == ''
||skill == ''
||skill == ''
||skill == ''
||skill == ''
||skill == ''
||skill == ''
||skill == ''
||skill == ''
||skill == ''
||skill == ''
||skill == '') {
  return '';
}
*/
