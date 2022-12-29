import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '../src/index.css';

const viewports = {
  sm: {
    name: 'sm',
    styles: {
      width: '414px',
      height: '1000px',
    },
  },
  xl: {
    name: 'xl',
    styles: {
      width: '1280px',
      height: '1000px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
  },
  viewport: {
    viewports: { ...viewports, ...INITIAL_VIEWPORTS },
  },
};
