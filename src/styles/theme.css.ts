import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

const toTitleCase = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const vars = createGlobalThemeContract(
  {
    colors: {
      primary: null,
      secondary: null,
      background: null,
      surface: null,
      text: {
        primary: null,
        secondary: null,
      },
      border: null,
      error: null,
      success: null,
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
        primary: '#3B82F6',
        secondary: '#10B981',
        background: '#FFFFFF',
        surface: '#F3F4F6',
        text: {
          primary: '#1F2937',
          secondary: '#4B5563',
        },
        border: '#E5E7EB',
        error: '#EF4444',
        success: '#10B981',
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
        primary: '#60A5FA',
        secondary: '#34D399',
        background: '#111827',
        surface: '#1F2937',
        text: {
          primary: '#F9FAFB',
          secondary: '#D1D5DB',
        },
        border: '#374151',
        error: '#F87171',
        success: '#34D399',
      },
    },
    base,
  ),
);
