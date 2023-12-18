import React, { memo } from 'react';
import { Container, Typography } from '@mui/material';
import {
  mainContainer,
  mainTitle,
} from '../commonStyles';
import ItemsEditor from '../../ItemsEditor/ItemsEditor';

const AddDishPage = () => {
  return (
    <Container sx={mainContainer}>
      <Typography variant="h2" component="h1" sx={mainTitle}>
        New Dish
      </Typography>

    </Container>
  );
};

export default memo(AddDishPage);
