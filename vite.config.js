// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        svgo: true,
        svgoConfig: {
          plugins: [
            { name: 'removeViewBox', active: false }, // keep viewBox (important for scaling)
            { name: 'removeDimensions', active: true }, // remove width/height, allow CSS sizing
            {
              name: 'convertColors',
              params: { currentColor: false }, // replace fixed colors with "currentColor"
            },
          ],
        },
      },
    }),
  ],
})
