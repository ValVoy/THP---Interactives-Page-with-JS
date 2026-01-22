# JS & Events – Interactive DOM Manipulation

## 🚀 Project Overview

This project is an intensive dive into **Document Object Model (DOM)** manipulation and **JavaScript Event Listeners**. Starting with a static Bootstrap "Album" page, I implemented multiple interactive features using exclusively JavaScript—without touching the original HTML file.

The goal was to transform a static interface into a dynamic experience that reacts to user clicks, hovers, and keyboard inputs.

---

## 🛠️ Implemented Features

### 1. Interactive Footer
- **Click Counter**: Every click on the footer is tracked and logged in the console (e.g., "click number 5").

### 2. UI Components
- **Hamburger Menu Toggle**: Restored functionality to the navigation menu. Using `classList.toggle`, the menu now expands and collapses correctly when clicked.
- **Bootstrap Desactivation**: A "nuclear" feature where double-clicking the navbar disables the Bootstrap CDN link, stripping the site of all styling. A second double-click restores it.

### 3. Card Interactivity
- **Style Modifications**: 
  - The "Edit" button of the first card turns text red permanently.
  - The "Edit" button of the second card toggles green text on and off.
- **Dynamic View Mode**: Hovering over the "View" button of any card reduces its size (image to 20%, hidden text). Moving the mouse away restores the card to its original state.

### 4. DOM Reordering (Rotation)
- **Forward Rotation (`==>`)**: Moves the last card to the first position.
- **Backward Rotation (`<==`)**: Moves the first card to the last position.
- **Event Control**: Used `e.preventDefault()` to stop the default link navigation, allowing the JS logic to execute without page reloads.

### 5. Advanced Keyboard Layouts
When the page logo is targeted, specific keys trigger layout shifts:
- `a`: Entire page condenses to the left (4 Bootstrap columns).
- `y`: Entire page is centered (4 Bootstrap columns).
- `p`: Entire page condenses to the right (4 Bootstrap columns).
- `b`: Resets the layout to default.

---

## 🧬 Learning Goals & Technologies

- **JavaScript (ES6+)**
- **DOM API**: Advanced selectors (`querySelector`, `closest`, `parentNodes`).
- **Event Handling**: Mastered `click`, `dblclick`, `mouseover`, and `keypress`.
- **Node Manipulation**: Moving elements within the document tree using `insertBefore` and `appendChild`.
- **CSS-in-JS**: Dynamic styling and class management.

---

## 👤 Author

**Valentin Chéron** *The Hacking Project 2026*
