//the function first verify the window condition Fullscreen YES/NO
//then will enter or exit fullscreen mode
function EnterFullscreen(){
    if (document.fullscreen==true){
        document.exitFullscreen();
    }
    else{document.documentElement.requestFullscreen();

    }
}