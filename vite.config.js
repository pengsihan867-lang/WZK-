import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/wuzekai-exam-simulator/', // 为GitHub Pages部署配置base路径
})
