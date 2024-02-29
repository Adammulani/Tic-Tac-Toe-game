let boxes=document.querySelectorAll('.box')
let resetbtn=document.querySelector("#resetbtn")
let newGameBtn=document.querySelector('#newgamebtn')
let msgContainer=document.querySelector('.msg-container')
let msg=document.querySelector('#msg')
let count=0;
let flag=true;


 let turnO=true; // playerX, playerY

const winPatterns=[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
 ];

 let isWinner=false;
 boxes.forEach((box)=>{
     box.addEventListener("click",(evt)=>{
      if(turnO)
      {
        box.innerText='O';
        turnO=false;
      }
      else{
        box.innerText='X'
        turnO=true;
      }
      box.disabled=true;
      count++;
      isWinner=checkwinner();
      if(!isWinner && count===9)
      {
        showDraw();
      }
    });
 });

 const checkwinner=()=>{
    for(pattern of winPatterns)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
               
                showWinner(pos1val);
                return true;
                
            }
           
        }
    }
    
 }

 const showWinner=(winner)=>{
    msg.innerText=` Winner is ${winner}`
    msgContainer.classList.remove('hide')
    disableBoxes();
    flag=false; 
}

 const disableBoxes=()=>{
    for(box of boxes)
    {
        box.disabled=true;
    }
 }
 const enableBoxes=()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText=""
    }
 }

 const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add('hide');
 }
 
 const showDraw=()=>{
    msg.innerText=` Game Draw`
    msgContainer.classList.remove('hide')
    disableBoxes();
 }
 resetbtn.addEventListener("click",resetGame)
 newGameBtn.addEventListener("click",resetGame)

if(flag)
{
    //showDraw();
}