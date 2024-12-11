import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {   // this is how to solve CORS {cross origin} error in frontend
      '/api': 'http://localhost:3000',
    },   // this will entertain every request coming from api as localhost, and the proxcy will also be added
  },
  plugins: [react()],
})
