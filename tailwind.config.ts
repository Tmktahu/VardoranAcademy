import colors from 'tailwindcss/colors';

import { useColors } from './src/lib/models/useColors';
const { generateBackgroundColors, generateColors } = useColors();

const pitchBlack = '#0D0D0D'; // almost black
const baseBackgroundColor = '#2a2319'; // warm dark sepia brown - aged paper dark

const basePrimaryColor = '#FF0000'; // bright red
const baseSecondaryColor = '#8B0000'; // dark red

const errorColor = '#8B4513'; // saddle brown - sepia error
const successColor = '#DAA520'; // goldenrod - sepia success
const infoColor = '#4a6741'; // olive - earthy archive green

const textPrimaryColor = '#E8E8E8'; // light gray
const textSecondaryColor = '#c9a86c'; // antique gold - aged ink/bronze

const destructiveColor = '#6b3a3a'; // dark brown-red - sepia destructive

const botanicalGreen = '#2F4F2F';
const alchemicalOrange = '#FF8C00';
const bloodRed = '#981c20';
const chaosPurple = '#800080';
const stormYellow = '#FFD700';
const astrologicalBlue = '#1E3A5F';

const primaryOverlayOpacity = 0.8;
const secondaryOverlayOpacity = 0.3;
// 981c20 = red
/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      slate: colors.slate,
      red: colors.red,
      primary: generateColors(pitchBlack, basePrimaryColor, primaryOverlayOpacity),
      secondary: generateColors(pitchBlack, baseSecondaryColor, secondaryOverlayOpacity),
      background: generateBackgroundColors(baseBackgroundColor),

      error: generateColors(pitchBlack, errorColor, primaryOverlayOpacity),
      success: generateColors(pitchBlack, successColor, primaryOverlayOpacity),
      info: generateColors(pitchBlack, infoColor, secondaryOverlayOpacity),
      destructive: generateColors(pitchBlack, destructiveColor, primaryOverlayOpacity),

      tprimary: generateColors(pitchBlack, textPrimaryColor, primaryOverlayOpacity),
      tsecondary: generateColors(pitchBlack, textSecondaryColor, primaryOverlayOpacity),

      botanicalGreen: generateColors(pitchBlack, botanicalGreen, 0.4),
      alchemicalOrange: generateColors(pitchBlack, alchemicalOrange, 0.4),
      bloodRed: generateColors(pitchBlack, bloodRed, 0.4),
      chaosPurple: generateColors(pitchBlack, chaosPurple, 0.4),
      stormYellow: generateColors(pitchBlack, stormYellow, 0.4),
      astrologicalBlue: generateColors(pitchBlack, astrologicalBlue, 0.4),

      zinc: colors.zinc,
      white: colors.white,
      black: colors.black,
      green: colors.green,
      orange: colors.orange,
      blue: colors.blue,
      sky: colors.sky,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      teal: colors.teal,
      yellow: colors.yellow,
    },
    extend: {
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        // ring: 'hsl(var(--ring) / <alpha-value>)',
        background: generateBackgroundColors(baseBackgroundColor),
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: generateColors(baseBackgroundColor, basePrimaryColor, primaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, basePrimaryColor, primaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, basePrimaryColor, primaryOverlayOpacity),
        },
        secondary: {
          DEFAULT: generateColors(baseBackgroundColor, baseSecondaryColor, secondaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, baseSecondaryColor, secondaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, baseSecondaryColor, secondaryOverlayOpacity),
        },

        error: {
          DEFAULT: generateColors(baseBackgroundColor, errorColor, primaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, errorColor, primaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, errorColor, primaryOverlayOpacity),
        },
        success: {
          DEFAULT: generateColors(baseBackgroundColor, successColor, primaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, successColor, primaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, successColor, primaryOverlayOpacity),
        },
        info: {
          DEFAULT: generateColors(baseBackgroundColor, infoColor, secondaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, infoColor, secondaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, infoColor, secondaryOverlayOpacity),
        },

        tprimary: {
          DEFAULT: generateColors(baseBackgroundColor, textPrimaryColor, primaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, textPrimaryColor, primaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, textPrimaryColor, primaryOverlayOpacity),
        },
        tsecondary: {
          DEFAULT: generateColors(baseBackgroundColor, textSecondaryColor, primaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, textSecondaryColor, primaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, textSecondaryColor, primaryOverlayOpacity),
        },

        botanicalGreen: {
          DEFAULT: botanicalGreen,
          foreground: generateColors(baseBackgroundColor, botanicalGreen, 0.4),
          ...generateColors(baseBackgroundColor, botanicalGreen, 0.7),
        },

        alchemicalOrange: {
          DEFAULT: alchemicalOrange,
          foreground: generateColors(baseBackgroundColor, alchemicalOrange, 0.4),
          ...generateColors(baseBackgroundColor, alchemicalOrange, 0.7),
        },

        bloodRed: {
          DEFAULT: bloodRed,
          foreground: generateColors(baseBackgroundColor, bloodRed, 0.4),
          ...generateColors(baseBackgroundColor, bloodRed, 0.7),
        },

        chaosPurple: {
          DEFAULT: chaosPurple,
          foreground: generateColors(baseBackgroundColor, chaosPurple, 0.4),
          ...generateColors(baseBackgroundColor, chaosPurple, 0.7),
        },

        stormYellow: {
          DEFAULT: stormYellow,
          foreground: generateColors(baseBackgroundColor, stormYellow, 0.4),
          ...generateColors(baseBackgroundColor, stormYellow, 0.7),
        },

        astrologicalBlue: {
          DEFAULT: astrologicalBlue,
          foreground: generateColors(baseBackgroundColor, astrologicalBlue, 0.4),
          ...generateColors(baseBackgroundColor, astrologicalBlue, 0.7),
        },

        destructive: {
          DEFAULT: generateColors(baseBackgroundColor, destructiveColor, primaryOverlayOpacity)[0],
          foreground: generateColors(baseBackgroundColor, destructiveColor, primaryOverlayOpacity),
          ...generateColors(baseBackgroundColor, destructiveColor, primaryOverlayOpacity),
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  safelist: ['logo-button', 'dark', 'neutral', 'light', 'nav-button'],
  plugins: [
    function ({ addBase, theme }: any) {
      function extractColorVars(colorObj: any, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars: any = typeof value === 'string' ? { [`--color${colorGroup}-${colorKey}`]: value } : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
    function ({ addComponents, theme }: any) {
      const colors = theme('colors');
      const buttonClasses: Record<string, any> = {};

      Object.keys(colors).forEach((color) => {
        buttonClasses[`button.${color}`] = {
          color: `var(--color-${color}-500)`,
        };
        buttonClasses[`button.${color}:hover`] = {
          color: `var(--color-background-900)`,
          backgroundColor: `var(--color-${color}-500)`,
        };
      });

      addComponents(buttonClasses);
    },
    function ({ addVariant }) {
      addVariant('max-md', '@media (max-width: 768px)');
    },
  ],
};

export default config;
