function gaia_Server(name){
  const cutname = name.slice(name.indexOf(' ') + 1 ,name.length);
  if(cutname.indexOf('Alexander') !== -1){
    return 'Alexander';
  }
  else if(cutname.indexOf('Bahamut') !== -1){
    return 'Bahamut';
  }
  else if(cutname.indexOf('Durandal') !== -1){
    return 'Durandal';
  }
  else if(cutname.indexOf('Fenrir') !== -1){
    return 'Fenrir';
  }
  else if(cutname.indexOf('Ifrit') !== -1){
    return 'Ifrit';
  }
  else if(cutname.indexOf('Ridill') !== -1){
    return 'Ridill';
  }
  else if(cutname.indexOf('Tiamat') !== -1){
    return 'Tiamat';
  }
  else if(cutname.indexOf('Ultima') !== -1){
    return 'Ultima';
  }
  else if(cutname.indexOf('Valefor') !== -1){
    return 'Valefor';
  }
  else if(cutname.indexOf('Yojimbo') !== -1){
    return 'Yojimbo';
  }
  else if(cutname.indexOf('Zeromus') !== -1) {
    return 'Zeromus';
  }
  else {
    return 'none';
  }
}
function mana_Server(name){
  const cutname = name.slice(name.indexOf(' ') + 1 ,name.length);
  if(cutname.indexOf('Anima') !== -1){
    return 'Anima';
  }
  else if(cutname.indexOf('Asura') !== -1){
    return 'Asura';
  }
  else if(cutname.indexOf('Belias') !== -1){
    return 'Belias';
  }
  else if(cutname.indexOf('Chocobo') !== -1){
    return 'Chocobo';
  }
  else if(cutname.indexOf('Hades') !== -1){
    return 'Hades';
  }
  else if(cutname.indexOf('Ixion') !== -1){
    return 'Ixion';
  }
  else if(cutname.indexOf('Mandragora') !== -1){
    return 'Mandragora';
  }
  else if(cutname.indexOf('Masamune') !== -1){
    return 'Masamune';
  }
  else if(cutname.indexOf('Pandaemonium') !== -1){
    return 'Pandaemonium';
  }
  else if(cutname.indexOf('Shinryu') !== -1){
    return 'Shinryu';
  }
  else if (cutname.indexOf('Titan') !== -1) {
    return 'Titan';
  }
  else {
    return 'none';
  }
}
function elemental_Server(name){
  const cutname = name.slice(name.indexOf(' ') + 1 ,name.length);
  if(cutname.indexOf('Aegis') !== -1){
    return 'Aegis';
  }
  else if(cutname.indexOf('Atomos') !== -1){
    return 'Atomos';
  }
  else if(cutname.indexOf('Carbuncle') !== -1){
    return 'Carbuncle';
  }
  else if(cutname.indexOf('Garuda') !== -1){
    return 'Garuda';
  }
  else if(cutname.indexOf('Gungnir') !== -1){
    return 'Gungnir';
  }
  else if(cutname.indexOf('Kujata') !== -1){
    return 'Kujata';
  }
  else if(cutname.indexOf('Ramuh') !== -1){
    return 'Ramuh';
  }
  else if(cutname.indexOf('Tonberry') !== -1){
    return 'Tonberry';
  }
  else if(cutname.indexOf('Typhon') !== -1){
    return 'Typhon';
  }
  else if(cutname.indexOf('Unicorn') !== -1){
    return 'Unicorn';
  }
  else {
    return 'none';
  }
}
