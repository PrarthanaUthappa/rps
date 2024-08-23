let userscore=0;
let compscore=0;
const choice=document.querySelectorAll(".choice");
const para=document.querySelector(".turn");
const uscore=document.querySelector("#uscr");
const cscore=document.querySelector("#cscr");

const cmptrturn =(userchoice)=>
{
console.log("user choice is",userchoice);
const cmptrchoice=getcmptrchoice();
console.log("computer choice is",cmptrchoice);
if(userchoice===cmptrchoice){
    drawgame(userchoice,cmptrchoice);
}
else{
    let userwin;
    if(userchoice==="rock")
    {
        userwin=cmptrchoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
     userwin=cmptrchoice==="rock"?true:false;
    }
    else{
        userwin=cmptrchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,cmptrchoice);
}
};


const showwinner=(userwin,userchoice,cmptrchoice)=>
{
    if(userwin===true)
    {
        userscore++;
        uscore.innerText=userscore;
        console.log("Hurray!!You won.")
        para.innerText=`Hurray!!You won.Your ${userchoice} beats ${cmptrchoice}`;
        para.style.backgroundColor="green";
    }
    else{
        console.log("Ops you loss!");
        compscore++;
        cscore.innerText=compscore;
        para.innerText=`Ops you loss! ${cmptrchoice} beats your ${userchoice}`;
        para.style.backgroundColor="red";
    }
}


const drawgame=(userchoice,cmptrchoice)=>
{
    console.log("The game was draw.");
    para.innerText=`It's a draw.Play again..${cmptrchoice} same as your choice ${userchoice}`;
    para.style.backgroundColor="rgb(4, 42, 106)";
}


const getcmptrchoice=()=>
{
    const options=['rock','paper','scissor'];
    const rndmIdx=Math.floor(Math.random()*3);
    return options[rndmIdx];
}


choice.forEach((choice)=>
{
choice.addEventListener("click",()=>
    {
        const userchoice=choice.getAttribute("id");
// console.log("choice was clicked",userchoice);
cmptrturn(userchoice);
    });
});