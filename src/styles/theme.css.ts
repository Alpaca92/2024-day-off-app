import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

const toTitleCase = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const vars = createGlobalThemeContract(
  {
    colors: {
      primary: {
        main: null,
        light: null,
        dark: null,
        contrastText: null,
      },
      secondary: {
        main: null,
        light: null,
        dark: null,
        contrastText: null,
      },
      background: {
        default: null,
        paper: null,
        modal: null,
      },
      text: {
        primary: null,
        secondary: null,
        disabled: null,
      },
      input: {
        background: null,
        border: null,
        focusBorder: null,
      },
      button: {
        primary: {
          background: null,
          text: null,
          hover: null,
          active: null,
        },
        secondary: {
          background: null,
          text: null,
          hover: null,
          active: null,
        },
      },
      border: {
        default: null,
        light: null,
      },
      error: {
        main: null,
        light: null,
        dark: null,
        contrastText: null,
      },
      warning: {
        main: null,
        light: null,
        dark: null,
        contrastText: null,
      },
      success: {
        main: null,
        light: null,
        dark: null,
        contrastText: null,
      },
      info: {
        main: null,
        light: null,
        dark: null,
        contrastText: null,
      },
    },
    spaces: {
      small: null,
      medium: null,
      large: null,
    },
    fontSizes: {
      small: null,
      medium: null,
      large: null,
    },
    borderRadius: {
      default: null,
      half: null,
    },
  },
  (_, path) => `Global-${path.map(toTitleCase).join('')}`,
);

const base = {
  spaces: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  fontSizes: {
    small: '14px',
    medium: '16px',
    large: '20px',
  },
  borderRadius: {
    default: '6px',
    half: '50%',
  },
};

createGlobalTheme(
  'body[data-theme="light"]',
  vars,
  Object.assign(
    {
      colors: {
        primary: {
          main: '#1877f2',
          light: '#4293ff',
          dark: '#0d5cbf',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#42b72a',
          light: '#66c94e',
          dark: '#2e8017',
          contrastText: '#ffffff',
        },
        background: {
          default: '#f0f2f5',
          paper: '#ffffff',
          modal: 'rgba(128, 128, 128, 0.65)',
        },
        text: {
          primary: '#1c1e21',
          secondary: '#606770',
          disabled: '#8d949e',
        },
        input: {
          background: '#ffffff',
          border: '#dddfe2',
          focusBorder: '#1877f2',
        },
        button: {
          primary: {
            background: '#1877f2',
            text: '#ffffff',
            hover: '#166fe5',
            active: '#0d5cbf',
          },
          secondary: {
            background: '#42b72a',
            text: '#ffffff',
            hover: '#36a420',
            active: '#2e8017',
          },
        },
        border: {
          default: '#e4e6eb',
          light: '#f0f2f5',
        },
        error: {
          main: '#ed4956',
          light: '#ff6b6b',
          dark: '#c4302b',
          contrastText: '#ffffff',
        },
        warning: {
          main: '#ffba00',
          light: '#ffd54f',
          dark: '#f57c00',
          contrastText: '#000000',
        },
        success: {
          main: '#42b72a',
          light: '#66c94e',
          dark: '#2e8017',
          contrastText: '#ffffff',
        },
        info: {
          main: '#0099ff',
          light: '#33b5ff',
          dark: '#006bb3',
          contrastText: '#ffffff',
        },
      },
    },
    base,
  ),
);

createGlobalTheme(
  'body[data-theme="dark"]',
  vars,
  Object.assign(
    {
      colors: {
        primary: {
          main: '#4267B2',
          light: '#6d87c8',
          dark: '#2d4373',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#30A020',
          light: '#4caf50',
          dark: '#1b5e20',
          contrastText: '#ffffff',
        },
        background: {
          default: '#18191A',
          paper: '#242526',
          modal: 'rgba(128, 128, 128, 0.65)',
        },
        text: {
          primary: '#E4E6EB',
          secondary: '#B0B3B8',
          disabled: '#6c6f73',
        },
        input: {
          background: '#3A3B3C',
          border: '#4E4F50',
          focusBorder: '#4267B2',
        },
        button: {
          primary: {
            background: '#4267B2',
            text: '#ffffff',
            hover: '#365899',
            active: '#29487d',
          },
          secondary: {
            background: '#30A020',
            text: '#ffffff',
            hover: '#2b8a1c',
            active: '#236b15',
          },
        },
        border: {
          default: '#2F3031',
          light: '#3E4042',
        },
        error: {
          main: '#F02849',
          light: '#ff4d6d',
          dark: '#b71c1c',
          contrastText: '#ffffff',
        },
        warning: {
          main: '#F5A623',
          light: '#ffc107',
          dark: '#ff8f00',
          contrastText: '#000000',
        },
        success: {
          main: '#30A020',
          light: '#4caf50',
          dark: '#1b5e20',
          contrastText: '#ffffff',
        },
        info: {
          main: '#1877F2',
          light: '#42a5f5',
          dark: '#1565c0',
          contrastText: '#ffffff',
        },
      },
    },
    base,
  ),
);
