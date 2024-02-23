/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      default: ['DM Sans', 'ui-sans-serif', 'system-ui']
    },
    colors: {
      primary: '#4A3AFF',
      'primary-2': 'rgba(74,58,255,0.5)',
      secondary: '#F3F1FF',
      'neutral-800': '#170F49',
      'neutral-700': '#514F6E',
      'neutral-600': '#6F6C90',
      'neutral-500': '#A0A3BD',
      'neutral-400': '#D9DBE9',
      'neutral-300': '#EFF0F6',
      'neutral-200': '#F7F7FB',
      'neutral-100': '#FFFFFF',
    },
    fontSize: {
      'size-1': [
        "50px", {
          // lineHeight: '62',
          fontWeight: '700'
        }
      ],
      'size-2': [
        "34px", {
          // lineHeight: '46',
          fontWeight: '700'
        }
      ],
      'size-3': [
        "24px", {
          // lineHeight: '35',
          fontWeight: '700'
        }
      ],
      'size-4': [
        "22px", {
          // lineHeight: '28',
          fontWeight: '500'
        }
      ],
      'size-5': [
        "18px", {
          // lineHeight: '18',
          fontWeight: '700'
        }
      ],
      'size-6': [
        "16px", {
          // lineHeight: '22',
          fontWeight: '700'
        }
      ],
      'size-7': [
        "14px", {
          // lineHeight: '22',
          fontWeight: '400'
        }],
      large: [
        "24px", {
          // lineHeight: '38',
          fontWeight: '400'
        }
      ],
      default: [
        "18px", {
          // lineHeight: '30',
          fontWeight: '400'
        }
      ],
      small: [
        "15px", {
          // lineHeight: '24',
          fontWeight: '400'
        }
      ]
    },
    extend: {
      borderRadius: {
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}

