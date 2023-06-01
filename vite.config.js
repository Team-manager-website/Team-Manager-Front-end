import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
    server: {
      proxy: {
        '/api': 'http://localhost:8090',
      }
    },
    plugins: [vue()]
  })
// {
//     "name": "vues",
//     "version": "0.0.0",
//     "private": true,
//     "scripts": {
//       "dev": "vite",
//       "build": "vite build",
//       "preview": "vite preview"
//     },
//     "dependencies": {
//       "@auth0/auth0-vue": "^2.2.0",
//       "axios": "^1.4.0",
//       "cors": "^2.8.5",
//       "express": "^4.18.2",
//       "vue": "^3.2.47",
//       "vue-router": "^4.1.6"
//     },
//     "devDependencies": {
//       "@vitejs/plugin-vue": "^4.0.0",
//       "vite": "^4.1.4"
//     }
//   }