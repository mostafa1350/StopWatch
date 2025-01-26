
let [ss, mm, hh] = [0, 0, 0];
let ShowTime_h = document.getElementById("ShowTime-h");
let ShowTime_m = document.getElementById("ShowTime-m");
let ShowTime_s = document.getElementById("ShowTime-s");

let myCounter = null;
let isPlay = false;

// =================================

function Coronometr() {    

        ss++;
        if (ss == 60) {
            ss = 0;
            mm++;
            if (mm == 60) {
                mm = 0;
                hh++
                if (hh = 24) {
                    hh = 0;
                }
            }
        }


    let h = hh < 10 ? "0" + hh : hh;
    let m = mm < 10 ? "0" + mm : mm;
    let s = ss < 10 ? "0" + ss : ss;

    ShowTime_h.innerHTML = h;
    ShowTime_m.innerHTML = m;
    ShowTime_s.innerHTML = s;
}

// ==================================
function playFunc() {

    if (myCounter !== null) {
        clearInterval(myCounter);
    }
    myCounter = setInterval(Coronometr, 1000);
}
// ==================================
function pauseFunc() {
    clearInterval(myCounter);
}
// ==================================

function resetFunc() {
    clearInterval(myCounter);
    [ss, mm, hh] = [0, 0 , 0];
    ShowTime_h.innerHTML = "00";
    ShowTime_m.innerHTML = "00";
    ShowTime_s.innerHTML = "00";
}


