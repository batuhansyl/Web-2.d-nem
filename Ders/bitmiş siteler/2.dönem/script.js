function darkmode(){
    document.getElementsByTagName("body")[0].style.color="white";
    document.getElementsByTagName("body")[0].style.backgroundColor="black";
}
function lightmode(){
    document.getElementsByTagName("body")[0].style.color="black";
    document.getElementsByTagName("body")[0].style.backgroundColor="white"; 
}
function playSound(prop) {
    let audio = new Audio(prop);
    audio.play();
}