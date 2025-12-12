# 🧩 CrazySudoku  
A modern, beautiful, and fully interactive **Sudoku game** built using **HTML, CSS, and JavaScript** — featuring animations, randomized puzzles, and a stylish intro screen.

---

## 🎮 About the Game  

**CrazySudoku** is a visually polished Sudoku web app with:

- A dynamic intro splash screen  
- Randomized number mapping  
- Randomized row & column shuffling (valid puzzle every time!)  
- Clean 9×9 Sudoku grid  
- Error tracking  
- Smooth UI interactions  
- Works on desktop & mobile  

---

## ✨ Features  

### ✔️ Randomized Puzzle Every Time
- Digits 1–9 shuffled using Fisher–Yates algorithm  
- Rows inside each 3-row band shuffled  
- Columns inside each 3-column stack shuffled  
- Always generates a valid Sudoku puzzle

### ✔️ Beautiful UI
- Animated neon intro screen  
- Glassmorphism effect  
- Highlighting for selected numbers  
- Error counter  
- Thick borders for 3×3 regions  

### ✔️ Gameplay Mechanics
- Select a number → Click a tile to place  
- Pre-filled tiles are locked  
- Incorrect moves increase errors  
- Fully responsive design  

---

## 📸 Screenshots  

(Add your images inside a `screenshots` folder)

```
/screenshots
   intro-screen.png
   game-board.png
   gameplay.png
```

Example usage in README:

```
![Intro Screen](screenshots/intro-screen.png)
![Board](screenshots/board.png)
```

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (vanilla)

---

## 📂 Project Structure

```
CrazySudoku/
│── index.html
│── style.css
│── script.js
│── README.md
└── screenshots/
```

---

## 🧠 Puzzle Randomization Explained  

### Digit Randomization  
All digits 1–9 are remapped using Fisher–Yates shuffle.

### Row & Column Switching  
To keep the Sudoku valid:

- Shuffle rows inside bands (0–2, 3–5, 6–8)  
- Shuffle columns inside stacks (0–2, 3–5, 6–8)

This creates infinite valid puzzle variations.

---

## 📦 Installation  

Clone the repository:

```
git clone <your-repo-url>
```

Enter folder:

```
cd CrazySudoku
```

Run the game by opening:

```
index.html
```

---

## 🤝 Contributing  

Suggestions and improvements are welcome.  
Feel free to fork and enhance the project.

---

## 📜 License  

This project is licensed under the MIT License.

---

## ⭐ Support  

If you like the project, you can star the repository.
