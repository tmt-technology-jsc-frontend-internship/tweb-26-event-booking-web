const defaultColors = require("tailwindcss/colors");
const COLORS = {
  success: {
    100: "#0D201C",
    200: "#123121",
    300: "#19552B",
    400: "#24913E",
    500: "#43A951",
  },
  info: {
    100: "#0B1C30",
    200: "#09284C",
    300: "#1A4B7F",
    400: "#277FDC",
    500: "#4292E2",
  },
  warning: { 
    100: "#2C2614",
    200: "#483A18",
    300: "#7A6528",
    400: "#DBAF37",
    500: "#E2BA4C",
  },
  error: { 
    100: "#290E19",
    200: "#430D1B",
    300: "#731A2D",
    400: "#C9334C",
    500: "#DF4A61",
  },
  primary: {
    1: '#705BFA',
    2: '#6451DF',
    3: '#5646C1',
    4: '#46399E',
    5: '#32286F',
  },
  secondary: {
    1: '#FC28FC',
    2: '#E123E1',
    3: '#C31EC3',
    4: '#9F199F',
    5: '#701170',
  },
  tertiary: {
    1: '#0085A4',
    2: '#006982',
    3: '#005367',
    4: '#003D4C',
    5: '#002129',
  }, 
  'neutral-1': {
    900: '#F0F6FC',
    800: '#DCE4EC',
    700: '#C8D1D9',
    600: '#B1BAC4',
    500: '#394A6D',
    400: '#A1B1C2',
    300: '#484F58',
    200: '#30363D',
    100: '#21262D',
    50: '#161B22'
  },
  'neutral-2': {
    300: '#DAE0E6',
    200: '#30363D',
    100: '#1E2328',
    50: '#14181C',
  },
  'neutral-3': {
    500: '#484F58',
    400: '#30363D',
    300: '#21262D',
    200: '#161B22',
    100: '#0D1116',
    50: '#02040A'
  },
  gradient: {
    1: {
      start: "#4124FB",
      // mid:'',
      end: "#7F25FB",
    },
    2: {
      start: "#EA0004",
      // mid:'',
      end: "#FBD424",
    },
  },
  'background': '#121212',
  'background-card': '#1A1A1A',
}

