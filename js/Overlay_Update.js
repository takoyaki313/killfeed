
function overlayUpdate(){
  //headerUpdate();
  var maxrow = Local_Maxrow;
  var disprow = maxrow ;
  var template = $('#source li');
  var container = $('#overlay').clone();
  container.html('');
  //Reset
  if(Local_Killrog == 'true'){
    if(Local_Killposition == 'right'){
      container.css('align-items','flex-end');
    }
    else if (Local_Killposition == 'left') {
      container.css('align-items','flex-start');
    }
    else if (Local_Killposition == 'center') {
      container.css('align-items','center');
    }
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
          if(Local_Animation == 'true'){
            console.log('fadeout_start');
            row.find('.main-data').addClass('fadeout');
          }
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
        else if(Overlay_Main_Data[i][0] == Overlay_Main_Data[i][5]){//力尽きた
          if (Overlay_Main_Data[i][2] == 0 ){
            row.find('.arrow').addClass('arrow-kill');
          }
          else {
            row.find('.arrow').addClass('arrow-death');
          }
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
  }

  $('#overlay').replaceWith(container);

}
