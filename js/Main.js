/*        $(document).on("click", "#obj1", function(){

        });
*/
var MyCharactor_Name = '';
var Battle_Start_Time = 0;
var Battle_Current_Time = 0;
var Battle_start = new Boolean();
var Battle_KD = [0,0];
var Party_Member = [];
var Aliance_Member = [];
var All_Member_Jobs = [];
var Overlay_Main_Data = [];
var Datacenter = 'none';
var What_Display = 'any';
var Log_Listen_Force_On = false;
var Set_Battle_Time = 0;
var Timer_interval;
var Area_Name = '';
var Disappearance = 30;


function All_Member_Jobs_out(){
  return All_Member_Jobs;
}
function killPlayerCheck(log){
  if(log.line.length == 6){
    //console.warn(log);
    if(log.line[0] == '00'){
      if(log.line[2] !== '0'){
        if(log.line[4].indexOf('を倒した') !== -1){

          //console.log(log);
          if(log.line[4].indexOf('マグス')!== -1
          ||log.line[4].indexOf('バイキング')!== -1
          ||log.line[4].indexOf('マーシナリー')!== -1
          ||log.line[4].indexOf('タンク')!== -1
        ){//オブジェクトを破壊した場合
          //なにもしない
          }
          else{//プレイヤーを倒した場合
            //audio.play();
            let ally = log.line[4].substring(0,log.line[4].indexOf('は、'));
            var enemy = log.line[4].substring(log.line[4].indexOf('は、') + 2,log.line[4].indexOf('を倒した'));
            console.log('kill' + ally +'→'+ enemy);
            let ally_cut = cut_server(ally);
            let enemy_cut = cut_server(enemy);
            if_kill_or_death(ally_cut[0],ally_cut[1],enemy_cut[0],enemy_cut[1],'kill');
            }//プレイヤー倒しここまで
          }//~を倒した
        }//logline 2
      }//logline 0

    }//logline length6
}
function cut_server(oldname){
  let server = 'none';
  //console.log(Datacenter);
  if(Datacenter == 'none'){
    server = gaia_Server(oldname);
    //console.log(server);
    Datacenter = 'GAIA';
    if (server == 'none'){
      server = mana_Server(oldname);
      Datacenter = 'MANA';
    }
    if (server == 'none'){
      /*
      let server = elemental_Server(oldname);
      Datacenter = 'ELEMENTAL';
      */
    }
    if (server == 'none'){//サーバが特定できなかった場合
      Datacenter = 'none';
      console.warn('Serverみつからんかったわ！');
    }
  }
  else if (Datacenter == 'GAIA'){
    server = gaia_Server(oldname);
    console.log('syouryaku');
  }
  else if (Datacenter == 'MANA') {
    server = mana_Server(oldname);
  }
  //console.log(server.length);
  let name ='';
  if(server !== 'none'){
    name = oldname.slice(0,oldname.length - server.length);
  }
  else{
    name = oldname;
  }
  let data = [name,server];
  //console.log(data);
  return data;
}

