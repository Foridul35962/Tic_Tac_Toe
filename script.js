let boxs=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg=document.querySelector(".msg");
let win=document.querySelector("#win");
let newGame=document.querySelector("#new");
let turn0=true;
const winPattren=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let l=0;
let resetgame=()=>                          //resetgame
{
    msg.classList.add("hide");
    for(let i of boxs)
    {
        i.disabled=false;
        i.innerText="";
    }
    l=0;
}
boxs.forEach((box)=>{                               //click handel
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="X";
            turn0=false;
            box.classList.add("Xcolor");
        }
        else{
            box.innerText="O";
            turn0=true;
            box.classList.remove("Xcolor");
        }
        box.disabled=true;
        check();
        l++;
        if(l==9)
        {
            win.innerText=(`The game is Draw`);
            msg.classList.remove("hide");
        }
    });
});



const Display=(winner)=>{                       //winning Display
    for(let i of boxs)
    {
        i.disabled=true;
    }
    win.innerText=(`Congratulations, Winner is ${winner}`);
    msg.classList.remove("hide");
}


const check=()=>{                                       //check the pattern
    for(let pos of winPattren){
        let val1=boxs[pos[0]].innerText;
        let val2=boxs[pos[1]].innerText;
        let val3=boxs[pos[2]].innerText;
        if(val1!="" && val2!="" && val3!="")
        {
            if(val1===val2 && val2===val3)
            {
                console.log("Winner ",val1);
                Display(val1);
            }
        }
    }
}


newGame.addEventListener("click",resetgame);                //set newGame and reset button
reset.addEventListener("click",resetgame);