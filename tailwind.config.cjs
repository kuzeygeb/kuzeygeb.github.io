/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        eu: {
          blue: '#0A4595',
          gold: '#FFCC00',
          darkblue: '#06285A',
          emerald: '#059669',
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        eu_theme: {
          "primary": "#0A4595",
          "primary-content": "#ffffff",
          "secondary": "#D9A700",
          "secondary-content": "#1a1000",
          "accent": "#059669",
          "accent-content": "#ffffff",
          "neutral": "#1e293b",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#e2e8f0",
          "base-content": "#0f172a",
          "info": "#0284c7",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
        eu_dark: {
          "primary": "#3b82f6",
          "primary-content": "#ffffff",
          "secondary": "#eab308",
          "secondary-content": "#0f172a",
          "accent": "#10b981",
          "accent-content": "#ffffff",
          "neutral": "#0f172a",
          "neutral-content": "#f8fafc",
          "base-100": "#0b132b",
          "base-200": "#1c2541",
          "base-300": "#3a506b",
          "base-content": "#f1f5f9",
          "info": "#38bdf8",
          "success": "#34d399",
          "warning": "#fbbf24",
          "error": "#f87171",
        }
      },
      "light",
      "dark",
    ],
    darkTheme: "eu_dark",
    logs: false,
  }
}