function deathPlayerCheck(log){
  if(log.line.length == 6){
    //console.warn(log);
    if(log.line[0] == '00'){
      if(log.line[2] !== '0'){
        if(log.line[4].indexOf('に倒された') !== -1){

          //console.log(log);
          if(log.line[4].indexOf('マグス')!== -1
          ||log.line[4].indexOf('バイキング')!== -1
          ||log.line[4].indexOf('マーシナリー')!== -1
          ||log.line[4].indexOf('タンク')!== -1
        ){//オブジェクトを破壊した場合
          //なにもしない
          }
          else{//プレイヤーを倒した場合
            //KillSound = new Audio('https://takoyaki313.github.io/Gorge-Overlay/sound/zyaki.wav');
            //KillSound.play();
            let ally = log.line[4].substring(0,log.line[4].indexOf('は、'));
            let enemy = log.line[4].substring(log.line[4].indexOf('は、') + 2 ,log.line[4].indexOf('に倒された'));
            console.log('death' + ally +'←'+ enemy);
            let ally_cut = cut_server(ally);
            let enemy_cut = cut_server(enemy);
            if_kill_or_death(ally_cut[0],ally_cut[1],enemy_cut[0],enemy_cut[1],'death');
            }//プレイヤー倒しここまで
          }//~を倒した
        }//logline 2
      }//logline 0

    }//logline length6
}
function dammy_Data(){
  Overlay_Main_Data[0]=['Justice Suzuki','Server',1,'jas','skill','Nathaniel Tamwood','Server',0,'sch','skill',40];
  Overlay_Main_Data[1]=['Oppresor Tanaka','Server',10,'opp','skill','Maxsizeno Namenoohito','Server',0,'sam','skill',42];
  Overlay_Main_Data[2]=['Chaiser Satou','Server',2,'che','skill','Raphael Tachibana','Server',0,'brd','skill',46];
  Overlay_Main_Data[3]=['Daniel Tepesh','Server',6,'whm','skill','Carl Tanner','Server',0,'nin','skill',60];
  Overlay_Main_Data[4]=['Michael Twining','Server',0,'pld','skill','Ansel Tod','Server',4,'gnb','skill',60];
  Overlay_Main_Data[5]=['Samuel Takano','Server',3,'war','skill','Angel Twist','Server',0,'nin','skill',61];
  Overlay_Main_Data[6]=['Gabriel Tepes','Server',0,'drk','skill','Carmel Tae-yeon','Server',5,'nin','skill',63];
}

function what_change_job(hp,name,skill){
  //console.log('B');
    //All_Member_Jobs[k] = [name,aliance,hp,jobs,skill];
  if(All_Member_Jobs.length == 0){//データなしの場合
    return 1;
  }
  else{
    //console.log('A');
    for(let j = 0 ; j < All_Member_Jobs.length ; j++){
      if(All_Member_Jobs[j][0] == name){
        //console.log('同一の名前：' + name);
        //同一の名前が見つかったとき
        if(All_Member_Jobs[j][2] == hp){//最大HPが同じとき
          if(skill == '軍用ポーション'||skill == '疾走'||skill.indexOf('Mount') !== -1){
            All_Member_Jobs[j] == [All_Member_Jobs[j][0],All_Member_Jobs[j][1],All_Member_Jobs[j][2],All_Member_Jobs[j][3],skill];
          }
          //console.log('最大HPが同一' + hp + '＝' +All_Member_Jobs[j][2]);
          if(All_Member_Jobs[j][3] == 'tnk'
          ||All_Member_Jobs[j][3] == 'hea'
          ||All_Member_Jobs[j][3] == 'mel'
          ||All_Member_Jobs[j][3] == 'rng'
          ||All_Member_Jobs[j][3] == 'cas'){
            return 1;
          }
          else{
            return 0;
          }
        }
        else{//最大HPが違うとき
          return 1;
        }
      }
    }//For終了
    return 1;//同一の名前が見つからなかったとき
  }
  console.warn('Error: what change job???');
  return 0;
}

function All_Member_Jobs_add(name,hp,jobs,skill){
  if(All_Member_Jobs.length == 0){
    All_Member_Jobs[0]=[name,0,hp,jobs,skill];
  }
  else{
    for(let k = 0 ; k < All_Member_Jobs.length ; k++){
      if(All_Member_Jobs[k][0] == name){
        All_Member_Jobs[k] = [All_Member_Jobs[k][0],All_Member_Jobs[k][1],hp,jobs,skill];
        k = 200;//ループを終わらせる
      }
      else if (k == All_Member_Jobs.length - 1){
        const add_point = All_Member_Jobs.length;
        All_Member_Jobs[add_point] = [name,0,hp,jobs,skill];
        k = 200;//ループを終わらせる
      }
    }
  }
  console.log('データ更新 : ' + name +'が' + jobs +':'+ hp + '/' +skill);
  console.log(All_Member_Jobs);
}

