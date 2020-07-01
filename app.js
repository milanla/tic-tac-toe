// Elements
const $statusDiv = document.querySelector('.status');
const $resetBtn = document.querySelector('.btn');
const $cells = document.querySelectorAll('.game-cell');

// Game variables
let $gameIsLive = true;
let $xIsNext = true;
let $winner = null;
let $currentUser = document.querySelector('.user')

// Functions
const updateStatus = (winner) => {
  $gameIsLive = false
  $statusDiv.innerHTML = `${winner} has won!`
}

const checkGameStatus = () => {
  const topLeft = $cells[0].classList[1]
  const topCenter = $cells[1].classList[1]
  const topRight = $cells[2].classList[1]
  const middleLeft = $cells[3].classList[1]
  const middleCenter = $cells[4].classList[1]
  const middleRight = $cells[5].classList[1]
  const bottomLeft = $cells[6].classList[1];
  const bottomCenter = $cells[7].classList[1];
  const bottomRight = $cells[8].classList[1];

  // check winner
  if (topLeft && topLeft === topCenter && topLeft === topRight) {
    updateStatus(topLeft)
  } else if (middleLeft && middleLeft === middleCenter && middleLeft === middleRight) {
    updateStatus(middleLeft)
  } else if (bottomLeft && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    updateStatus(bottomLeft)
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    updateStatus(topLeft)
  } else if (topCenter && topCenter === middleCenter && topCenter === bottomCenter) {
    updateStatus(topCenter)
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    updateStatus(topRight)
  } else if (topLeft && topLeft === middleCenter && topLeft === bottomRight) {
    updateStatus(topLeft)
  } else if (topRight && topRight === middleCenter && topRight === bottomLeft) {
    updateStatus(topRight)
  }
}

// Event handlers
const handleReset = () => {
  $gameIsLive = true
  $xIsNext = true
  $statusDiv.innerHTML = '<span class="user">x</span> is next'

  $cells.forEach(cell => {
    cell.classList.remove(cell.classList[1])
    cell.dataset.value = ""
  })
}

const handleCellClick = (e) => {
  // const location = e.target.dataset.id
  const classList = e.target.classList

  if ($gameIsLive && !e.target.dataset.value) {
    if ($xIsNext) {
      e.target.dataset.value = "x"
      classList.add("x")
      $xIsNext = !$xIsNext
    } else {
      e.target.dataset.value = "o"
      classList.add("o")
      $currentUser.innerText = 'x'
      $xIsNext = !$xIsNext
    }

    $currentUser.innerText = $xIsNext ? 'x' : 'o';
    checkGameStatus()
  }

}

// Event listeners
$resetBtn.addEventListener('click', handleReset);

$cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});