import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mobile-hero': 'url(/images/bg-hero-mobile.webp)'
      },
      colors: {
        main: {
          100: '#5E8F46',
          200: '#226440'
        },
        'light-brand': '#F3F0F0',
        brand: '#252525',
        'layout-color': '#F3F0F0',
        'light-dark': '#4D4D4D'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in'
      },
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.23, 1, 0.32, 1)'
      },
      transitionDuration: {
        '400ms': '400ms'
      }
    }
  },
  plugins: []
}
export default config