function job_Detect(log) {
  const name = log[3];
  if(name.indexOf('ファルコン') == -1 && name.indexOf('レイヴン') == -1 && name.indexOf('マーシナリー') == -1){//オブジェクトのデータを除外
    let maxHP = log[35];
    maxHP = Number(maxHP);
    const skill = log[5];
    //最大HPチェック
    //console.log(maxHP);
    if(maxHP == 20000){//Tankのとき
      if(what_change_job(maxHP,name,skill) == 1){
        let job = tank_Action(skill);
        console.log(job);
        All_Member_Jobs_add(name,maxHP,job,skill);
      }
    }
    else if (maxHP == 15000) {//キャスのとき
      if(what_change_job(maxHP,name,skill) == 1){
        let job = caster_Action(skill);
        All_Member_Jobs_add(name,maxHP,job,skill);
      }
    }
    else if (maxHP == 16000){//レンジのとき
      if(what_change_job(maxHP,name,skill) == 1){
        let job = ranged_Action(skill);
        console.log(job);
        All_Member_Jobs_add(name,maxHP,job,skill);
      }
    }
    else if (maxHP == 17500){//ヒラもしくは近接のとき
      if(what_change_job(maxHP,name,skill) == 1){
        let job = healer_Action(skill);
        if(job == 'hea'){
          job = mellee_Action(skill);
        }
        console.log(job);
        All_Member_Jobs_add(name,maxHP,job,skill);
      }
    }
    else if (maxHP == 50000){//チェイサーのとき
      if(what_change_job(maxHP,name,skill) == 1){
        let job = 'che';
        console.log(job);
        All_Member_Jobs_add(name,maxHP,job,skill);
      }
    }
    else if (maxHP == 75000){//ジャスのとき
      if(what_change_job(maxHP,name,skill) == 1){
        let job = 'jas';
        console.log(job);
        All_Member_Jobs_add(name,maxHP,job,skill);
      }
    }
    else if (maxHP == 100000){//オプの時
      if(what_change_job(maxHP,name,skill) == 1){
        let job = 'opp';
        console.log(job);
        All_Member_Jobs_add(name,maxHP,job,skill);
      }
    }
    else {
      console.warn('Not Job Detected');
      console.warn(log);
    }
  }
}//job_Detect end
//All_Member_Jobs[0]=[name,aliance,hp,jobs,action]
function alliance_data_marge(){
  if(All_Member_Jobs.length == 0){//データが存在しない場合
    for(let j = 0 ; j < Aliance_Member.length ; j++){
      All_Member_Jobs[j] = [Aliance_Member[j][0],Aliance_Member[j][1],-1,'yey',];
    }
  }
  else{//データが存在する場合
    for(let j = 0 ; j < Aliance_Member.length ; j++){
      for(let k = 0 ; k < All_Member_Jobs.length ; k++){
        if(Aliance_Member[j][0] == All_Member_Jobs[k][0]){//同じ名前の場合
          All_Member_Jobs[k] = [All_Member_Jobs[k][0],Aliance_Member[j][1],All_Member_Jobs[k][2],All_Member_Jobs[k][3],All_Member_Jobs[k][4]];
          k = 200;
        }
        else if(All_Member_Jobs.length - 1 == k ){//データが存在しないため新規追加
          All_Member_Jobs[All_Member_Jobs.length] = [Aliance_Member[j][0],Aliance_Member[j][1],-1,'yey',''];
          k = 200;
        }
      }
    }
  }
  console.log('PartyChangedによるマージ');
  console.log(All_Member_Jobs);
}
function array_reset(){
  Party_Member = [];
  Aliance_Member = [];
  All_Member_Jobs = [];
  Battle_KD = [0,0];
  Battle_start = false;
  BattleTime = 0;
  //Overlay_Main_Data = [];
  console.log('dataclear');
}
function fl_alliance(){
  for(var i = 0; i < 24 ; i++){
    if(Aliance_Member[i][1] == 2){
      Aliance_Member[i][1] = 1;
    }
    else if(Aliance_Member[i][1] == 4){
      Aliance_Member[i][1] = 3;
    }
    else if(Aliance_Member[i][1] == 6){
      Aliance_Member[i][1] = 5;
    }
  }
}
$(function() {
  "use strict";
  let tensyon_max = 0;
  let log_Listen_Mode = 0;
  Battle_start = false;
  addOverlayListener("ChangePrimaryPlayer",(MyName) =>{
    //console.log(MyName);
    MyCharactor_Name = MyName.charName;
    Datacenter = 'none';
  });

  addOverlayListener('PartyChanged', (p) => {
    if(p.party.length > 4){//パーティメンバーを関数に入れる
      Party_Member = [];
      if(p.party.length == 24){
        Aliance_Member = [];
        let aliance = 1;
        for(var z = 0;z < 24; z++){
          if(z > 3){
            if(z % 4 == 0){
              aliance++;
            }
          }
          Aliance_Member[z] =  [p.party[z].name,aliance];
        }
        if(log_Listen_Mode == 2){
          fl_alliance();
        }
        alliance_data_marge();
      }
      else if (Aliance_Member.length == 24){
        //not update
      }
      else{//23人以下かつ一度も24人そろってない場合
        Aliance_Member = [];
        let aliance = 10;
        for(var z = 0;z < p.party.length; z++){
          Aliance_Member[z] =  [p.party[z].name,aliance];
        }
        alliance_data_marge();
      }
      console.log(Aliance_Member);
      for (var n = 0; n < 9; n++) {
        if(p.party[n].inParty){
          Party_Member[n] = p.party[n].name;
        }
        //console.log(test);
      }
        console.log('inParty');
        console.log(Party_Member);
    }
  });

  addOverlayListener("ChangeZone",(Area) => {
    //console.log(Area);
    Area_Name = Area.zoneName;
    if(Area.zoneName == 'Hidden Gorge'){
      Set_Battle_Time = 900;
      Battle_Current_Time = 0;
      log_Listen_Mode = 1;
      headerUpdate();
    }
    else if(Area.zoneName.indexOf('Bourderland Ruins')!== -1
    ||Area.zoneName.indexOf('Seal Rock')!== -1
    ||Area.zoneName.indexOf('Fields Of Glory')!== -1
    ||Area.zoneName.indexOf('Onsal Hakair')!== -1){
      Set_Battle_Time = 1200;
      Battle_Current_Time = 0;
      log_Listen_Mode = 2;
      headerUpdate();
    }
    else if (Area.zoneID == 250){
      Set_Battle_Time = Battle_Current_Time;
      log_Listen_Mode = 3;
      headerUpdate();
    }
    else if (Area.zoneName == 'Middle La Noscea') {
      Set_Battle_Time = 5999;
      log_Listen_Mode = 1;
      battle_counter();
      headerUpdate();
    }
    else{
      Set_Battle_Time = Battle_Current_Time;
      headerUpdate();
      log_Listen_Mode = 0;
      tensyon_max = 0;
      array_reset();
    }
  });

  addOverlayListener("LogLine", (log) => {
    /*
    if(log.line.length > 4){
      console.warn(log);
    }
    */

    if(log_Listen_Mode !== 0||Log_Listen_Force_On){
      if(log.line.length == 47){
        if(log.line[0] !== '38'){//mode 38のログは無関係
          job_Detect(log.line);
        }
      }
      if(log.line.length == 8){//BattleTime
        if(log.line[3] == 'ハンガーターミナル'&&log.line[5] == 'ハンガーターミナル'){
          battle_counter();
        }
      }
      if(log.line.length == 6){
        if(log.line[4].indexOf('フロントライン') !== -1 && log.line[4].indexOf('として参加しました') !== -1){
          $(document).ready(function(){setTimeout(function(){
            battle_counter();
          }, 45000);
          });
        }
      }

      if(log.line.length == 14){
        if(log.line[3] == 'テンションマックス'){
          if(log.line[8] == MyCharactor_Name){
            tensyon_max = 1;
          }
        }
      }
      killPlayerCheck(log);
      deathPlayerCheck(log);
    }



  });
  startOverlayEvents();
  headerUpdate();
});
function battle_counter(){
  console.log(Battle_start);
  if(Battle_start){
    console.log('already start');
    //既にスタートしているならなにもしない
  }
  else{
    console.log('Start Timer');
    Battle_start = true;
    Battle_Start_Time = new Date;
    Timer_interval = setInterval(countUp,1000);
  }
}
function countUp(){
  let nowtime = new Date;
  //Battle_Start_Time
  let current_time_ms = nowtime.getTime() - Battle_Start_Time.getTime();
  Battle_Current_Time = Math.floor(current_time_ms/1000);
  //console.log(Battle_Current_Time);
  if(Battle_Current_Time <= Set_Battle_Time){
    headerUpdate();
    overlayUpdate();
  }
  else{
    overlayUpdate();
  }
  if(Battle_Current_Time >= Set_Battle_Time + Disappearance){
    console.log('Stop Timer + Overlay Data reset');
    Overlay_Main_Data = [];
    clearInterval(Timer_interval);
  }
}

