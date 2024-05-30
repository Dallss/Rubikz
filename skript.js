const face = ['yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow']
const left = ['orange','orange','orange','orange','orange','orange','orange','orange','orange']
const right = ['red','red','red','red','red','red','red','red','red']
const tp = ['green','green','green','green','green','green','green','green','green']
const bottom = ['blue','blue','blue','blue','blue','blue','blue','blue','blue']
const back = ['white','white','white','white','white','white','white','white','white']


window.onload = init;
let sec = document.getElementById('seconds')
let mins = document.getElementById('mins')
let timerId 

let strop = document.getElementById('timer')
const reset = document.getElementById('reset')
const solb = document.getElementById('solve')

solb.addEventListener('click',solve)
reset.addEventListener('click', shuffle)
strop.addEventListener('click', startTime)

    

const time = {
    seconds: 0,
    minutes: 0
}
function init () {
    console.log('onload executed');

    //face
    let main = document.getElementById('main-cube');
    let all = main.querySelectorAll('div');

    all.forEach((div, index) => {
        div.style.backgroundColor = face[index];
    });

    //top
    let view = document.getElementById('upper-cube');
    let box = view.querySelectorAll('div');

    box.forEach((div, index) => {
        div.style.backgroundColor = tp[index];
    });

    //left
    view = document.getElementById('left-cube');
    box = view.querySelectorAll('div');

    box.forEach((div, index) => {
        div.style.backgroundColor = left[index];
    });

    //right
    view = document.getElementById('right-cube');
    box = view.querySelectorAll('div');

    box.forEach((div, index) => {
        div.style.backgroundColor = right[index];
    });

    //bottom
    view = document.getElementById('bottom-cube');
    box = view.querySelectorAll('div');

    box.forEach((div, index) => {
        div.style.backgroundColor = bottom[index];
    });

}

function solve () {

    for(i=0;i<9;i++)
        face[i] = 'yellow';
    
    for(i=0;i<9;i++)
        left[i] = 'orange';
    
    for(i=0;i<9;i++)
        right[i] = 'red';
    
    for(i=0;i<9;i++)
        tp[i] = 'green';
    
    for(i=0;i<9;i++)
        bottom[i] = 'blue';
    
    for(i=0;i<9;i++)
        back[i] = 'white';
    
    stopTime ();
    init();
}

