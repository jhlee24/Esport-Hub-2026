var p=document.querySelector("#playvid").addEventListener("click",play);
var m=document.querySelector("#mutevid").addEventListener("click",mute);
var s=document.querySelector("#fullscreen").addEventListener("click",fullscreen)


function fullscreen(){
    var check = document.querySelector("#vid");
    check.requestFullscreen();
}

function play(){
    var check = document.querySelector("#vid");
    if (check.paused){
        check.play();
    }else{
        check.pause();
    }
}
function mute(){
    var check = document.querySelector("#vid");
    if (check.muted){
        check.muted=false;
    }else {
        check.muted=true;
    }
}