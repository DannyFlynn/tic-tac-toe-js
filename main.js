let option = document.querySelectorAll('.tic');
const reset = document.getElementById('reset');
const winner = document.querySelector('.winner');

//deconstructuring my buttons so I can run conditions on them indivually
const [one, two, three, four, five, six, seven, eight, nine] = option;


//Three vars to appear for the ouctome of the game win, lose and draw
let circleWinner = 'Winner is O!!';
let crossWinner = 'Winner is X!!';
let draw = 'Its A Draw'
const winningMessage = document.querySelector('.message');

//Count will make(marker) X go to O vice versa
let marker = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O'];
let count = 0;

option.forEach(elem => {
    elem.addEventListener('click', () => {
        swappingX(elem)
    })
})

//this will show  the ouctome of 
function winnerWinner(message){
    winner.style.display = 'block';
    winningMessage.innerHTML = message;
}

//Function on swapping X to O if there is an empty square
function swappingX(e){
    
   if(e.innerText === ''){
    count++
    e.innerText = marker[count];
       playGame()
   } 
}

//functionality in the game 
function playGame(){
  if(one.innerText === 'O' && two.innerText === 'O' && three.innerText === 'O'){
      winnerWinner(circleWinner)
  } 
  else if(one.innerText === 'X' && two.innerText === 'X' && three.innerText === 'X'){
      winnerWinner(crossWinner)
  }
  else if(four.innerText === 'O' && five.innerText === 'O' && six.innerText === 'O'){
      winnerWinner(circleWinner)
  }
  else if(four.innerText === 'X' && five.innerText === 'X' && six.innerText === 'X'){
    winnerWinner(crossWinner)
}
  else if(seven.innerText === 'O' && eight.innerText === 'O' && nine.innerText === 'O'){
    winnerWinner(circleWinner)
}
  else if(seven.innerText === 'X' && eight.innerText === 'X' && nine.innerText === 'X'){
    winnerWinner(crossWinner)
}
  else if(one.innerText === 'O' && four.innerText === 'O' && seven.innerText === 'O'){
    winnerWinner(circleWinner)
}
  else if(one.innerText === 'X' && four.innerText === 'X' && seven.innerText === 'X'){
    winnerWinner(crossWinner)
}
  else if(two.innerText === 'O' && five.innerText === 'O' && eight.innerText === 'O'){
    winnerWinner(circleWinner)
}
  else if(two.innerText === 'X' && five.innerText === 'X' && eight.innerText === 'X'){
    winnerWinner(crossWinner)
}
 else if(three.innerText === 'O' && six.innerText === 'O' && nine.innerText === 'O'){
    winnerWinner(circleWinner)
}
 else if(three.innerText === 'X' && six.innerText === 'X' && nine.innerText === 'X'){ 
    winnerWinner(crossWinner)
}
 else if(one.innerText === 'O' && five.innerText === 'O' && nine.innerText === 'O'){
    winnerWinner(circleWinner)
}
 else if(one.innerText === 'X' && five.innerText === 'X' && nine.innerText === 'X'){
    winnerWinner(crossWinner)
}
 else if(three.innerText === 'O' && five.innerText === 'O' && seven.innerText === 'O'){
    winnerWinner(circleWinner)
}
 else if(three.innerText === 'X' && five.innerText === 'X' && seven.innerText === 'X'){
    winnerWinner(crossWinner)
}
 else if(one.innerText !== '' && two.innerText !== '' && three.innerText !== '' && four.innerText !== '' && five.innerText !== '' &&
six.innerText !== '' && seven.innerText !== '' && eight.innerText !== '' && nine.innerText !== ''){
  winnerWinner(draw)
}
}

// reset after the game is complete everything will go back to its prev state
reset.addEventListener('click', () => {
    one.innerText = '';
    two.innerText = '';
    three.innerText = '';
    four.innerText = '';
    five.innerText = '';
    six.innerText = '';
    seven.innerText = '';
    eight.innerText = '';
    nine.innerText = '';
    winner.style.display = 'none';
    count = 0;
})
  
  
 