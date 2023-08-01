import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  server: {
    host: 'localhost',
    port: 8080
  },
  plugins: [
    react(),
    tsconfigPaths(),
  ],
})