function if_kill_or_death(ally_name,ally_server,enemy_name,enemy_server,which_corpse){//味方,敵,キルされたかキルしたか
  if (What_Display = 'any'){
    if(which_corpse == 'kill'){
      Battle_KD[0]++;
      maindata_marge(ally_name,ally_server,enemy_name,enemy_server,1);
    }
    else if (which_corpse == 'death') {
      Battle_KD[1]++;
      maindata_marge(enemy_name,enemy_server,ally_name,ally_server,0);
    }
    overlayUpdate();
  }
  else if (What_Display = 'Kill'){
    if(which_corpse == 'kill'){
      maindata_marge(ally_name,ally_server,enemy_name,enemy_server,1);
      overlayUpdate();
    }
  }
  else if (What_Display = 'death'){
    if(which_corpse == 'death'){
      maindata_marge(enemy_name,enemy_server,ally_name,ally_server,0);
      overlayUpdate();
    }
  }
}

  //Overlay_Main_Data[6]=['Name','Server','Aliance','Jobs','skill','Name','Server','Aliance','Jobs','skill'];
  //All_Member_Jobs[k] = [name,aliance,hp,jobs,skill];
function maindata_marge(left_name,left_server,right_name,right_server,how){
  //ジョブとアライアンス情報を結合して表示用の配列「Overlay_Main_Data」に入れる
  //                  0           1       2     3     4     5           6           7   8     9    10
  var push_data = [left_name,left_server,0,'hmm','none',right_name,right_server,0,'hmm','none',Battle_Current_Time,how];
  for(let z = 0 ; z < All_Member_Jobs.length ; z++){
    let roop_end = 0 ;
    if (All_Member_Jobs[z][0] == left_name){
      roop_end++;
      push_data = [push_data[0],push_data[1],All_Member_Jobs[z][1],All_Member_Jobs[z][3],All_Member_Jobs[z][4],push_data[5],push_data[6],push_data[7],push_data[8],push_data[9],push_data[10],push_data[11]];
    }
    else if (All_Member_Jobs[z][0] == right_name){
      roop_end++;
      push_data = [push_data[0],push_data[1],push_data[2],push_data[3],push_data[4],push_data[5],push_data[6],All_Member_Jobs[z][1],All_Member_Jobs[z][3],All_Member_Jobs[z][4],push_data[10],push_data[11]];
    }
    if(roop_end == 2){
      z = 200;
    }
  }
  console.log(push_data);
  Overlay_Main_Data.push(push_data);
  console.log(Overlay_Main_Data);
}
function headerUpdate(){
  var header = $(header_space);
  //header top start
  header.find('.areaname').text(Area_Name);
  let time = time_change();
  header.find('.time-min').text(time[0]);
  header.find('.time-coron').text(':');
  header.find('.time-sec').text(time[1]);
  //header top end
  //header under start
  var min_kill_death = min_data();
  header.find('.what-header-data').text('Mode: '+'All');
  header.find('.kill-num').text('K : '+ Battle_KD[0] +' ('+ min_kill_death[0] +')');
  header.find('.death-num').text('D : '+ Battle_KD[1] +' ('+ min_kill_death[1] +')');
  let kd_rate_kill = Battle_KD[0] + 1;
  let kd_rate_death = Battle_KD[1] + 1;
  let kd_rate = kd_rate_kill / kd_rate_death ;
  header.find('.all-kd-percent').text(' K/D : ' + kd_rate.toFixed(2));
  //header under end
  //console.log('headerUpdate');
}
function min_data(){
  //                  0           1       2     3     4     5           6           7   8     9    10
  //var push_data = [left_name,left_server,0,'hmm','none',right_name,right_server,0,'hmm','none',Battle_Current_Time,how];
  var data = [0,0];
  for(let p = Overlay_Main_Data.length - 1 ; p >= 0 ; p--){
    if(Overlay_Main_Data[p][10] + 60 > Battle_Current_Time){
      if(Overlay_Main_Data[p][11] == 1){
        data[0]++;
      }
      else if (Overlay_Main_Data[p][11] == 0) {
        data[1]++;
      }
    }
    else{
      return data;
    }
  }
  return data;
}
function time_change(){
  var division_time = [0,0];
  if(2 == 2){
    var time = Set_Battle_Time - Battle_Current_Time;
  }
  else {
    var time = Battle_Current_Time;
  }
  if(time < 0){
    time = 0;
  }
  division_time[0] = Math.trunc(time / 60);
  const temp = division_time[0] * 60;
  division_time[1] = time - temp;
  if (division_time[1] < 10) {
    division_time[1] = "0" + division_time[1];
  }
  return division_time;
}

