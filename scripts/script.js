let wrapper = document.getElementsByClassName("wrapper")[0];
let tacTable = document.getElementById("tacTable");
let line = document.getElementById("line");
let k = false;
let p_win = false;
let reset = document.getElementById("reset");
let sound_of_the_win = new Audio('win.mp3');
let wonAndTurn = document.getElementById("wonAndTurn");
let temp = 0;
let decider = false;
const musicPlay = function (){
    let music = new Audio('music.wav');
    music.play();
}
let music = new Audio("music.wav");
let sound = new Audio('clicked.wav');
let i = 0;
let turnDiv = document.getElementById("turnDiv");
const chkWin = function (grids){
    let win;
    let rank;
    if (grids[0].innerHTML == 'o' && grids[1].innerHTML == 'o' && grids[2].innerHTML == 'o' && temp == 0){
        win = true;
        rank = 1;
        temp = 1;
    }
    else if (grids[0].innerHTML == 'x' && grids[1].innerHTML == 'x' && grids[2].innerHTML == 'x' && temp == 0){
        win = true;
        rank = 1;
        temp = 1;
    }
    else if (grids[3].innerHTML == 'o' && grids[4].innerHTML == 'o' && grids[5].innerHTML == 'o' && temp == 0){
        win = true;
        rank = 2;
        temp = 1;
    }
    else if (grids[3].innerHTML == 'x' && grids[4].innerHTML == 'x' && grids[5].innerHTML == 'x' && temp == 0){
        win = true;
        rank = 2;
        temp = 1;
    }
    else if (grids[6].innerHTML == 'x' && grids[7].innerHTML == 'x' && grids[8].innerHTML == 'x' && temp == 0){
        win = true;
        rank = 8;
        temp = 1;
    }
    else if (grids[6].innerHTML == 'o' && grids[7].innerHTML == 'o' && grids[8].innerHTML == 'o' && temp == 0){
        win = true;
        rank = 8;
        temp = 1;
    }
    else if (grids[0].innerHTML == 'o' && grids[4].innerHTML == 'o' && grids[8].innerHTML == 'o' && temp == 0){
        win = true;
        rank = 3;
        temp = 1;
    }
    else if (grids[0].innerHTML == 'x' && grids[4].innerHTML == 'x' && grids[8].innerHTML == 'x' && temp == 0){
        win = true;
        rank = 3;
        temp = 1;
    }
    else if (grids[2].innerHTML == 'x' && grids[4].innerHTML == 'x' && grids[6].innerHTML == 'x' && temp == 0){
        win = true;
        rank = 4;
        temp = 1;
    }
    else if (grids[2].innerHTML == 'o' && grids[4].innerHTML == 'o' && grids[6].innerHTML == 'o' && temp == 0){
        win = true;
        rank = 4;
        temp = 1;
    }
    else if (grids[0].innerHTML == 'o' && grids[3].innerHTML == 'o' && grids[6].innerHTML == 'o' && temp == 0){
        win = true;
        rank = 5;
        temp = 1;
    }
    else if (grids[0].innerHTML == 'x' && grids[3].innerHTML == 'x' && grids[6].innerHTML == 'x' && temp == 0){
        win = true;
        rank = 5;
        temp = 1;
    }
    else if (grids[1].innerHTML == 'x' && grids[4].innerHTML == 'x' && grids[7].innerHTML == 'x' && temp == 0){
        win = true;
        rank = 6; 
        temp = 1;
    }
    else if (grids[1].innerHTML == 'o' && grids[4].innerHTML == 'o' && grids[7].innerHTML == 'o' && temp == 0){
        win = true;
        rank = 6;
        temp = 1;
    }
    else if (grids[2].innerHTML == 'x' && grids[5].innerHTML == 'x' && grids[8].innerHTML == 'x' && temp == 0){
        win = true;
        rank = 7;
        temp = 1;
    }
    else if (grids[2].innerHTML == 'o' && grids[5].innerHTML == 'o' && grids[8].innerHTML == 'o' && temp == 0){
        win = true;
        rank = 7;
        temp = 1;
    }
    else {
        rank = 0;
        win = false;
    }
    if (win == true){
        if (rank == 1){
            line.style = `display:block;transform: rotate(-90deg) translateX(-${height/(3*2)+width/20}px);width: ${width * (1.5)/100}px;height: ${height 
                * 99/100}px;background-color: black;transform-origin: top;`;
        }
        else if(rank == 2){
            line.style = `display:block;transform: rotate(-90deg) translateX(-${(height*3)/(3*2)+width/20}px);width: ${width * (1.5)/100}px;height: ${height 
                * 99/100}px;background-color: black;transform-origin: top;`;
        }
        else if(rank == 3){
            line.style = `display:block;transform: rotate(-45deg);width: ${width * (1.5)/100}px;height: ${Math.sqrt(width*width + height*height)}px;background-color: black;transform-origin: top;`;
        }
        else if(rank == 4){
            line.style = `display:block;transform: rotate(45deg);right: 0;width: ${width * (1.5)/100}px;height: ${Math.sqrt(width*width + height*height)}px;background-color: black;transform-origin: top;`;
        }
        else if(rank == 5){
            line.style = `display:block;transform: translateX(${(height)/(3*2)}px);width: ${width * (1.5)/100}px;height: ${height 
                * 99/100}px;background-color: black;transform-origin: top;`;
        }
        else if(rank == 6){
            line.style = `display:block;transform: translateX(${(height*3)/(3*2)}px);width: ${width * (1.5)/100}px;height: ${height 
                * 99/100}px;background-color: black;transform-origin: top;`;
        }
        else if(rank == 7){
            line.style = `display:block;transform: translateX(${(height*5)/(3*2)}px);width: ${width * (1.5)/100}px;height: ${height 
                * 99/100}px;background-color: black;transform-origin: top;`;
        }
        else if (rank == 8){
            line.style = `display:block;transform: rotate(-90deg) translateX(-${(height*5)/(3*2)+(width/20)}px);width: ${width * (1.5)/100}px;height: ${height 
                * 99/100}px;background-color: black;transform-origin: top;`;
        }
        sound_of_the_win.play(); 

    }
    console.log(win);
    return win;
};
let grids = document.getElementsByClassName("grids");
let repeatation = [0,1,2,3,4,5,6,7,8];
turn = 'o';
let difference;
let width;
let height;
let differencePercentage;
wrapper.style = `width: ${innerWidth}px;height: ${innerHeight}px;display: flex;justify-content: center;align-items: center;`;
if (innerWidth>innerHeight){
    difference = innerWidth-innerHeight;
    differencePercentage = difference/innerHeight * 100;
    width = 50/(100+differencePercentage) * innerWidth;
    height = 50/100 * innerHeight;
}
else {
    difference = innerHeight-innerWidth;
    differencePercentage = difference/innerWidth * 100;
    width = 50/(100+differencePercentage) * innerHeight;
    height = 50/100 * innerWidth;
}
reset.style = `position: absolute;padding: ${width * 2/100}px;`
turnDiv.style = `width: ${width*1.5}px;height: ${height/4}px;border: 2px solid red;margin-top: -${height/2}px;margin-left: ${width/10}px;`;
line.style = `width: 0px;height: 0px;background-color: black;`;
tacTable.style = `width: ${width}px;height: ${height}px;`;
grids[0].addEventListener("click",()=>{
if (repeatation[0] == 0){
    repeatation[0] = 1;
if (turn=='o'){
    turn = 'x';
    grids[0].innerHTML = "o";
    grids[0].className = 'grids o';
    decider = chkWin(grids);
    
}
else {
    turn = 'o';
    grids[0].innerHTML = "x";
    grids[0].className = 'grids x';
    decider = chkWin(grids);
}
}
});
grids[1].addEventListener("click",()=>{
if (repeatation[1] == 1){
    repeatation[1] = 2;
if (turn=='o'){
    turn = 'x';
    grids[1].innerHTML = "o";
    grids[1].className = 'grids o';
    decider = chkWin(grids);    
}
else {
    turn = 'o';
    grids[1].innerHTML = "x";
    grids[1].className = "grids x";
    decider = chkWin(grids);    
}
}
});
grids[2].addEventListener("click",()=>{
if (repeatation[2] == 2){
    repeatation[2] = 3;
if (turn=='o'){
    turn = 'x';
    grids[2].innerHTML = "o";
    grids[2].className = "grids o";
    decider = chkWin(grids);    
}
else {
    turn = 'o';
    grids[2].innerHTML = "x";
    grids[2].className = "grids x";
    decider = chkWin(grids);    
}
}
});
grids[3].addEventListener("click",()=>{
if (repeatation[3] == 3){
    repeatation[3] = 4;
if (turn=='o'){
    turn = 'x';
    grids[3].innerHTML = "o";
    grids[3].className = "grids o";
    decider = chkWin(grids);    
}
else {
    turn = 'o';
    grids[3].innerHTML = "x";
    grids[3].className = "grids x";
    decider = chkWin(grids);    
}
}
});
grids[4].addEventListener("click",()=>{
if (repeatation[4] == 4){
    repeatation[4] = 5;
if (turn=='o'){
    turn = 'x';
    grids[4].innerHTML = "o";
    grids[4].className = "grids o";
    decider = chkWin(grids);    
}
else {
    turn = 'o';
    grids[4].innerHTML = "x";
    grids[4].className = "grids x";
    decider = chkWin(grids);    
}
}
});
grids[5].addEventListener("click",()=>{
if (repeatation[5] == 5){
    repeatation[5] = 6;
if (turn=='o'){
    turn = 'x';
    grids[5].innerHTML = "o";
    grids[5].className = "grids o";
    decider = chkWin(grids);    
}
else {
    turn = 'o';
    grids[5].innerHTML = "x";
    grids[5].className = "grids x";
    decider = chkWin(grids);    
}
}
});
grids[6].addEventListener("click",()=>{
if (repeatation[6] == 6){
    repeatation[6] = 7;
if (turn=='o'){
    turn = 'x';
    grids[6].innerHTML = "o";
    grids[6].className = "grids o";
    decider = chkWin(grids);    
}
else {
    turn = 'o';
    grids[6].innerHTML = "x";
    grids[6].className = "grids x";
    decider = chkWin(grids);    
}
}
});
grids[7].addEventListener("click",()=>{
if (repeatation[7] == 7){
    repeatation[7] = 8;
if (turn=='o'){
    turn = 'x';
    grids[7].innerHTML = "o";
    grids[7].className = "grids o";
    decider = chkWin(grids);    
}
else {
    turn = 'o';
    grids[7].innerHTML = "x";
    grids[7].className = "grids x";
    decider = chkWin(grids);    
}
}
});
grids[8].addEventListener("click",()=>{
if (repeatation[8] == 8){
    repeatation[8] = 9;
if (turn=='o'){
    turn = 'x';
    grids[8].innerHTML = "o";
    grids[8].className = "grids o";
    decider = chkWin(grids);    
}
else {
    turn = 'o';
    grids[8].innerHTML = "x";
    grids[8].className = "grids x";
    decider = chkWin(grids);    
}
}
});
while (i<grids.length){
    grids[i].style = `font-size: ${width/5}px;display: flex;justify-content: center;align-items: center;`;
    i++;
}
 i = 0;
 while (i<grids.length){
     grids[i].addEventListener("click",()=>{
         if (decider == true){
            tacTable.style = `width: ${width}px;height: ${height}px;z-index: -2;`;
             if (turn=='o'){
                 turn = 'x';
                 wonAndTurn.innerHTML = `${turn} won`;
             }
             else {
                 turn = 'o';
                 wonAndTurn.innerHTML = `${turn} won`;
             }
             if (turn == 'o'){
                 turn = 'x';
             }
             else {
                 turn = 'o';
             }
             p_win = decider;
         }
         else {
            wonAndTurn.innerHTML = `${turn} turns`;
         }
         let j = 0;
         while (j<repeatation.length){
             if(repeatation[j] != j+1){
                k = false;
                break;
             }
             else {
                 k = true;
             }
             j++;
         }
         if (k == true && p_win == false){
             repeatation = [0,1,2,3,4,5,6,7,8];
             rank = 0;
             i = 0;
             j = 0;
             let k = 0;
             console.log("Draw");
             while (k<grids.length){
                 grids[k].innerHTML = '';
                 k++;
             }
             line.style = 'width: 0px;height: 0px;transform: rotate(0deg) translateX(0px) translateY(0px);'
             turn = 'o';
             temp = 0;
             wonAndTurn.innerHTML = `${turn} turns`;
         }
         sound.play();
        });
        
     i++;
 }
 reset.addEventListener("click",()=>{
     repeatation = [0,1,2,3,4,5,6,7,8];
     rank = 0;
     decider = false;
     p_win  = false;
     i = 0;
     j = 0;
     let k = 0;
     while (k<grids.length){
         grids[k].innerHTML = '';
         k++;
     }
     line.style = 'width: 0px;height: 0px;transform: rotate(0deg) translateX(0px) translateY(0px);'
     turn = 'o';
     temp = 0;
     tacTable.style = `width: ${width}px;height: ${height}px;`;
 });
//  setInterval(() => {
//         musicPlay();
//  }, 500);


