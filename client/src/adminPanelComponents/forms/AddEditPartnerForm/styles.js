import { btnStyles } from '../../../muiTheme/buttonsStyles';

export const mainTitle = {
  fontSize: {
    mobile: '26px',
    tablet: '28px',
    desktop: '36px',
  },
  mb: {
    mobile: '38px',
    tablet: '34px',
    desktop: '27px',
  },
  color: 'text.primary',
  textAlign: 'center',
  fontWeight: {
    mobile: 'fontWeightSemiBold',
    desktop: 'fontWeightMedium',
  },
};

export const infoWrapper = {
  display: 'flex',
  flexDirection: {
    mobile: 'column',
    desktop: 'row',
  },
  gap: {
    mobile: '35px',
    desktop: '3%',
  },
};

export const cardImgWrapper = {
  position: 'relative',
  width: '100%',
  borderRadius: '16px',
  overflow: 'hidden',
};

export const partnerCardImg = {
  border: '1px solid',
  borderColor: 'common.dark',
  minHeight: '250px',
  minWidth: '250px',
  maxHeight: {
    tablet: '300px',
    lgTablet: '350px',
    desktop: '400px',
  },
  width: '100%',
  borderRadius: '16px',
};

export const dishCardImg = {
  width: '100%',
  maxWidth: {
    lgTablet: '75%',
    desktop: '100%',
  },
  m: '0 auto',
  borderRadius: '16px',
};

export const editIconBtn = {
  position: 'absolute',
  top: '15px',
  right: '15px',
  bgcolor: 'background.footer',
  '&:hover': {
    bgcolor: 'background.iconHover',
  },
};

export const formWrapper = {
  p: '0px',
  width: '100%',
  minWidth: {
    lgTablet: '300px',
  },
};

export const inputsWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: {
    mobile: '20px;',
    tablet: '30px',
    desktop: '30px',
  },
  mb: {
    mobile: '10px;',
    tablet: '9px',
    desktop: '24px',
  },
  width: '100%',
};

export const input = {
  fontWeight: 'fontWeightMedium',
};

export const btnsWrapper = {
  mt: {
    mobile: '20px',
    desktop: '10px',
  },
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '13%',
};

export const btn = {
  p: '10px 16px',
  width: '100%',
  maxWidth: '190px',
};

export const badge = {
  width: '100%',
  pr: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  '& .MuiFormControlLabel-label.Mui-disabled': {
    color: 'rgba(43, 43, 43, 1);',
  },
  '& .Mui-disabled': {
    color: 'rgba(0, 0, 0, 0.4);',
  },
  '& .MuiTypography-root': {
    fontSize: '18px',
    fontWeight: 'fontWeightMedium',
  },
};
