/* main page button*/

let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");

btn1.addEventListener('click', () =>{
    document.querySelector(".contents").style.backgroundImage = "url('background1.jpg')";
});

btn2.addEventListener('click', () =>{
    document.querySelector(".contents").style.backgroundImage = "url('background2.jpg')";
});

btn3.addEventListener('click', () =>{
    document.querySelector(".contents").style.backgroundImage = "url('ocean.jpg')";
});