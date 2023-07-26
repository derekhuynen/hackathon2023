import { ThemeOptions } from '@mui/material';

export const initialTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html, body, #root {
          height: 100%;
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
        `,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};
