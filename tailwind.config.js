/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        devil: {
          950: '#060608',
          900: '#0B0B0F',
          850: '#111117',
          800: '#171720',
          700: '#22222E',
          600: '#333344',
          red: {
            DEFAULT: '#E50914',
            light: '#FF2E3B',
            dark: '#B00710',
            glow: 'rgba(229, 9, 20, 0.4)',
          },
          silver: {
            DEFAULT: '#C0C0C8',
            light: '#E8E8EE',
            dark: '#82828E',
          },
          gold: '#D4AF37',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Syne"', 'sans-serif'],
        accent: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(229, 9, 20, 0.15), transparent 70%)',
        'carbon-pattern': 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)',
      },
      boxShadow: {
        'devil-glow': '0 0 25px rgba(229, 9, 20, 0.35)',
        'devil-glow-lg': '0 0 50px rgba(229, 9, 20, 0.5)',
        'card-gloss': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1), 0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
