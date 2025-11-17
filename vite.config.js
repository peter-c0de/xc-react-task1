import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/xc-react-task1/', // 👈 For gh-pages
  plugins: [react()],
})
