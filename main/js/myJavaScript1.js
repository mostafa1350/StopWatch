
let [ms, ss, mm, hh] = [0, 0, 0, 0];
let ShowTime_h = document.getElementById("ShowTime-h");
let ShowTime_m = document.getElementById("ShowTime-m");
let ShowTime_s = document.getElementById("ShowTime-s");
let ShowTime_mls = document.getElementById("ShowTime-mls");
let myCounter = null;
let isPlay = false;
let sec = 0;
let hunth = 0;
let minute = 0;
let houre = 0;
let elapsTime = 0;
let startTime = 0;
let hundrth = 10420;
// =================================
const playFunc =()=>{
    if(!isPlay)
        {
            hunth = setInterval(()=>{
            if(ms===100){
                ms=0;
            }
            ShowTime_mls.innerText = `${++ms}`;
        
           },10);
           sec = setInterval(()=>{
            if(ss===60){
                ss=0;
                mm++;
            }
            ShowTime_s.innerText = `${++ss}`;
        
           },1000);
           minute = setInterval(()=>{
            if(mm===60){
                mm=0;
                hh++;
            }
            ShowTime_m.innerText = `${++mm}`;
        
           },60000);
           houre = setInterval(()=>{
            if(hh===24){
                hh=0;
            }
            ShowTime_m.innerText = `${++hh}`;
        
           },3600000);
           
        }
}




// function Coronometr() {
//     ms +=parseInt(hundrth%100);
//     //ms++;
    
//     if (ms == 100) {
//         ms = 0;
//         ss++;
//         if (ss == 60) {
//             ss = 0;
//             mm++;
//             if (mm == 60) {
//                 mm = 0;
//                 hh++
//                 if (hh = 24) {
//                     hh = 0;
//                 }
//             }
//         }
//     }

//     let h = hh < 10 ? "0" + hh : hh;
//     let m = mm < 10 ? "0" + mm : mm;
//     let s = ss < 10 ? "0" + ss : ss;
//     let mls = ms < 10 ? "0" + ms : ms;

//     ShowTime_h.innerHTML = h;
//     ShowTime_m.innerHTML = m;
//     ShowTime_s.innerHTML = s;
//     ShowTime_mls.innerHTML = mls;

// }

// ==================================
// function playFunc() {
//     const curTime = Date.now();
//     elapsTime = curTime - startTime;


//     if (myCounter !== null) {
//         clearInterval(myCounter);
//     }
//     myCounter = setInterval(Coronometr, 10);
// }
// ==================================
function pauseFunc() {
    clearInterval(myCounter);
}
// ==================================

function resetFunc() {
    clearInterval(myCounter);
    [ms,ss, mm, hh] = [0, 0, 0 , 0];
    ShowTime_h.innerHTML = "00";
    ShowTime_m.innerHTML = "00";
    ShowTime_s.innerHTML = "00";
    ShowTime_mls.innerHTML = "00";
}

