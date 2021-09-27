var bc_kill = new BroadcastChannel('kill_data');
var bc_time = new BroadcastChannel('time_data');
//bc.postMessage(Overlay_Main_Data,MyCharactor_Name,Disappearance,Battle_Current_Time);
Battle_Current_Time = 0;
Overlay_Main_Data = [];
MyCharactor_Name = '';

var Local_Killposition = 'right';
Disappearance = 30;
Local_Maxrow = 5;
Local_Animation = 'true';
Local_Killrog = 'true';
//,MyCharactor_Name,Disappearance,Battle_Current_Time
$(function() {
  addOverlayListener("ChangePrimaryPlayer",(MyName) =>{
    //console.log(MyName);
    MyCharactor_Name = MyName.charName;
  });
  startOverlayEvents();
  bc_time.onmessage = function (bc_time) {
  Battle_Current_Time = bc_time.data;
  //console.log(Battle_Current_Time);
  }

  bc_kill.onmessage = function (bc_kill) {
  Overlay_Main_Data = bc_kill.data;
  //console.log(bc_kill);
  overlayUpdate();
  }

});
