
let [ss,mm,hh] = [0,0,0];
let ShowTime = document.getElementById("ShowTime");
let myCounter = null;
// =================================

function Coronometr(){
    ss++;
    if(ss==60){
        ss=0;
        mm++;
        if(mm==60){
            mm=0;
            hh++
            if(hh=24){
                hh=0;
            }
        }
    }
    let h = hh<10 ? "0" + hh : hh;
    let m = mm<10 ? "0" + mm : mm;
    let s = ss<10 ? "0" + ss : ss;

    ShowTime.innerHTML = h + ":" + m + ":" + s ;

}

// ==================================
function playFunc(){
    if(myCounter!== null){
        clearInterval(myCounter);
    }
    myCounter = setInterval(Coronometr,1000);
}
// ==================================
function pauseFunc(){
    clearInterval(myCounter);
}
// ==================================

function resetFunc(){
    clearInterval(myCounter);
    [ss,mm,hh] = [0,0,0];
    ShowTime.innerHTML = "00:00:00";

}

