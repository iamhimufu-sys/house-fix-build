# House Fix & Build - Premium Service Website

![Project Status](https://img.shields.io/badge/Status-Complete-success)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Three.js](https://img.shields.io/badge/Three.js-r160-black)

A modern, high-performance, and visually stunning website for a home repair and construction business. Built with React, Vite, and WebGL (Three.js).

## 🌟 Features

-   **Premium Dark Mode UI**: A fully custom dark-themed interface with glowing "neon" accents and glassmorphism effects.
-   **Interactive 3D Hero Scene**: A floating 3D house model with dynamic lighting, particle effects (Stars, Sparkles), and a floating image gallery.
-   **Responsive Design**: Mobile-first architecture ensuring the site looks perfect on all devices.
-   **Service Showcase**: Clean, card-based layout to display various services (Plumbing, Electrical, etc.) with hover effects.
-   **Project Gallery**: A grid layout to showcase completed projects with zoom-on-hover interactions.
-   **Contact Integration**: Functional contact form UI with WhatsApp integration.

## 🛠 Tech Stack

-   **Frontend**: React.js (v18)
-   **Build Tool**: Vite
-   **Styling**: CSS Modules / Global CSS Variables (No external CSS frameworks for maximum control)
-   **3D / WebGL**: 
    -   `@react-three/fiber` (React renderer for Three.js)
    -   `@react-three/drei` (Useful helpers for R3F)
-   **Routing**: `react-router-dom`
-   **Icons**: `lucide-react`

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/iamhimufu-sys/house-fix-build.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd house-fix-build
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Pushing to GitHub

1.  Initialize git (if not already):
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
2.  Add remote and push:
    ```bash
    git remote add origin https://github.com/iamhimufu-sys/house-fix-build.git
    git branch -M main
    git push -u origin main
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The output files will be in the `dist` directory.

## 🚀 Deployment

The easiest way to deploy this project is using **Vercel**:

1.  Push your code to GitHub (as described above).
2.  Go to [Vercel](https://vercel.com) and sign up/log in.
3.  Click **"Add New Project"** and select **"Project"**.
4.  Import your GitHub repository: `house-fix-build`.
5.  Vercel will detect `Vite` automatically.
6.  Click **"Deploy"**.

Your site will be live in less than a minute!

## 📂 Project Structure

```
/src
  /components      # Reusable UI components (Navbar, Footer, ServiceCard, etc.)
  /context         # React Contexts (DarkModeContext)
  /pages           # Page components (Home, Services, Projects, About, Contact)
  /styles          # Global and component-specific CSS files
  /webgl           # 3D scenes and components (HeroScene.jsx)
  App.jsx          # Main application component with routing
  main.jsx         # Entry point
```

## 🎨 Customization

### Images & Assets
-   **3D Gallery**: To update the images in the 3D hero scene, edit the `images` array in `src/webgl/HeroScene.jsx`.
-   **Project Images**: Add your project images to the `public/images` folder (or verify paths in `src/pages/Projects.jsx`).

### Theme Colors
Global colors are defined in `src/styles/global.css`. You can easily change the primary color or background shades by editing the CSS variables:

```css
:root {
  --primary-color: #f59e0b; /* Amber */
  --bg-body: #0f1419;       /* Dark Background */
}
```

## 📄 License

This project is open-source and available under the MIT License.
