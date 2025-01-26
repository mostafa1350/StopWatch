//  ============================
// | Coronometer 2             |
//  ============================
const display = document.getElementById("ShowTimeClassTwo");
let counter = null;
let startTime = 0;
let begin = 0;
let elapsTime = 0;
let working = false;
// ===================================

function playFunction(){
    if(!working){
        begin = Date.now() - elapsTime;
        counter = setInterval(clalculate, 10);
        working = true;
    }
}

function pauseFunc2(){
    if(working){
        clearInterval(counter);
        elapsTime = Date.now() - begin;
        working = false;
    }
}

function resetFunc2(){
    clearInterval(counter);
    begin = 0;
    elapsTime = 0;
    working = false;
    display.textContent = "00:00:00:00";
}



function clalculate(){

    const currentTime = Date.now();
    elapsTime = currentTime - begin;
    let hh = Math.floor(elapsTime / (1000 * 60 * 60));
    let mm = Math.floor(elapsTime / (1000 * 60) % 60);
    let ss = Math.floor(elapsTime / 1000 % 60);
    let mls = Math.floor(elapsTime % 1000 / 10);

    hh = String(hh).padStart(2, "0");
    mm = String(mm).padStart(2, "0");
    ss = String(ss).padStart(2, "0");
    mls = String(mls).padStart(2, "0");
    display.textContent = `${hh}:${mm}:${ss}:${mls}`;

}