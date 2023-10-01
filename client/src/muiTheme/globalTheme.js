import { createTheme } from '@mui/material/styles';

const globalTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 481,
      lgTablet: 690,
      desktop: 993,
    },
  },
  palette: {
    primary: {
      main: '#6C5FBC',
      hover: '#664FFF',
    },
    secondary: {
      main: '#FF9140',
      hover: '#FF7C1C',
    },
    text: {
      primary: '#2B2B2B',
      secondary: '#676767',
      primaryLight: '#F9F9F9',
      secondaryLight: '#DBD9EE',
      header: '#606060',
      healthy: '#DAA31A',
      trending: '#FB471D',
      supreme: '#0b4c25',
    },
    background: {
      paper: '#FFF',
      default: '#F9F9F9',
      footer: '#EAEAEA',
      healthy: '#F7EDD0',
      trending: '#F7C5BA',
      supreme: '#33AC64',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontPoppins: 'Poppins, sans-serif',
    fontWeightSemiBold: 600,
  },
  button: {
    large: {
      height: '76px',
    },
    medium: {
      height: '60px',
    },
    small: {
      height: '46px',
    },
    extraSmall: {
      height: '35px',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#6C5FBC',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fieldset: {
            border: '1px solid #6C5FBC',
          },
          input: {
            '&::placeholder': {
              color: '#2B2B2B',
              opacity: '0.8',
            },
          },
          textarea: {
            '&::placeholder': {
              color: '#2B2B2B',
              opacity: '0.8',
            },
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up('mobile')]: {
            paddingRight: '30px',
            paddingLeft: '30px',
          },
          [theme.breakpoints.up('tablet')]: {
            paddingRight: '65px',
            paddingLeft: '65px',
          },
          [theme.breakpoints.up('desktop')]: {
            paddingRight: '90px',
            paddingLeft: '90px',
          },
          maxWidth: '1426px',
          minWidth: '320px',
        }),
      },
    },
  },
});

globalTheme.typography.body1 = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: 400,
  lineHeight: '1.5em',
  fontSize: '13px',
  [globalTheme.breakpoints.up('tablet')]: {
    fontSize: '14px',
  },
  [globalTheme.breakpoints.up('desktop')]: {
    fontSize: '16px',
  },
};

globalTheme.typography.h1 = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  lineHeight: '1.5em',
  fontSize: '43px',
  [globalTheme.breakpoints.up('tablet')]: {
    fontSize: '46px',
  },
  [globalTheme.breakpoints.up('desktop')]: {
    fontSize: '52px',
  },
};

globalTheme.typography.h2 = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  lineHeight: '1.5em',
  fontSize: '28px',
  [globalTheme.breakpoints.up('tablet')]: {
    fontSize: '36px',
  },
  [globalTheme.breakpoints.up('desktop')]: {
    fontSize: '48px',
  },
};

globalTheme.typography.h3 = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 600,
  lineHeight: '1.5em',
  fontSize: '14px',
  [globalTheme.breakpoints.up('tablet')]: {
    fontSize: '16px',
  },
  [globalTheme.breakpoints.up('desktop')]: {
    fontSize: '24px',
  },
};

globalTheme.typography.h4 = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: 600,
  lineHeight: '1.5em',
  fontSize: '14px',
  [globalTheme.breakpoints.up('tablet')]: {
    fontSize: '18px',
  },
};

globalTheme.typography.h6 = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: 600,
  lineHeight: '1.5em',
  fontSize: '14px',
  [globalTheme.breakpoints.up('tablet')]: {
    fontSize: '18px',
  },
};

globalTheme.typography.subtitle1 = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: 400,
  lineHeight: '1.5em',
  fontSize: '14px',
  [globalTheme.breakpoints.up('tablet')]: {
    fontSize: '16px',
  },
};

globalTheme.typography.button = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: 500,
  lineHeight: '1.5em',
  fontSize: '16px',
  [globalTheme.breakpoints.up('tablet')]: {
    fontSize: '24px',
  },
};

export default globalTheme;
