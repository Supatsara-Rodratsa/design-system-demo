import { defineCustomElements } from '../loader/index.d.ts';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on.*|clicked' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
