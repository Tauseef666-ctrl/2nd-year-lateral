/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f7fb',
          100: '#e9edf5',
          200: '#d3dceb',
          300: '#b3c2da',
          400: '#8ba1c4',
          500: '#6c83ae',
          600: '#586c95',
          700: '#41527a',
          800: '#283552',
          900: '#1a2438',
          950: '#0f1524',
        },
        accent: {
          DEFAULT: '#2f6fed',
          50: '#eef4ff',
          100: '#dce6fd',
          200: '#b9ccfb',
          300: '#8dabf8',
          400: '#5f86f2',
          500: '#2f6fed',
          600: '#1f56d6',
          700: '#1a44ab',
          800: '#1a3a89',
          900: '#1c376e',
        },
        mint: {
          400: '#34d3b0',
          500: '#14b890',
          600: '#0b9a7a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Clash Display"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,.04), 0 8px 24px -12px rgba(16,24,40,.12)',
        cardHover: '0 2px 4px rgba(16,24,40,.05), 0 16px 32px -12px rgba(16,24,40,.18)',
        glow: '0 0 0 1px rgba(47,111,237,.08), 0 8px 30px -8px rgba(47,111,237,.35)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
      animation: {
        'fade-up': 'fadeUp .5s ease both',
        'fade-in': 'fadeIn .4s ease both',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.6' },
        },
      },
    },
  },
  plugins: [],
}