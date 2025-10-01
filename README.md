# React & Go Calculator Application

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white)![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

This is a full-stack calculator web application built with a modern tech stack. The backend, written in Go, handles the calculation logic, while the frontend, built with React, provides a sleek, responsive, and intuitive user interface.

![calculator.gif](https://github.com/user-attachments/assets/4a5a5eac-9340-4e1b-8e42-0ab2c6c381ef)

## 🌟 Key Features

*   **🧮 Core Arithmetic Operations:** Full support for addition, subtraction, multiplication, and division.
*   **⛓️ Stateful Sequential Calculations:** The result of a previous calculation is automatically used as the starting point for the next operation (e.g., `8 * 2 = 16 + 4 = 20`).
*   **🧠 Smart Input Validation:** The frontend logic prevents entering invalid expressions, such as multiple operators in a row (e.g., `5 * + 3`), while correctly handling negative numbers (e.g., `5 * -3`).
*   **🔢 Decimal & Percentage Support:** Handles floating-point numbers and percentage calculations correctly.
*   **🛠️ Utility Functions:** Includes essential `Clear (C)` and `Delete Last (⌫)` functionality.
*   🎨 **Theme Switching:** Easily switch between light and dark themes for comfortable viewing.
*   **📱 Responsive Design:** The layout is fully responsive and looks great on all screen sizes, from mobile to desktop.

## 🛠️ Tech Stack

### Frontend

*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** Strictly typed language for enhanced reliability and scalability.
*   **Redux Toolkit:** For predictable and centralized state management of the expression and result.
*   **Webpack:** A powerful module bundler for building the application.
*   **SCSS (Modules):** For writing modular and encapsulated styles with a preprocessor.
*   **classnames:** A utility for conditionally joining class names.

### Backend

*   **Go (Golang):** A compiled language for building a fast and efficient backend server.
*   **Net/http:** Go's standard library for building the HTTP server and handling routes.

## 🏗️ Frontend Architecture

The client-side application is architected according to the **Feature-Sliced Design (FSD)** methodology. This approach ensures the codebase is modular, scalable, and maintainable by organizing code by business domain rather than technical type.

For more information, see the official documentation: [Feature-Sliced Design](https://feature-sliced.design/)

## 🚀 Getting Started

To run this project locally, you will need to run both the backend and frontend servers.

### Prerequisites

*   Node.js (v18.x or higher)
*   npm / yarn
*   Go (v1.20 or higher)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nikitinvitya/calculator.git
    cd calculator
    ```

2.  **Run the Go Backend Server:**
    *   In your terminal, navigate to the server directory:
    ```bash
    cd server/cmd/
    ```
    *   Run the server:
    ```bash
    go run main.go
    ```
    The backend server will start on :8080 port.

3.  **Run the React Frontend Application:**
    *   **Open a new terminal window.**
    *   Navigate to the client directory from the project root:
    ```bash
    cd client 
    ```
    *   Install the dependencies:
    ```bash
    npm install
    ```
    *   Start the development server:
    ```bash
    npm start
    ```

4.  **Open the application in your browser:**
    Navigate to `http://localhost:3000`.

## 📜 Available Scripts

In the `/client` directory, you can run the following scripts:

*   `npm start` — Runs the app in development mode with Webpack Dev Server.
*   `npm run build:prod` — Builds the app for production (minimized).
*   `npm run build:dev` — Builds the app in development mode (non-minimized).
*   `npm run lint` — Lints all TypeScript files.
*   `npm run lint:fix` — Lints and automatically fixes all applicable issues.
*   `npm run format` — Formats the entire project using Prettier.
