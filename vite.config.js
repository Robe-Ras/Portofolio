import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'

console.log('Variables d\'environnement:', import.meta.env);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), envCompatible()],
  define: {
    'global': 'window' // Définit `global` comme un alias pour `window`
  }
})