function turnTop (tru) {

    //0,1,2,3,5,6,7,8

    console.log('onclick works!');
    const hold = [face[0],face[1],face[2]]
    if(tru){
        face[0] = left[0]; face[1] = left[1]; face[2] = left[2]; 
        left[0] = back[0]; left[1] = back[1]; left[2] = back[2];
        back[0] = right[0]; back[1] = right[1]; back[2] = right[2];
        right[0] = hold[0]; right[1] = hold[1]; right[2] = hold[2];

        let hol = tp[2];
        tp[2] = tp[8];
        tp[8] = tp[6];
        tp[6] = tp[0];
        tp[0] = hol;

        hol = tp[5];
        tp[5] = tp[7];
        tp[7] = tp[3];
        tp[3] = tp[1];
        tp[1] = hol;

        // let hol = [2];
        // [2] = [8];
        // [8] = [6];
        // [6] = [0];
        // [0] = hol;

        // hol = [5];
        // [5] = [7];
        // [7] = [3];
        // [3] = [1];
        // [1] = hol;

    }
    else{
        face[0] = right[0]; face[1] = right[1]; face[2] = right[2]; 
        right[0] = back[0]; right[1] = back[1]; right[2] = back[2];
        back[0] = left[0]; back[1] = left[1]; back[2] = left[2];
        left[0] = hold[0]; left[1] = hold[1]; left[2] = hold[2];

        
        let hol = tp[0];
        tp[0] = tp[6];
        tp[6] = tp[8];
        tp[8] = tp[2];
        tp[2] = hol;

        hol = tp[1];
        tp[1] = tp[3];
        tp[3] = tp[7];
        tp[7] = tp[5];
        tp[5] = hol;

        // hol = [0];
        // [0] = [6];
        // [6] = [8];
        // [8] = [2];
        // [2] = hol;

        // hol = [1];
        // [1] = [3];
        // [3] = [7];
        // [7] = [5];
        // [5] = hol;

    }
    console.log(face[0],left[0],back[0], right[0]);
    init();

}
function turnMid (tru){
    const hold = [face[3],face[4],face[5]]

    if(tru){
        face[3] = left[3]; face[4] = left[4]; face[5] = left[5]; 
        left[3] = back[3]; left[4] = back[4]; left[5] = back[5];
        back[3] = right[3]; back[4] = right[4]; back[5] = right[5];
        right[3] = hold[0]; right[4] = hold[1]; right[5] = hold[2];
    }
    else{
        face[3] = right[3]; face[4] = right[4]; face[5] = right[5]; 
        right[3] = back[3]; right[4] = back[4]; right[5] = back[5];
        back[3] = left[3]; back[4] = left[4]; back[5] = left[5];
        left[3] = hold[0]; left[4] = hold[1]; left[5] = hold[2];
    }
    
    init();  
}
function turnBot (tru){   
    const hold = [face[6],face[7],face[8]]

    if(tru){

        face[6] = left[6]; face[7] = left[7]; face[8] = left[8]; 
        left[6] = back[6]; left[7] = back[7]; left[8] = back[8];
        back[6] = right[6]; back[7] = right[7]; back[8] = right[8];
        right[6] = hold[0]; right[7] = hold[1]; right[8] = hold[2];

        let hol = bottom[0];
        bottom[0] = bottom[6];
        bottom[6] = bottom[8];
        bottom[8] = bottom[2];
        bottom[2] = hol;

        hol = bottom[1];
        bottom[1] = bottom[3];
        bottom[3] = bottom[7];
        bottom[7] = bottom[5];
        bottom[5] = hol;
        
    }
    else{
        face[6] = right[6]; face[7] = right[7]; face[8] = right[8]; 
        right[6] = back[6]; right[7] = back[7]; right[8] = back[8];
        back[6] = left[6]; back[7] = left[7]; back[8] = left[8];
        left[6] = hold[0]; left[7] = hold[1]; left[8] = hold[2];

        let hol = bottom[2];
        bottom[2] = bottom[8];
        bottom[8] = bottom[6];
        bottom[6] = bottom[0];
        bottom[0] = hol;

        hol = bottom[5];
        bottom[5] = bottom[7];
        bottom[7] = bottom[3];
        bottom[3] = bottom[1];
        bottom[1] = hol;

    }
    
    init();
}
function turnLeft (tru){
    const hold = [face[0],face[3],face[6]]

    if(tru){
        face[0] = tp[0]; face[3] = tp[3]; face[6] = tp[6]; 
        tp[0] = back[0]; tp[3] = back[3]; tp[6] = back[6];
        back[0] = bottom[0]; back[3] = bottom[6]; back[6] = bottom[6];
        bottom[0] = hold[0]; bottom[3] = hold[1]; bottom[6] = hold[2];

        let hol = left[0];
        left[0] = left[6];
        left[6] = left[8];
        left[8] = left[2];
        left[2] = hol;

        hol = left[1];
        left[1] = left[3];
        left[3] = left[7];
        left[7] = left[5];
        left[5] = hol;
    }
    else{
        face[0] = bottom[0]; face[3] = bottom[3]; face[6] = bottom[6]; 
        bottom[0] = back[0]; bottom[3] = back[3]; bottom[6] = back[6];
        back[0] = tp[0]; back[3] = tp[3]; back[6] = tp[6];
        tp[0] = hold[0]; tp[3] = hold[1]; tp[6] = hold[2];

        let hol = left[2];
        left[2] = left[8];
        left[8] = left[6];
        left[6] = left[0];
        left[0] = hol;

        hol = left[5];
        left[5] = left[7];
        left[7] = left[3];
        left[3] = left[1];
        left[1] = hol;

    }
    init();
}

function turnCenter (tru){
    const hold = [face[1],face[4],face[7]]

    if(tru){
        face[1] = tp[1]; face[4] = tp[4]; face[7] = tp[7]; 
        tp[1] = back[1]; tp[4] = back[4]; tp[7] = back[7];
        back[1] = bottom[1]; back[4] = bottom[4]; back[7] = bottom[7];
        bottom[1] = hold[0]; bottom[4] = hold[1]; bottom[7] = hold[2];
        
    }
    else{
        face[1] = bottom[1]; face[4] = bottom[4]; face[7] = bottom[7]; 
        bottom[1] = back[1]; bottom[4] = back[4]; bottom[7] = back[7];
        back[1] = tp[1]; back[4] = tp[4]; back[7] = tp[7];
        tp[1] = hold[0]; tp[4] = hold[1]; tp[7] = hold[2];
    }
    init();
}

