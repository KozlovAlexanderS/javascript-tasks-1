var hours = process.argv[2];
var minutes = process.argv[3];
// Немного замечательного кода и магии
function arabicToRomanOne(arab){
if (hours==0) 
{hours = '0'}
if (minutes==0) 
{minutes = '0'}
else{
switch (Math.floor(arab/10)){
case 0:  return '';break;
case 1:  return 'X'; break;
case 2:  return 'XX'; break;
case 3:  return 'XXX'; break;
case 4:  return 'XL'; break;
case 5:  return 'L'; break;
}}}
function arabicToRomanTwo(arab){
if (hours==0) 
{hours = '0'}
if (minutes==0) 
{minutes = '0'}
else{
switch (arab % 10){
case 0:  return '';break;
case 1: return 'I'; break;
case 2: return 'II'; break;
case 3: return 'III'; break;
case 4: return 'IV'; break;
case 5: return 'V'; break;
case 6: return 'VI'; break;
case 7: return 'VII'; break;
case 8: return 'VIII'; break;
case 9: return 'IX'; break; 
}
}}
if (hours < 24 && hours >= 0 && minutes < 60 && minutes >= 0 )
{console.log("%s%s:%s%s", arabicToRomanOne(hours), arabicToRomanTwo(hours), arabicToRomanOne(minutes),arabicToRomanTwo(minutes));}
else console.log("Время указано не верно");
