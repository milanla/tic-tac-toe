// Elements
const $statusDive = document.querySelector('.status');
const $resetBtn = document.querySelector('.btn');
const $cells = document.querySelectorAll('.game-cell');

// Game variables
let $gameIsLive = true;
let $xIsNext = true;

// Event handlers
const handleReset = (e) => {
  console.log(e.target);
}

const handleCellClick = (e) => {
  // const location = e.target.dataset.id
  const classList = e.target.classList

  if (!e.target.dataset.value) {
    if ($xIsNext) {
      e.target.dataset.value = "x"
      classList.add("x")
      $xIsNext = !$xIsNext
    } else {
      e.target.dataset.value = "o"
      classList.add("o")
      $xIsNext = !$xIsNext
    }
  }
}

// Event listeners
$resetBtn.addEventListener('click', handleReset);

$cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});