let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoremsg = document.querySelector("#user-score");
const compScoremsg = document.querySelector("#comp-score");

const drawGame=() => {
  // console.log("Game was draw");
  msg.innerText="Game was Draw , Play again.";
  msg.style.backgroundColor="#081b31";
  msg.style.color="white";
}
const genCompChoice =() => {
  const options=["Rock","Paper","Scissors"];
  const randIdx=Math.floor(Math.random() *3);
  return options[randIdx];
};

const showWinner=(userWin,userChoice,compChoice) => {
   if(userWin){
    userScore++;
    userScoremsg.innerText = userScore;
    msg.innerText=`Congratulations , You Win!  Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor="green";
    msg.style.color="white";

   }
   else{
    compScore++;
     compScoremsg.innerText = compScore;
    msg.innerText=`"Opps ,You lose , better luck  next time" ${compChoice} bets your ${userChoice} .`
    msg.style.backgroundColor = "red";
    msg.style.color="black";
   }
};

const playGame=(userChoice) => {
//  console.log("user choice =",userChoice);
 const compChoice=genCompChoice();
//  console.log("comp choice=",compChoice);

 if(userChoice==compChoice){
     drawGame();
 } else {
  let userWin=true;
  if(userChoice=="Rock"){
    userWin=compChoice === "Paper" ? false : true;
  } else if(userChoice=="paper"){
     userWin= compChoice === "Scissors" ? false:true;
  } else{
     userWin = compChoice === "Rock" ? false : true;
  }
  showWinner(userWin,userChoice,compChoice);
 }
};

choices.forEach((choice) =>{
  choice.addEventListener("click",() =>{
    const userChoice=choice.getAttribute("id");
    // console.log("choice was ",userChoice);
    playGame(userChoice);
  })

});
