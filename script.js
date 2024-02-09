var Daysdips = document.getElementById('Days')
var Hourdips = document.getElementById('hour')
var Minutedips = document.getElementById('minute')
var Seconddips = document.getElementById('second')
var giventime = new Date(2025,1,1,0,0,0,0,).getTime()

function coundown (){
   var timenow = new Date () 
    var difference = giventime-timenow;
    var DayValueNumber = Math.floor(difference/(1000*60*60*24));
    var HourValueNumber= Math.floor(difference / (1000 * 60 * 60)%60);
    var MinuteValueNumber= Math.floor(difference / (1000 * 60)%60);
    var SecondValueNumber= Math.floor(difference / (1000)%60)


    Daysdips.innerHTML=DayValueNumber;
    Hourdips.innerHTML=HourValueNumber;
    Minutedips.innerHTML=MinuteValueNumber;
    Seconddips.innerHTML=SecondValueNumber;

}
coundown()

setInterval(coundown,1000)