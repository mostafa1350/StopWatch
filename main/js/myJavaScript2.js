ShowTimeClass2 = document.getElementById("ShowTimeClass2");
let counter = null;
let running = false;
let beginTime = 0;
let elapsTime = 0;

// =====================================
const playFunc2 = ()=>{
    if(!running)
    {
        beginTime = Date.now() - elapsTime ; 
        counter = setInterval(UpdateTime , 10);
        running = false;
    }    
}
const pauseFunc2 = ()=>{

}
const resetFunc2 = ()=>{

}

// =========================
const UpdateTime = ()=>{
    const curTime = Date.now();
    elapsTime = curTime - beginTime ; 

    let hh = Math.floor(elapsTime / (1000*60*60));
    
}
