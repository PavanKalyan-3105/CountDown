let daysEl = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minsEl = document.getElementById('mins');
let secondsEL = document.getElementById('seconds');
let newYear = "1 Jan 2024";
function count(){
    let newYearDate = new Date(newYear);
    let currDate =  new Date();
    let totalsecs =  (newYearDate - currDate)/1000;
    let days = Math.floor(totalsecs/3600/24);
    let hours =  Math.floor(totalsecs/3600) % 24;
    let mins = Math.floor(totalsecs/60) % 60;
    let secs =  Math.floor(totalsecs) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEL.innerHTML = secs;
}
count();
setInterval(count,1000);