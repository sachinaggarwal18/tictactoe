console.log("Welcome to tha TicTacToe")
let bgmusic=new Audio("bgm.mp3")
let audioturn=new Audio("Ting.m4r")


let turn="X"
let isGameOver=false;
// function to change the Turn

const changeTurn=()=>{
    return turn==="X"?"O":"X"  //agar turn "x" hai , to hame return krna hai "0",wrna return krna hai "x"
}



// function to check for win
const checkWin = ()=>{

    let boxtext = document.getElementsByClassName('boxtext');

    let wins=[

        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isGameOver=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="250px";
            document.querySelector(".line").style.transform = "translate(23vw,39vw) rotate(90deg)"

        }
})
}


// game logic

    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element =>{
        let boxtext = element.querySelector('.boxtext');
        element.addEventListener('click', ()=>{
            if(boxtext.innerText === ''){
                boxtext.innerText = turn;
                turn=changeTurn();
                audioturn.play();
                checkWin();
                if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText="Now Your Turn- " + turn;
                }
            }
        })
    })


    // adding listener to reset button

    reset.addEventListener('click',() =>{
        let boxtexts=document.querySelectorAll('.boxtext');
        Array.from(boxtexts).forEach(element =>{
            element.innerText = ""
        });

        turn="X"
        isGameOver=false
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
    })


    