var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
// var currentImg = 1;
var newStart = true


/**
 * 
 * @param duration Enter duration in seconds 
 */
function sleep(duration){
    return new Promise(resolver => setTimeout(resolver, duration * 1000));
}


async function newCycle(seconds) {
    while (true) {
        await sleep(seconds);
        for (let i = 1; i <= 7; i ++) {
            console.log("currentImg is " + String(i - 1) + ". Now fading to " + String(i));
            


            await sleep(seconds);
        }
    }
}
/**
 * 
 * @param {*} seconds How many seconds you want to wait before it cycles to the next picture
 */

async function cycle(seconds){
    while (true) {
        console.log("starting again");
        for(let x = 1; x <= 7; x++) {
            console.log("started for loop");
            if (x == 1) {
                if (newStart) {
                    newStart = false;
                    console.log('newStart was true');
                    continue
                }
                else{
                    console.log('newStart was false');
                    img7.classList.add('fadingout');
                    img1.classList.add('fadingin');
                    sleep(3).then(() => {
                        img7.style.opacity = 0;
                        img7.classList.remove('fadingout');
                        img1.style.opacity = 100;
                        img1.classList.remove('fadingin');
                    })
                }
            }
            else if (x == 2) {
                img1.classList.add('fadingout');
                img2.classList.add('fadingin');
                sleep(3).then(() => {
                    img1.style.opacity = 0;
                    img1.classList.remove('fadingout');
                    img2.style.opacity = 100;
                    img2.classList.remove('fadingin');
                })
            }
            else if (x == 3) {
                img2.classList.add('fadingout');
                img3.classList.add('fadingin');
                sleep(3).then(() => {
                    img2.style.opacity = 0;
                    img2.classList.remove('fadingout');
                    img3.style.opacity = 100;
                    img3.classList.remove('fadingin');
                })
            }
            else if (x == 4) {
                img3.classList.add('fadingout');
                img4.classList.add('fadingin');
                sleep(3).then(() => {
                    img3.style.opacity = 0;
                    img3.classList.remove('fadingout');
                    img4.style.opacity = 100;
                    img4.classList.remove('fadingin');
                })
            }
            else if (x == 5) {
                img4.classList.add('fadingout');
                img5.classList.add('fadingin');
                sleep(3).then(() => {
                    img4.style.opacity = 0;
                    img4.classList.remove('fadingout');
                    img5.style.opacity = 100;
                    img5.classList.remove('fadingin');
                })
            }
            else if (x == 6) {
                img5.classList.add('fadingout');
                img6.classList.add('fadingin');
                sleep(3).then(() => {
                    img5.style.opacity = 0;
                    img5.classList.remove('fadingout');
                    img6.style.opacity = 100;
                    img6.classList.remove('fadingin');
                })
            }
            else if (x == 7) {
                img6.classList.add('fadingout');
                img7.classList.add('fadingin');
                sleep(3).then(() => {
                    img6.style.opacity = 0;
                    img6.classList.remove('fadingout');
                    img7.style.opacity = 100;
                    img7.classList.remove('fadingin');
                })
            }
            await sleep(seconds);
        }
    }
}

sleep(8).then(() => {
    console.log("5 seconds are up, starting loop.")
    cycle(8);
});