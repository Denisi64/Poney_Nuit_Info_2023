const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const canvasNext = document.getElementById('next');
const ctxNext = canvasNext.getContext('2d');

let accountValues = {
  score: 1,
  level: 0,
  lines: 0
};
let goalreached=false;
let completedLines = 0;
const goalScore = 404;


function updateAccount(key, value) {
  let element = document.getElementById(key);
  if (element) {
    element.textContent = value;
  }
}

function clearLines() {
  completedLines++;
  console.log('Clearing lines. Completed lines:', completedLines);
  updateScore();
}

// Modifiez la fonction updateScore pour appeler showRealTimeScore.
function updateScore() {
  
  updateAccount('lines', accountValues.lines);
  updateAccount('score', accountValues.score);
  // Vous pouvez ajouter d'autres logiques de calcul de score ici si nécessaire
  if (accountValues.score >= goalScore && goalreached==false) {
    goalreached=true;
    const goalReachedMessage = document.getElementById('PerdreTemps');
    goalReachedMessage.textContent = "Félicitations ! Vous avez Perdus votre temps!";
    goalReachedMessage.style.display = 'block';
  }
  
}

// Ajoutez cette fonction à votre code JavaScript
function stopGame() {
  cancelAnimationFrame(requestId);
  showGameOver();
}

function hideRealTimeScore() {
  const realTimeScoreMessage = document.querySelector('.real-time-score-message');
  if (realTimeScoreMessage) {
    realTimeScoreMessage.remove();
  }
}

// Modifiez la fonction showGameOver pour cacher le score en temps réel.
function showGameOver() {
  const gameOverMessage = document.createElement('div');
  gameOverMessage.textContent = `Partie terminée ! Votre score final est ${accountValues.score}.`;
  gameOverMessage.classList.add('game-over-message'); // Ajoutez une classe CSS pour le style si nécessaire.
  document.body.appendChild(gameOverMessage);

  // Ajoutez ici d'autres éléments ou actions à effectuer à la fin du jeu.
  hideRealTimeScore();  // Cacher le score en temps réel.
}


// Ajoutez cette fonction pour supprimer le message de jeu terminé lorsque vous recommencez le jeu.
function hideGameOver() {
  const gameOverMessage = document.querySelector('.game-over-message');
  if (gameOverMessage) {
    gameOverMessage.remove();
  }
}

let account = new Proxy(accountValues, {
  set: (target, key, value) => {
    target[key] = value;
    updateAccount(key, value);
    return true;
  }
});

let requestId;

moves = {
  [KEY.LEFT]: p => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]: p => ({ ...p, y: p.y + 1 }),
  [KEY.SPACE]: p => ({ ...p, y: p.y + 1 }),
  [KEY.UP]: p => board.rotate(p)
};

let board = new Board(ctx, ctxNext);
addEventListener();
initNext();

function initNext() {
  // Calculate size of canvas from constants.
  ctxNext.canvas.width = 4 * BLOCK_SIZE;
  ctxNext.canvas.height = 4 * BLOCK_SIZE;
  ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);
}

function addEventListener() {
  document.addEventListener('keydown', event => {
    if (event.keyCode === KEY.P) {
      pause();
    }
    if (event.keyCode === KEY.ESC) {
      gameOver();
    } else if (moves[event.keyCode]) {
      event.preventDefault();
      // Get new state
      let p = moves[event.keyCode](board.piece);
      if (event.keyCode === KEY.SPACE) {
        // Hard drop
        while (board.valid(p)) {
          account.score += POINTS.HARD_DROP;
          board.piece.move(p);
          p = moves[KEY.DOWN](board.piece);
        }       
      } else if (board.valid(p)) {
        board.piece.move(p);
        if (event.keyCode === KEY.DOWN) {
          event.preventDefault();
          let p = moves[event.keyCode](board.piece);
          if (board.valid(p)) {
            board.piece.move(p);
            accountValues.score += POINTS.SOFT_DROP;
            updateScore();
            
          }
        }
      } // Ajoutez cette parenthèse pour fermer le bloc else if
    }
  });
}


function resetGame() {
  hideGameOver();
  
  account.score = 0;
  account.lines = 0;
  account.level = 0;
  board.reset();
  time = { start: 0, elapsed: 0, level: LEVEL[account.level] };
}


function play() {
  resetGame();
  time.start = performance.now();
  // If we have an old game running a game then cancel the old
  if (requestId) {
    cancelAnimationFrame(requestId);
  }

  animate();
}

function animate(now = 0) {
  time.elapsed = now - time.start;
  if (time.elapsed > time.level) {
    time.start = now;
    if (!board.drop()) {
      gameOver();
      return;
    }
  }

  // Clear board before drawing new state.
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  board.draw();
  requestId = requestAnimationFrame(animate);
}

function gameOver() {
  cancelAnimationFrame(requestId);
  ctx.fillStyle = 'black';
  ctx.fillRect(1, 3, 8, 1.2);
  ctx.font = '1px Arial';
  ctx.fillStyle = 'red';
  ctx.fillText('GAME OVER', 1.8, 4);
}

function pause() {
  if (!requestId) {
    animate();
    return;
  }

  cancelAnimationFrame(requestId);
  requestId = null;
  
  ctx.fillStyle = 'black';
  ctx.fillRect(1, 3, 8, 1.2);
  ctx.font = '1px Arial';
  ctx.fillStyle = 'yellow';
  ctx.fillText('PAUSED', 3, 4);
}

