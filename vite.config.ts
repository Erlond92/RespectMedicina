import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import sass from 'sass';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
      react(),
      svgr(),
    ],
    css: {
        modules: {
            generateScopedName: '[name]_[local]_[hash:base64:5]'
        },
        preprocessorOptions: {
            scss: {
                implementation: sass
            }
        }
    },
    server: {
        watch: { usePolling: true }
    }
})