function turnRight (tru){
    const hold = [face[2],face[5],face[8]]

    if(tru){
        face[2] = tp[2]; face[5] = tp[5]; face[8] = tp[8]; 
        tp[2] = back[2]; tp[5] = back[5]; tp[8] = back[8];
        back[2] = bottom[2]; back[5] = bottom[5]; back[8] = bottom[8];
        bottom[2] = hold[0]; bottom[5] = hold[2]; bottom[8] = hold[2];

        let hol = right[2];
        right[2] = right[8];
        right[8] = right[6];
        right[6] = right[0];
        right[0] = hol;

        hol = right[5];
        right[5] = right[7];
        right[7] = right[3];
        right[3] = right[1];
        right[1] = hol;
        
    }
    else{
        face[2] = bottom[2]; face[5] = bottom[5]; face[8] = bottom[8]; 
        bottom[2] = back[2]; bottom[5] = back[5]; bottom[8] = back[8];
        back[2] = tp[2]; back[5] = tp[5]; back[8] = tp[8];
        tp[2] = hold[0]; tp[5] = hold[1]; tp[8] = hold[2];

        hol = right[0];
        right[0] = right[6];
        right[6] = right[8];
        right[8] = right[2];
        right[2] = hol;

        hol = right[1];
        right[1] = right[3];
        right[3] = right[7];
        right[7] = right[5];
        right[5] = hol;
    }
    init();
}
function faceLeft (){
    turnTop(true);
    turnMid(true);
    turnBot(true);
}
function faceRight (){
    turnTop(false);
    turnMid(false);
    turnBot(false);
}
function faceTop (){
    turnCenter(true);
    turnRight(true);
    turnLeft(true);
}
function faceBot (){
    turnCenter(false);
    turnRight(false);
    turnLeft(false);
}
function faceBack () {
    faceRight();
    faceRight();
}
function resetTime () {
    time.seconds = 0;
    time.minutes = 0;
    sec.innerHTML = "00"
    mins.innerHTML = "0:"
}


function shuffle() {
    resetTime();
    
    // Number of moves for shuffling
    let totalMoves = 150 + Math.floor(Math.random() * 7);

    // Initialize color counts to make sure we have exactly 9 of each color
    const colorCounts = {
        yellow: 9,
        orange: 9,
        red: 9,
        green: 9,
        blue: 9,
        white: 9
    };

    // Function to perform a random move
    function performRandomMove() {
        let move = Math.floor(Math.random() * 12);
        switch (move) {
            case 0:
                turnTop(true);
                break;
            case 1:
                turnTop(false);
                break;
            case 2:
                turnBot(true);
                break;
            case 3:
                turnBot(false);
                break;
            case 4:
                turnLeft(true);
                break;
            case 5:
                turnLeft(false);
                break;
            case 6:
                turnMid(true);
                break;
            case 7:
                turnMid(false);
                break;
            case 8:
                turnRight(true);
                break;
            case 9:
                turnRight(false);
                break;
            case 10:
                turnCenter(true);
                break;
            case 11:
                turnCenter(false);
                break;
        }
    }

    // Perform random moves
    for (let i = 0; i < totalMoves; i++) {
        performRandomMove();
    }

    // Function to count colors on the cube
    function countColors() {
        const allColors = [...face, ...left, ...right, ...tp, ...bottom, ...back];
        const counts = { yellow: 0, orange: 0, red: 0, green: 0, blue: 0, white: 0 };
        allColors.forEach(color => {
            counts[color]++;
        });
        return counts;
    }

    // Check and adjust color distribution
    function adjustColors() {
        const counts = countColors();
        for (const color in counts) {
            while (counts[color] < 9) {
                // Find a color that has more than 9 occurrences
                for (const excessColor in counts) {
                    if (counts[excessColor] > 9) {
                        // Replace an excess color with the deficient color
                        replaceColor(excessColor, color);
                        counts[excessColor]--;
                        counts[color]++;
                        break;
                    }
                }
            }
        }
    }

    // Replace one instance of oldColor with newColor
    function replaceColor(oldColor, newColor) {
        const faces = [face, left, right, tp, bottom, back];
        for (let i = 0; i < faces.length; i++) {
            for (let j = 0; j < faces[i].length; j++) {
                if (faces[i][j] === oldColor) {
                    faces[i][j] = newColor;
                    return;
                }
            }
        }
    }

    // Adjust colors if necessary
    adjustColors();

    // Update the UI after shuffling
    init();
}

function startTime () {
    
    console.log('starttiem called')
    
    strop.innerHTML = 'Stop'

    timerId = setInterval(() => {

        time.seconds++;
        if(time.seconds > 59){
            time.seconds = 0;
            time.minutes++;
            mins.innerHTML = time.minutes + ':';
        }
        if(time.seconds < 10)
            sec.innerHTML = '0'+time.seconds;
        else{
            sec.innerHTML = time.seconds;
        }

    }, 1000);

    strop.removeEventListener('click', startTime)
    strop.addEventListener('click', stopTime)

}
function stopTime () {

    console.log('stop Time was called')

    strop.innerHTML = 'start'
    strop.addEventListener('click', startTime)

    clearInterval(timerId) 

}


let anims = document.getElementsByClassName('fbox')
    
for(let i = 0; i < anims.length; i++){
    let randomx = -700 + Math.floor(Math.random() * 700)
    let randomy = -700 + Math.floor(Math.random() * 700)
    anims[i].style.transform = `translate(${randomx}px,${randomy}px)`
}






    

    