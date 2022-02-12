let buttontap = document.querySelector("button");
buttontap.addEventListener('click' , player);

var audio = new Audio('03 - Tujhe Kitna.mp3');
let boolean = true;
function player(){
    if(boolean){
    audio.play();
    boolean = false;
    }
    else{
        audio.pause();
        boolean = true;
    }
}