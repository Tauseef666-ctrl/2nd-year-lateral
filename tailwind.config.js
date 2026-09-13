/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7f4',
          100: '#e9ebe4',
          200: '#d6d9ce',
          300: '#b4b8ab',
          400: '#91968a',
          500: '#757a6f',
          600: '#5b6057',
          700: '#474b43',
          800: '#33362f',
          900: '#232520',
          950: '#161814',
        },
        accent: {
          DEFAULT: '#0d9488',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        mint: {
          300: '#f3dcae',
          400: '#eac98b',
          500: '#dfb164',
          600: '#c1913f',
          700: '#976f25',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Clash Display"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,118,110,.06), 0 8px 24px -12px rgba(13,148,136,.16)',
        cardHover: '0 2px 4px rgba(15,118,110,.08), 0 16px 32px -12px rgba(13,148,136,.24)',
        glow: '0 0 0 1px rgba(13,148,136,.12), 0 8px 30px -8px rgba(13,148,136,.38)',
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