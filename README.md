# Customer Support Zone 🛠️

A React-based Customer Support Zone application designed to manage customer support tickets efficiently. The system allows tracking tickets, marking them as in-progress, and resolving them with real-time status updates.

---

## 🚀 Features

* Responsive Navbar with website title and action button
* Banner with linear gradient and live ticket statistics
* Customer Ticket List (Card Layout)
* Task Status Section (In Progress)
* Resolved Ticket List
* React-Toastify notifications (No alerts used)
* Fully responsive for mobile & desktop
* Clean UI following Figma design

---

## 🧰 Technology Stack

* HTML
* CSS (Tailwind CSS)
* JavaScript
* **React.js**
* React-Toastify

---

## 📊 Ticket Status Logic

* Clicking **Add to Task**

  * Moves ticket to *In Progress*
  * Increases In Progress count
  * Removes ticket from main list

* Clicking **Complete**

  * Removes ticket from In Progress
  * Adds ticket to Resolved list
  * Decreases In Progress count
  * Increases Resolved count

---

## ❓ React Concept Questions & Answers

### 1️⃣ What is JSX, and why is it used?

JSX (JavaScript XML) হলো JavaScript-এর একটি syntax extension, যা React এ HTML-এর মতো structure লিখতে সাহায্য করে।
এটি code readable করে এবং UI তৈরিতে সহজতা আনে।

---

### 2️⃣ What is the difference between State and Props?

* **State**:
  Component এর নিজস্ব data, যা change হতে পারে।

* **Props**:
  Parent component থেকে child component এ data পাঠানোর মাধ্যম।

---

### 3️⃣ What is the useState hook, and how does it work?

`useState` হলো একটি React Hook, যা functional component এ state ব্যবহারের সুযোগ দেয়।

```js
const [count, setCount] = useState(0);
```

এখানে `count` হলো state এবং `setCount` দিয়ে state update করা হয়।

---

### 4️⃣ How can you share state between components in React?

State সাধারণত parent component এ রাখা হয় এবং props এর মাধ্যমে child components এ পাঠানো হয়।
এই পদ্ধতিকে **Lifting State Up** বলা হয়।

---

### 5️⃣ How is event handling done in React?

React এ event handling camelCase এ করা হয় এবং function reference দেওয়া হয়।

```jsx
<button onClick={handleClick}>Click</button>
```

---

## 📌 Project Rules Followed

* ✅ Built with React.js
* ✅ No alert used (React-Toastify used)
* ✅ Responsive Design
* ✅ Meaningful commits (5+)
* ✅ Realistic ticket data used

---

## 👨‍💻 Author

Developed as part of a React assignment following Figma design.

---

⭐ Feel free to improve and extend this project!
