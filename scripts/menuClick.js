menu = document.getElementById("menu");
wrapper = document.getElementById("wrapper");
menu_button = document.getElementById("menu_button");
icon = document.getElementById("menu_icon");
logo = document.getElementById("logo");
home = document.getElementById("home");
contact = document.getElementById("contact");
about = document.getElementById("about");
code = document.getElementById("code");

var n = true;

// var toggle = 0;
// var firstTime = True;

// function pushAway() {
//     if (!firstTime) {
//         wrapper.classList.remove("cameBack");
//     }
//     else {
//         firstTime = False;
//     }
//     wrapper.classList.add("pushedAway");
// }
// function comeBack() {
//     wrapper.classList.remove("pushedAway");
//     wrapper.classList.add("cameBack");
// }

// function clicked(){
//     if(toggle == 0){
//         pushAway();
//         toggle = 1;
//     }
//     else if(toggle == 1){
//         comeBack();
//         toggle = 0;
//     }
// }

function clicked(){
    if (n) {
        wrapper.classList.add('pushed');
        n = false;
    } else {
        wrapper.classList.toggle('pushed');
        wrapper.classList.toggle('pulled');
    }
    
    menu_button.classList.toggle('clicked');
    menu_button.classList.toggle('idle');

    icon.classList.toggle('clicked');
    icon.classList.toggle('idle');

    logo.classList.toggle('btnActive');
    logo.classList.toggle('btnDeactive');

    home.classList.toggle('in');
    home.classList.toggle('out');
    about.classList.toggle('in');
    about.classList.toggle('out');
    contact.classList.toggle('in');
    contact.classList.toggle('out');
    code.classList.toggle('in');
    code.classList.toggle('out');
}