function overlayUpdate(){
  //headerUpdate();
  var maxrow = 7;
  var disprow = maxrow ;
  var template = $('#source li');
  var container = $('#overlay').clone();
  container.html('');
  //Reset
  if(Overlay_Main_Data.length < maxrow){
    disprow = Overlay_Main_Data.length;
  }
  //                  0           1          2     3     4         5           6           7           8     9    10
  // push_data = [left_name,left_server,alliance,'job','skill',right_name,right_server,allilance,'job','skill',Battle_Current_Time];
  for(let i = Overlay_Main_Data.length - disprow ; i < Overlay_Main_Data.length ; i++){
    let display_arrived = Battle_Current_Time - Overlay_Main_Data[i][10];
    if(display_arrived <= Disappearance){
      var row = template.clone();
      if(display_arrived == Disappearance){
        console.log('fadeout_start');
        row.find('.main-data').addClass('fadeout');
      }
      if(Overlay_Main_Data[i][0] == MyCharactor_Name){
        row.find('.left-space').addClass('me');
      }
      else{
        row.find('.left-space').addClass('aliance' + Overlay_Main_Data[i][2]);
      }
      row.find('.left-jobicon').addClass('icon-' + Overlay_Main_Data[i][3]);
      row.find('.left-name').text(Overlay_Main_Data[i][0]);
      row.find('.arrow').addClass('icon-NaviArrowRight');
      if(Overlay_Main_Data[i][2] == 0 && Overlay_Main_Data[i][7] !== 0){
        row.find('.arrow').addClass('arrow-death');
      }
      else if(Overlay_Main_Data[i][2] == 0 && Overlay_Main_Data[i][7] == 0){
        row.find('.arrow').addClass('arrow-other');
      }
      else if(Overlay_Main_Data[i][2] !== 0 && Overlay_Main_Data[i][7] == 0){
        row.find('.arrow').addClass('arrow-kill');
      }
      if(Overlay_Main_Data[i][5] == MyCharactor_Name){
        row.find('.right-space').addClass('me');
      }
      else{
        row.find('.right-space').addClass('aliance' + Overlay_Main_Data[i][7]);
      }
      row.find('.right-jobicon').addClass('icon-' + Overlay_Main_Data[i][8]);
      row.find('.right-name').text(Overlay_Main_Data[i][5]);
      container.append(row);
      }
      else{
        //console.log('20s Over');
      }
    }

  $('#overlay').replaceWith(container);
}
