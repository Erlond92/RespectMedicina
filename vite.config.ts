import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import sass from 'sass';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        checker({
            typescript: true,
            overlay: true
        })
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
    },
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
    build: {
        outDir: 'build',
        minify: false
    },
    server: {
        host: '0.0.0.0'
    }
});