function genarateColorTDS() {
  var colors = [];
  for (const colorName in COLORS) {
    for (const colorOpacity in COLORS[colorName]) {
      colors.push(`${colorName}-${colorOpacity}`);
    }
  }
  if (COLORTAIWIND.length > 0) {
    for (let index = 0; index < COLORTAIWIND.length; index++) {
      const colorName = COLORTAIWIND[index];
      if (defaultColors[colorName])
        for (const colorOpacity in defaultColors[colorName]) {
          colors.push(`${colorName}-${colorOpacity}`);
        }
    }
  }
  var prefixs = [
    "ring",
    "bg",
    "border",
    "text",
    "focus:bg",
    "focus:border",
    "hover:border",
    "hover:bg",
    "disabled:bg",
    "disabled:border",
    "dark:bg",
    "dark:text",
    "dark:border",
    "dark:group-hover:text",
    "dark:hover:bg",
    "dark:hover:text",
  ];

  var result = [];
  for (let index = 0; index < prefixs.length; index++) {
    const prefix = prefixs[index];
    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      const color = colors[colorIndex];
      result.push(prefix + "-" + color);
    }
  }

  return result;
}

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  important: false,
  theme: {
    extend: {
      colors: {
        ...COLORS
      },
      ringColor: {
        ...COLORS,
      },
      borderColor: {
        ...COLORS,
      },
      placeholderColor: {
        ...COLORS,
      },
      fontSize: {
          'heading-1': ['42px', '48px'],
          'heading-2': ['48px', 'auto'],
          'heading-3': ['54px', '64px'],
          'heading-4': ['64px', '48px'],
          'heading-5': ['42px', '48px'],
          
          'title-1': ['14px', {
            lineHeight: '18px',
            letterSpacing: '16px',
          }], 
          'title-2': ['16px', '22px'],
          'title-3': ['20px', '26px'],
          'title-4': ['20px', '26px'],
          'title-5': ['24px', '40px'],
          'title-6': ['32px', '40px'],

          'body-1': ['14px', {
            lineHeight: '18px',
            letterSpacing: '16%',
          }], 
          'body-2': ['16px', '22px'],
          'body-3': ['16px', '24px'],

          'button-bold': ['16px', '20px'],

          'caption-1': ['12px', {
            lineHeight: '16px',
            letterSpacing: '0.32px',
          }],
          'caption-2': ['14px', '20px'], 

      },
      fontFamily: {
        'utm': ['UTM Avo', 'sans-serif'],
        'vl': ['VL Proxima_Nova', 'sans-serif']
      },
      backgroundImage: {
        'gradient-170': 'linear-gradient(170deg, var(--tw-gradient-stops))',
        'gradient-138': 'linear-gradient(138deg, var(--tw-gradient-stops))',
        'gradient-180': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        'gradient-360': 'linear-gradient(360deg, var(--tw-gradient-stops))',
        'gradient-318': 'linear-gradient(318deg, var(--tw-gradient-stops))',
        'gradient-m-170': 'linear-gradient(-170deg, var(--tw-gradient-stops))',
        'gradient-10': 'linear-gradient(10deg, var(--tw-gradient-stops))',
        'gradient-m-10': 'linear-gradient(-10deg, var(--tw-gradient-stops))',
        'r-gradient': 'radial-gradient(var(--tw-gradient-stops))',

        'line': 'linear-gradient(270deg, rgba(190, 66, 201, 0.50) 0%, rgba(0, 188, 255, 0.00) 100%)',
        'line-2': 'linear-gradient(270deg, rgba(109, 66, 201, 0.50) 0%, rgba(0, 56, 255, 0.00) 100%)',
        'line-3': 'linear-gradient(90deg, #0F0B30 0%, #746CFF 34.00%, #746CFF 78.92%, #141036 100%)',
        'line-4': 'linear-gradient(90deg, #0F0B30 0%, #746CFF 0.01%, #746CFF 36.98%, #141036 78.33%)',

        'footer-line': 'linear-gradient(270deg, rgba(143, 0, 255, 0.00) 0%, rgba(66, 71, 201, 0.50) 100%)',
        'ticket-info': "url('/src/img/home/bg-high-main.png')",
        'contact': "url('/src/img/home/cool-triangle.png')",
        'arrow-down': "url('/src/img/header-footer/arrow-down.svg')",
        'arrow-right': "url('/src/img/header-footer/arrow-right-line.svg')",
        'chevron-next': "url('/src/img/header-footer/chevron-next.svg')",
        'facebook-fill': "url('/src/img/header-footer/facebook-fill.svg')",
        'mail-fill': "url('/src/img/header-footer/mail-fill.svg')",
        'twitter-fill': "url('/src/img/header-footer/twitter-fill.svg')",
        'blog-banner': "url('/src/img/home/hokong-gallery.png')",
      },
      animation: {
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionDelay: {
        '250': '250ms',
      },
      dropShadow: {
      },
      boxShadow: {
        'thumbnail': '0px 0px 30px 0px rgba(249, 249, 249, 0.25)',
      },
      aspectRatio: {
        'hero-banner': '1920 / 864',
        'blog-banner': '1920 / 1080',
        'thumbnail': '3 / 2',  
        'blog': '3 / 2',  
        'dj-form-inner': '431 / 357',
        'dj-form': '431 / 331',
        '5/4': '5 / 4',
        'event-detail-mobile': '342 / 354',
        'event-detail-tablet': '423 / 429',
        'event-detail-desktop': '531 / 568',
      },
      screens: {
        'md': '834px',
      },
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [
  //   require('@tailwindcss/line-clamp'),
    
  // ],
};