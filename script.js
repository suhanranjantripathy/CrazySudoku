// Base puzzle and full solution
let board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---"
];

let solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763"
];

let selectedNum = null;
let selectedTile = null;
let errors = 0;

// Randomize digits 1–9 while keeping puzzle valid
function randomizeDigits() {
  const digits = ["1","2","3","4","5","6","7","8","9"];

  // Fisher–Yates shuffle
  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  const map = {};
  for (let i = 0; i < 9; i++) {
    map[(i + 1).toString()] = digits[i];
  }

  function mapRow(row) {
    let out = "";
    for (const ch of row) {
      if (ch === "-") out += "-";
      else out += map[ch];
    }
    return out;
  }

  for (let r = 0; r < 9; r++) {
    board[r] = mapRow(board[r]);
    solution[r] = mapRow(solution[r]);
  }
}

// Swap rows in the arrays
function swapRows(arr, r1, r2) {
  const tmp = arr[r1];
  arr[r1] = arr[r2];
  arr[r2] = tmp;
}

// Shuffle rows inside band of 3 rows
function shuffleRowsInBand(arr, startRow) {
  const idx = [0, 1, 2];
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  const copy = arr.slice();
  for (let i = 0; i < 3; i++) {
    arr[startRow + i] = copy[startRow + idx[i]];
  }
}

// Shuffle columns inside stack of 3 cols
function shuffleColsInStack(arr, startCol) {
  const idx = [0, 1, 2];
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }

  const copy = arr.slice();
  for (let r = 0; r < 9; r++) {
    const row = copy[r].split("");
    const newRow = row.slice();
    for (let i = 0; i < 3; i++) {
      newRow[startCol + i] = row[startCol + idx[i]];
    }
    arr[r] = newRow.join("");
  }
}

// Apply row/col shuffling to both board and solution
function randomizePositions() {
  // rows in bands
  shuffleRowsInBand(board, 0);
  shuffleRowsInBand(board, 3);
  shuffleRowsInBand(board, 6);
  shuffleRowsInBand(solution, 0);
  shuffleRowsInBand(solution, 3);
  shuffleRowsInBand(solution, 6);

  // cols in stacks
  shuffleColsInStack(board, 0);
  shuffleColsInStack(board, 3);
  shuffleColsInStack(board, 6);
  shuffleColsInStack(solution, 0);
  shuffleColsInStack(solution, 3);
  shuffleColsInStack(solution, 6);
}

// Build digits row and board tiles
function setGame() {
  const digitsContainer = document.getElementById("digits");
  const boardContainer = document.getElementById("board");

  // Clear in case of reload
  digitsContainer.innerHTML = "";
  boardContainer.innerHTML = "";

  // Create digit buttons 1–9
  for (let i = 1; i <= 9; i++) {
    const number = document.createElement("div");
    number.id = "digit-" + i;
    number.innerText = i;
    number.classList.add("number");
    number.addEventListener("click", selectNumber);
    digitsContainer.appendChild(number);
  }

  // Create 9×9 board tiles
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");

      // starting numbers
      if (board[r][c] !== "-") {
        tile.innerText = board[r][c];
        tile.classList.add("tile-start");
      }

      // thicker borders for 3×3 boxes
      if (r === 2 || r === 5) {
        tile.classList.add("horizontal-line");
      }
      if (c === 2 || c === 5) {
        tile.classList.add("vertical-line");
      }

      tile.addEventListener("click", selectTile);
      boardContainer.appendChild(tile);
    }
  }
}

// Handle selecting a digit
function selectNumber() {
  if (selectedNum) {
    selectedNum.classList.remove("number-selected");
  }
  selectedNum = this;
  selectedNum.classList.add("number-selected");
}

// Handle placing a digit on the board
function selectTile() {
  if (!selectedNum) return;

  // Cannot change starting tiles
  if (this.classList.contains("tile-start")) return;

  const [r, c] = this.id.split("-").map(Number);
  const value = selectedNum.innerText;

  if (solution[r][c] === value) {
    this.innerText = value;
  } else {
    errors++;
    document.getElementById("errors").innerText = "Errors: " + errors;
  }
}

// Setup everything on load
window.onload = function () {
  // randomize digits and positions for variety
  randomizeDigits();
  randomizePositions();
  setGame();

  // intro screen logic
  const startBtn = document.getElementById("start-btn");
  const intro = document.getElementById("intro-screen");

  startBtn.addEventListener("click", function () {
    intro.style.display = "none";
  });
};