# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

------------------------------------------------------------------------------------------------------------------


🛠 Step 1: Install gh-pages
npm install --save-dev gh-pages
______________

🧠 Step 2: Update vite.config.js
Edit vite.config.js and add the base option:
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-vite-app/', // 👈 Must match your repo name
  plugins: [react()],
});
______________

📦 Step 3: Update package.json
Here’s the full example of what your package.json should include:
{
  "name": "my-vite-app",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://your-username.github.io/my-vite-app",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^5.0.0",
    "gh-pages": "^6.0.0"
  }
}
Replace "homepage" with your actual GitHub Pages URL.
______________

🚀 Step 4: Deploy to GitHub Pages
npm run deploy
This will:
•	Build your app into the dist/ folder
•	Push it to the gh-pages branch on GitHub
•	Your site will be live at: 
•	https://your-username.github.io/my-vite-app/


