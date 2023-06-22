function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            location.href = "/Home/Perdida";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

countdown( "countdown", 4 , 59 );
  

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.simon-button');
    const startButton = document.querySelector('.start-button');
    const message = document.querySelector('.message');
  
    let sequence = [];
    let playerSequence = [];
    let isGameStarted = false;
    let isPlayerTurn = false;
    let isShowingSequence = false;
    let stepCount = 0;
  
    startButton.addEventListener('click', startGame);
  
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (isGameStarted && isPlayerTurn) {
          const buttonIndex = index;
          playerSequence.push(buttonIndex);
          checkSequence();
          playButton(buttonIndex);
        }
      });
    });
  
    function startGame() {
      if (!isGameStarted) {
        sequence = [];
        playerSequence = [];
        stepCount = 0;
        message.textContent = 'Mira la secuencia!';
        startButton.textContent = 'Resetear';
        startButton.style.backgroundColor = '#f44336';
        isGameStarted = true;
        isShowingSequence = true;
        isPlayerTurn = false;
        generateStep();
        setTimeout(() => {
          playSequence();
        }, 1000);
      } else {
        resetGame();
      }
    }
  
    function resetGame() {
      sequence = [];
      playerSequence = [];
      isGameStarted = false;
      isPlayerTurn = false;
      isShowingSequence = false;
      stepCount = 0;
      message.textContent = '';
      startButton.textContent = 'Comenzar';
      startButton.style.backgroundColor = '#4CAF50';
    }
  
    function generateStep() {
      const buttonIndex = Math.floor(Math.random() * 4);
      sequence.push(buttonIndex);
      stepCount++;
    }
  
    function playSequence() {
      let i = 0;
      isShowingSequence = true;
      isPlayerTurn = false;
      message.textContent = 'Mira la secuencia!';
      const interval = setInterval(() => {
        const buttonIndex = sequence[i];
        playButton(buttonIndex);
        i++;
        if (i >= stepCount) {
          clearInterval(interval);
          setTimeout(() => {
            message.textContent = 'Tu turno!';
            isShowingSequence = false;
            isPlayerTurn = true;
          }, 500);
        }
      }, 1000);
    }
  
    function playButton(buttonIndex) {
      buttons[buttonIndex].classList.add('active');
      setTimeout(() => {
        buttons[buttonIndex].classList.remove('active');
      }, 500);
    }
  
    function checkSequence() {
      if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) {
        gameOver();
        return;
      }
  
      if (playerSequence.length === stepCount) {
        if (stepCount === 10) {
          finalizar();
        } else {
          playerSequence = [];
          isPlayerTurn = false;
          generateStep();
          setTimeout(() => {
            playSequence();
          }, 1000);
        }
      }
    }
  
    function gameOver() {
      resetGame();
    }
  
    function finalizar() {
      message.textContent = 'Simon completado.';
      message.style.backgroundColor = null;
      sequence = [];
      playerSequence = [];
      stepCount = 0;
      isGameStarted = false;
      isPlayerTurn = false;
      isShowingSequence = false;
      startButton.style.display = 'none';
      buttons.forEach(button => button.style.display = 'none');
      location.href = "/Home/Victoria";
    }
  });
  