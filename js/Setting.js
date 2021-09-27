//click button-4 start (setting-button)
$(document).on("click", "#button-4", function(){
  //console.log('click');
  local_data_reflesh();
  local_setting_update();
  $('body').css('background-color','black');
  $('#overlay').css('display','none');
  $('.header').css('display','none');
  $('.set-data').css('display','flex');
});//click button-4 end (setting-button)
//click button-5 start (setting-button-close)
$(document).on("click", "#button-5", function(){
  //console.log('click');
  local_data_update();
  local_save();
  overlayUpdate();
  Second_area = false;
    $('body').css('background-color','transparent');
  $('#overlay').css('display','flex');
  $('.header').css('display','flex');
  $('.set-data').css('display','none');

});//click button-5 end (setting-button-close)
//  DispMax= $('#p-max').val();
//Disappearance//$("#setting-item-3").prop("checked") == true
//click button-5 start (setting-button-close)
//$('#p-max').val(Number(DispMax));
$(document).on("click", "#setting-item-9", function(){
  localStorage.clear();
  local_create();
  local_data_reflesh();
  local_setting_update();
  console.log('Data_reset');
  });//click button-5 end (setting-button-close)
$(document).on("click", "#setting-item-8-2", function(){
  dammy_Data();
  });//click button-5 end (setting-button-close)
function local_create(){
  localStorage.setItem('killrog','true');
  localStorage.setItem('killrog-position','right');
  localStorage.setItem('header','true');
  localStorage.setItem('pve-header','true');
  localStorage.setItem('what-killrog','true');
  localStorage.setItem('send-data','false');
  localStorage.setItem('maxdisprow',5);
  localStorage.setItem('animation','true');
  localStorage.setItem('killrog-disp',30);
  localStorage.setItem('FL-offset',43000);
  localStorage.setItem('killfeed-version','kill-feed-core 1.02');
}
function local_save(){
  localStorage.setItem('killrog',Local_Killrog);
  localStorage.setItem('killrog-position',Local_Killposition);
  localStorage.setItem('header',Local_Header);
  localStorage.setItem('pve-header',Local_PvEHeader);
  localStorage.setItem('what-killrog',What_Display);
  localStorage.setItem('send-data',Local_send_data);
  localStorage.setItem('maxdisprow',Local_Maxrow);
  localStorage.setItem('animation',Local_Animation);
  localStorage.setItem('killrog-disp',Disappearance);
  localStorage.setItem('FL-offset',Local_FL_offset);
}
function local_data_reflesh(){
  Local_Killrog = localStorage.getItem('killrog');
  Local_Killposition = localStorage.getItem('killrog-position');
  Local_Header = localStorage.getItem('header');
  Local_PvEHeader = localStorage.getItem('pve-header');
  What_Display = localStorage.getItem('what-killrog');
  Local_send_data = localStorage.getItem('send-data');
  Local_Maxrow = localStorage.getItem('maxdisprow');
  Local_Maxrow = Number(Local_Maxrow);
  Local_Animation = localStorage.getItem('animation');
  Disappearance = localStorage.getItem('killrog-disp');
  Disappearance = Number(Disappearance);
  Local_FL_offset = localStorage.getItem('FL-offset');
  Local_FL_offset= Number(Local_FL_offset);
}
function local_setting_update(){
  if(Local_Killrog == 'true'){
    $('#setting-item-1').prop('checked',true);
  }
  else{
    $('#setting-item-1').prop('checked',false);
  }
  $('input[value = '+ Local_Killposition +']').prop('checked',true);
  if(Local_Header == 'true'){
    $('#setting-item-2-1').prop('checked',true);
  }
  else{
    $('#setting-item-2-1').prop('checked',false);
  }
  if(Local_PvEHeader == 'true'){
    $('#setting-item-2-2').prop('checked',true);
  }
  else{
    $('#setting-item-2-2').prop('checked',false);
  }
  /*
  //////////////////////////////
  //What_Displayの部分
  //////////////////////////////
  */
  if(Local_send_data == 'true'){
    $('#setting-item-10').prop('checked',true);
  }
  else{
    $('#setting-item-10').prop('checked',false);
  }
  $('#setting-item-4').val(Number(Local_Maxrow));
  if(Local_Animation == 'true'){
    $('#setting-item-5').prop('checked',true);
  }
  else{
    $('#setting-item-5').prop('checked',false);
  }
  $('#setting-item-6').val(Number(Disappearance));
  $('#setting-item-7').val(Number(Local_FL_offset));
}
function local_data_update(){
  if($("#setting-item-1").prop("checked") == true){
    Local_Killrog = 'true';
  }
  else{
    Local_Killrog = 'false';
  }
  Local_Killposition = $('input[name="killrog-position"]:checked').val();
  if($("#setting-item-2-1").prop("checked") == true){
    Local_Header = 'true';
  }
  else{
    Local_Header = 'false';
  }
  if($("#setting-item-2-2").prop("checked") == true){
    Local_PvEHeader = 'true';
  }
  else{
    Local_PvEHeader = 'false';
  }
  //What_Display = localStorage.getItem('what-killrog');
  if($("#setting-item-10").prop("checked") == true){
    Local_send_data = 'true';
  }
  else{
    Local_send_data = 'false';
  }
  Local_Maxrow = $('#setting-item-4').val();
  Local_Maxrow = Number(Local_Maxrow);
  if($("#setting-item-5").prop("checked") == true){
    Local_Animation = 'true';
  }
  else{
    Local_Animation = 'false';
  }
  Disappearance = $('#setting-item-6').val();
  Disappearance = Number(Disappearance);
  Local_FL_offset = $('#setting-item-7').val();
  Local_FL_offset = Number(Local_FL_offset);
}
