# 🔢 Calculator Project

This project is part of [The Odin Project](https://www.theodinproject.com/lessons/foundations-calculator). I’m building a simple calculator using **HTML**, **CSS**, and **JavaScript**.

---

The goal is to create a basic on-screen calculator that can handle addition, subtraction, multiplication, and division. It should have buttons for numbers (0–9), the usual operators (`+`, `−`, `×`, `÷`), an equals (`=`) button to get the result, and a clear (`C`) button to reset everything. There’s also a display at the top that shows what the user is typing and the result after hitting `=`.

The layout is made with HTML and styled using CSS to make it look clean and easy to use. The real work happens in JavaScript — that’s where I set up all the logic. I wrote separate functions for each operation, and then an `operate()` function that figures out which math function to run based on the button the user clicked.

Every button is connected to an event listener, so when a user clicks, say, `7`, then `+`, then `3`, and finally `=`, the calculator knows exactly what to do and updates the display with the result.

I also made sure it can handle a few edge cases — like what happens when someone tries to divide by zero, or clicks `=` more than once. It doesn’t evaluate long expressions like `3 + 5 * 2` all at once (not yet, at least), but it can go step-by-step, just like a basic calculator would.

---
made with ❤️ by krisnaarji