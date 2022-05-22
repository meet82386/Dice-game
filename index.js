function rand1(){
    let random1 = Math.random();
    random1 *= 6;
    random1 += 1;
    random1 = Math.floor(random1);  

    let firstImg = document.querySelector(".img1");
    firstImg.setAttribute('src', "images/dice" + random1 + ".png"); 
    return random1;
}

function rand2(){
    let random1 = Math.random();
    random1 *= 6;
    random1 += 1;
    random1 = Math.floor(random1);

    let firstImg = document.querySelector(".img2");
    firstImg.setAttribute('src', "images/dice" + random1 + ".png"); 
    return random1;
}

let r1 = rand1();
let r2 = rand2();

function decide(r1,r2){
    if (r1 == r2) return "Draw!";
    if (r1 > r2) return "Player 1 Wins !";
    else return "Player 2 wins !";
}

let s = decide(r1,r2);

let se = document.querySelector(".container h1");
se.textContent = s;

