const color1 = [
  '#1C1E21',
  '#42454C',
  '#005566',
  '#9CD5DF',
  '#fdfdfd',
  '#010010'
];
const color2 = [
  '#FBEAFF',
  '#B39CD0',
  '#845EC2',
  '#FF6F91',
  '#fdfdfd',
  '#010010'
];
const color3 = [
  '#B3F98B',
  '#F9F871',
  '#00C9FF',
  '#00EAD7',
  '#010010',
  '#fdfdfd'
];
const color4 = [
  '#335C67',
  '#FFF3B0',
  '#9E2A2B',
  '#E09F3E',
  '#010010',
  '#fdfdfd'
];
const color5 = [
  '#D6D6D6',
  '#FFEE32',
  '#202020',
  '#FFD100',
  '#010010',
  '#fdfdfd'
];
const color6 = [
  '#495867',
  '#577399',
  '#FE5F55',
  '#F7F7FF',
  '#fdfdfd',
  '#010010'
];
function changecolors(themeNumber) {
  const r = document.documentElement;

  if(themeNumber == 1){
    r.style.setProperty('--mainColor', color1[0]);
    r.style.setProperty('--containerColor', color1[1]);
    r.style.setProperty('--accentColorDark', color1[2]);
    r.style.setProperty('--accentColorLight', color1[3]);
    r.style.setProperty('--lightText', color1[4]);
    r.style.setProperty('--darkText', color1[5]);
  }
  if(themeNumber == 2){
    r.style.setProperty('--mainColor', color2[0]);
    r.style.setProperty('--containerColor', color2[1]);
    r.style.setProperty('--accentColorDark', color2[2]);
    r.style.setProperty('--accentColorLight', color2[3]);
    r.style.setProperty('--lightText', color2[4]);
    r.style.setProperty('--darkText', color2[5]);
  }
  if(themeNumber == 3){
    r.style.setProperty('--mainColor', color3[0]);
    r.style.setProperty('--containerColor', color3[1]);
    r.style.setProperty('--accentColorDark', color3[2]);
    r.style.setProperty('--accentColorLight', color3[3]);
    r.style.setProperty('--lightText', color3[4]);
    r.style.setProperty('--darkText', color3[5]);
  }
  if(themeNumber == 4){
    r.style.setProperty('--mainColor', color4[0]);
    r.style.setProperty('--containerColor', color4[1]);
    r.style.setProperty('--accentColorDark', color4[2]);
    r.style.setProperty('--accentColorLight', color4[3]);
    r.style.setProperty('--lightText', color4[4]);
    r.style.setProperty('--darkText', color4[5]);
  }
  if(themeNumber == 5){
    r.style.setProperty('--mainColor', color5[0]);
    r.style.setProperty('--containerColor', color5[1]);
    r.style.setProperty('--accentColorDark', color5[2]);
    r.style.setProperty('--accentColorLight', color5[3]);
    r.style.setProperty('--lightText', color5[4]);
    r.style.setProperty('--darkText', color5[5]);
  }
  if(themeNumber == 6){
    r.style.setProperty('--mainColor', color6[0]);
    r.style.setProperty('--containerColor', color6[1]);
    r.style.setProperty('--accentColorDark', color6[2]);
    r.style.setProperty('--accentColorLight', color6[3]);
    r.style.setProperty('--lightText', color6[4]);
    r.style.setProperty('--darkText', color6[5]);
  }
}