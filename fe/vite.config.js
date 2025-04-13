import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0', // Exposes server to local network
        port: 5173, // Optional: choose a custom port
        hmr: {
            host: '366d-115-98-233-84.ngrok-free.app'
        },
    },
})