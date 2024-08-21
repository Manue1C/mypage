import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPink: '#ff00ff',
        neonBlue: '#00ffff',
        neonPurple: '#8000ff',
        neonCyan: '#00ffcc',
        darkBg: '#1a1a1a',
        // Professional theme colors
        professionalBg: '#ffffff',
        professionalText: '#333333',
        professionalAccent: '#007acc',
        professionalHighlight: '#005f99',
      },
    },
  },
  plugins: [],
} satisfies Config

