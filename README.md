# 📚 Library Management System – Coding Challenge (React + TypeScript)

This project is developed as part of the **Hexad Coding Challenge**.  
It follows an **agile, story-based approach**, committing code after each story to show thought evolution.

---

## 🚀 Features Implemented

### 👤 User Functions
| Feature | Description |
|--------|-------------|
| Borrow Book | Removes from library & adds to borrowed list |
| Max Borrow Rule | User can borrow **max 2 books** |
| Copy Rule | Only **1 copy per user** even if multiple exist |
| Multiple Copies | Borrow reduces only 1 copy, NOT full item |
| Last Copy | Removes full book from library |
| Return Book | Adds book back to library & updates stock |

### 🛠 Admin Functions
| Feature | Description |
|--------|-------------|
| Login (Admin Only) | `/admin-login` |
| Add Book | Title + copies + image URL |
| Auto Refresh | Books appear instantly in user books list |
| Dashboard Stats | Books, Users, Borrowed (sample static) |

---

## 🧪 Technical Stack

| Tool | Usage |
|------|-------|
| React + TypeScript | Frontend |
| Vite | Build Tool |
| Custom React Context | Global Library State |
| Vitest + jsdom | Unit Testing |
| Pure CSS | Styling (No Tailwind in final UI) |
| Git | Version control – story-based commits |

---

## 🧬 Architecture Overview

