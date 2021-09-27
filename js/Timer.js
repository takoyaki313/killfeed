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
  if(Local_send_data == 'true'){
    bc_time.postMessage(Battle_Current_Time);
  }
  //console.log(Battle_Current_Time);
  if(Battle_Current_Time <= Set_Battle_Time){
    headerUpdate();
    if(Local_send_data == 'true'){
      bc_kill.postMessage(Overlay_Main_Data);
    }
    overlayUpdate();
  }
  else{
    if(Local_send_data == 'true'){
      bc_kill.postMessage(Overlay_Main_Data);
    }
    overlayUpdate();
  }
  console.log(Battle_Current_Time+'>='+Set_Battle_Time+'+'+Disappearance);
  console.log(Battle_Current_Time);
  console.log(Set_Battle_Time);
  console.log(Disappearance);
  if(Battle_Current_Time >= Set_Battle_Time + Disappearance){
    console.log('Stop Timer + Overlay Data reset');
    Overlay_Main_Data = [];
    Battle_Current_Time = 0;
    clearInterval(Timer_interval);
  }
}
