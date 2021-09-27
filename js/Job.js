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
