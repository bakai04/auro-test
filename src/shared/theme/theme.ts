import { createTheme } from './stitchesConfig';

export { theme as defaultTheme } from './stitchesConfig';

export const darkTheme = createTheme('dark-theme', {
  colors: {
    greenBase: '#33D964',
    greenLight: '#29E3AB3B',

    grayBase: '#757E96',
    gray500: '#999AB8',

    blackBase: '#191A27',
    blueBase: '#4A9DFB',
    orangeBase: '#F5C923',
    redBase: '#E23636',
    zincBase: '#383856',

    background: '#F8F8F9EB',
  },
});
