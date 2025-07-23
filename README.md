# QKART

An e‑commerce web application featuring user authentication, product search, shopping cart, and checkout functionality. Built with React (frontend) and a RESTful backend.

## Live Website

The project is deployed and accessible at: 🔗 https://qkart-frontend-mohiths-projects-7b8688ba.vercel.app/

---

## Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Usage](#usage)  
4. [Project Structure](#project-structure)
5. [Deployment](#deployment)  

---

## Features

- ✅ User signup, login, and secure logout  
- 🔍 Product search with dynamic filtering  
- 🛒 Cart management: add, update, and remove items  
- 💳 Checkout flow with cost summary and user wallet balance  
- 📱 Fully responsive UI across desktop and mobile  
- 🔐 Token-based authentication; session persisted in local storage

---

## Tech Stack

- **Frontend**: React, React Router, Material‑UI
- **State Management**: React Hooks & Context API  
- **HTTP Requests**: Axios / Fetch API  
- **Styling**: CSS Modules / Styled Components 
- **Hosting**: Render / Vercel  
- **Backend**: Node.js + Express.js (REST APIs)

---

## Usage

1. Register a new account or Login using an existing account.
2. Browse Products on the home page and use the search bar for filtering.
3. Add to Cart to select items.
4. Checkout to review cart, total price, and wallet details.
5. Place Order to complete purchase and view confirmation. (Demo Phase, there is no active transaction set up)

---

## Project Structure

```text
├── public/              # Static assets
├── src/                 # Application source code
│   ├── components/      # Reusable UI components
│   ├── App.js
│   ├── index.css
│   └── index.js
└── package.json
```

---

## Deployment

- Frontend: Deploy on Vercel
  - Use the Vercel CLI from the terminal and deploy to production.
 
- Backend: Deploy on Render
  - Connect your github repo and deploy the build using the suitable configuration.
 
---
