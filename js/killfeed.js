var bc_kill = new BroadcastChannel('kill_data');
var bc_time = new BroadcastChannel('time_data');
//var bc_setting = new BroadcastChannel('setting_data');
//bc.postMessage(Overlay_Main_Data,MyCharactor_Name,Disappearance,Battle_Current_Time);
var Battle_Current_Time = 0;
var Overlay_Main_Data = [];
var MyCharactor_Name = '';

var Local_Killposition = 'right';
var Disappearance = 30;
var Local_Maxrow = 5;
var Local_Animation = 'true';
//
//
var Local_Killrog = 'true';//不変
//,MyCharactor_Name,Disappearance,Battle_Current_Time
function Sub_LocalSave(){
  localStorage.setItem('killrog-position',Local_Killposition);
  localStorage.setItem('maxdisprow',Local_Maxrow);
  localStorage.setItem('animation',Local_Animation);
  localStorage.setItem('killrog-disp',Disappearance);
}
function Sub_LocalSet() {
  Local_Killposition = localStorage.getItem('killrog-position');
  Local_Maxrow = localStorage.getItem('maxdisprow');
  Local_Maxrow = Number(Local_Maxrow);
  Local_Animation = localStorage.getItem('animation');
  Disappearance = localStorage.getItem('killrog-disp');
  Disappearance = Number(Disappearance);
}
function Sub_LocalDefalut(){
  localStorage.setItem('killrog-position','right');
  localStorage.setItem('maxdisprow',5);
  localStorage.setItem('animation','true');
  localStorage.setItem('killrog-disp',30);
}
$(function() {
  if(localStorage.getItem('killrog-position') === null){
    Sub_LocalDefalut();
  }
  else{
    Sub_LocalSet();
  }
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
  /*
  bc_setting.onmessage = function (bc_setting) {

  }
  */
});
