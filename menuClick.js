menu = document.getElementById("menu");
wrapper = document.getElementById("wrapper");
button = document.getElementById("menu_button");
var toggle = 0;
var firstTime = True;

function pushAway() {
    if (!firstTime) {
        wrapper.classList.remove("cameBack");
        button.classList.remove("unClicked");
    }
    else {
        firstTime = False;
    }
    wrapper.classList.add("pushedAway");
    button.classList.add("clicked");
}
function comeBack() {
    wrapper.classList.remove("pushedAway");
    button.classList.remove("clicked");
    wrapper.classList.add("cameBack");
    button.classList.add("unClicked");
}

function clicked(){
    if(toggle == 0){
        pushAway();
        toggle = 1;
    }
    else if(toggle == 1){
        comeBack();
        toggle = 0;
    }
}