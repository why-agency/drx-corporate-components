const fontCalc = (maxFontSize, maxPageWidth) => {
  return `${((maxFontSize * 16) / maxPageWidth) * 100}vw`
}

const letterSpacingCalc = (maxLetterSpacing, maxPageWidth) => {
  return `${(maxLetterSpacing / maxPageWidth) * 100}vw`
}

const breakpoints = {
  xs: '330px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
  '3xl': '1536px',
  '4xl': '1920px',
  '5xl': '2400px'
}

module.exports = {
  content: ['./src/**/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: {
        DEFAULT: '#1E2728',
        inverse: '#fff'
      },
      secondary: {
        DEFAULT: '#0096A9',
        inverse: '#fff',
        hover: '#fff'
      },
      tertiary: {
        DEFAULT: '#8E8071',
        inverse: '#fff'
      },
      sand: {
        DEFAULT: '#F2F1EF',
        inverse: '#000'
      },
      black: '#000',
      white: '#fff',
      gray: {
        100: '#F5F5F5',
        300: '#E7E7E7',
        500: '#C8C8C8',
        700: '#767676',
        900: '#4B4B4B'
      },
      focus: '#6c9cde',
      error: '#d00f26',
      success: '#89d27d',
      transparent: 'transparent',
      gradient: '#1E2728'
    },
    fontFamily: {
      primary: 'Helvetica Now Display'
    },
    fontSize: {
      base: '1rem',
      h1: [
        `clamp(3.375rem, ${fontCalc(4.75, 1920)}, 4.75rem)`,
        {
          letterSpacing: `clamp(0.54px, ${letterSpacingCalc(
            0.76,
            1920
          )}, 0.76px)`
        }
      ],
      h2: [
        `clamp(2.75rem, ${fontCalc(3.875, 1920)}, 3.875rem)`,
        {
          letterSpacing: `clamp(0.44px, ${letterSpacingCalc(
            0.62,
            1920
          )}, 0.62px)`
        }
      ],
      h3: [
        `clamp(2rem, ${fontCalc(3, 1536)}, 3rem)`,
        {
          letterSpacing: `clamp(0.32px, ${letterSpacingCalc(
            0.48,
            1536
          )}, 0.48px)`
        }
      ],
      h4: [
        `clamp(1.5rem,${fontCalc(2, 1536)}, 2rem)`,
        {
          letterSpacing: `clamp(0.24px, ${letterSpacingCalc(
            0.32,
            1536
          )}, 0.32px)`
        }
      ],
      h5: [
        `clamp(1.25rem, ${fontCalc(1.875, 1536)}, 1.5rem)`,
        {
          letterSpacing: `clamp(0.2px, ${letterSpacingCalc(
            0.24,
            1536
          )}, 0.24px)`
        }
      ],
      'h5-regular': [
        `clamp(1.25rem, ${fontCalc(1.875, 1536)}, 1.5rem)`,
        {
          letterSpacing: `clamp(0.2px, ${letterSpacingCalc(
            0.24,
            1536
          )}, 0.24px)`
        }
      ],
      body1: [
        `clamp(1.125rem, ${fontCalc(1.25, 1920)}, 1.25rem)`,
        {
          lineHeight: '160%'
        }
      ],
      body2: [
        `clamp(1rem, ${fontCalc(1.0625, 1920)}, 1.0625rem)`,
        {
          lineHeight: '170%',
          letterSpacing: `0.16px`
        }
      ],
      body3: [
        '0.9375rem',
        {
          lineHeight: '160%',
          letterSpacing: '0.15px'
        }
      ],
      overline: [
        '0.75rem',
        {
          lineHeight: '160%',
          letterSpacing: '0.01em'
        }
      ],
      deco1: [
        `clamp(5rem, ${fontCalc(8.25, 1920)}, 8.25rem)`,
        {
          lineHeight: `110%`,
          letterSpacing: `clamp(0.8px, ${letterSpacingCalc(
            1.32,
            1920
          )}, 1.32px)`
        }
      ],
      deco2: [
        `clamp(4rem, ${fontCalc(6.5, 1920)}, 6.5rem)`,
        {
          lineHeight: `110%`,
          letterSpacing: `clamp(0.64px, ${letterSpacingCalc(
            1.04,
            1920
          )}, 1.04px)`
        }
      ],
      button: ['0.875rem', { lineHeight: '170%', letterSpacing: '0.56px' }]
    },
    screens: {
      ...breakpoints
    },
    extend: {
      backgroundImage: {
        gradient:
          'radial-gradient(84.32% 158.99% at 136.54% 106.02%, rgba(47, 190, 219, 0.3) 0%, rgba(30, 39, 40, 0.3) 100%)',
        'button-text': 'linear-gradient(to right, #0096A9 50% , #fff 50%)',
        'button-text-large':
          'linear-gradient(to right, #1E2728 50% , #fff 50%)',
        'button-text-reverse':
          'linear-gradient(to right, #fff 50% , #0096A9 50%)',
        'button-text-large-reverse':
          'linear-gradient(to right, #fff 50% , #1E2728 50%)',
        'button-text-tertiary':
          'linear-gradient(to right, #8E8071 50% , #fff 50%)',
        'button-background':
          'linear-gradient(to right, #fff 50% , #0096A9 50%)',
        'button-background-reverse':
          'linear-gradient(to right, #0096A9 50% , #fff 50%)',
        'button-background-large':
          'linear-gradient(to right, #F2F1EF 50% , #0096A9 50%)',
        'button-background-large-reverse':
          'linear-gradient(to right, #0096A9 50% , #F2F1EF 50%)',
        'button-background-tertiary':
          'linear-gradient(to right, #fff 50% , #8E8071 50%)'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
