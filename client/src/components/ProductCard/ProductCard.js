import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ColorChips from '../Chip/Chip';
import LoginForm from '../forms/LoginForm/LoginForm';
import FavouriteIcon from '../FavouriteIcon/FavouriteIcon';
import { stylesButtonCard, stylesButtonCardOutline, stylesSectionCard, stylesHeaderTopCard, stylesHeaderInCard, stylesContentCard, stylesActionsCard, stylesPriceCard, stylesRatingCard, stylesLabelCard, stylesMediaCard } from './styles';
import { addToFavourites, deleteFromFavourites, setIsFavourite } from '../../redux/slices/favouriteSlice';
import { addToCart } from '../../redux/slices/cartSlice';
import { openModal, setContent } from '../../redux/slices/modalSlice';
import useGetAPI from '../../customHooks/useGetAPI';

const ProductCard = () => {
  const { itemNo } = useParams();
  const dispatch = useDispatch();
  const [dish, loading, error] = useGetAPI(`/products/${itemNo}`);

  const [ishovered, setIsHovered] = useState(false);
  const [isactive, setIsActive] = useState(false);

  const isUserAuthorized = useSelector((state) => state.authorization.isUserAuthorized);

  const {
    name,
    description,
    currentPrice,
    isTrending,
    rating,
    imageUrl,
    isSupreme,
    isHealthy,
    // eslint-disable-next-line no-underscore-dangle
    _id: id,
  } = dish || {};

  const isFavourite = useSelector((state) => state.favourites.cardStates[id]);
  const toggleFavourite = () => {
    dispatch(setIsFavourite(id));
    if (isFavourite) {
      dispatch(deleteFromFavourites({ id }));
    } else {
      dispatch(addToFavourites({ id }));
    }
  };
  const handleOpenModalLogin = () => {
    dispatch(openModal());
    dispatch(setContent(<LoginForm />));
  };

  const handleAddToCart = () => {
    const selectedItem = {
      product: {
        _id: id,
        currentPrice,
        imageUrl,
        name,
      },
      cartQuantity: 1,
    };
    dispatch(addToCart(selectedItem));
  };

  return (
    <Container
      component="section"
      sx={{
        bgcolor: 'background.default',
        mt: { mobile: 5, tablet: 8 },
      }}
    >
      <Card
        sx={stylesSectionCard}
      >
        <CardHeader
          variant="h5"
          component="h1"
          title={name}
          sx={stylesHeaderTopCard}
        />
        <Stack
          sx={stylesContentCard}
        >
          <CardMedia
            component="img"
            image={imageUrl}
            alt="lobster"
            sx={stylesMediaCard}
          />
          <Stack direction="column" sx={{ alignSelf: 'flex-start', width: '100%' }}>
            <CardHeader
              variant="h5"
              component="h3"
              title={name}
              sx={stylesHeaderInCard}
            />
            <Stack
              sx={stylesLabelCard}
            >
              <Box sx={{ my: 2, width: { lgTablet: '350px' } }}>
                <ColorChips
                  isTrending={isTrending}
                  isSupreme={isSupreme}
                  isHealthy={isHealthy}
                />
              </Box>
              <Stack
                direction="row"
                sx={stylesRatingCard}
              >
                <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>24min •</Typography>
                <Stack direction="row" spacing={1}>
                  <Rating
                    name="read-only"
                    value={rating ?? 0}
                    size="medium"
                    readOnly
                    sx={{ color: 'primary.main' }}
                  />
                  <Typography component="legend" variant="body1">{rating}</Typography>
                </Stack>
              </Stack>
            </Stack>
            <CardContent sx={{ p: 0, my: 3 }}>
              <Typography
                variant="description"
                component="p"
                sx={{ textAlign: 'justify' }}
              >
                {description}
              </Typography>
            </CardContent>
            <Box
              sx={stylesPriceCard}
            >
              <Typography
                variant="h3"
                sx={{ mb: 3, fontSize: { tablet: '22px', desktop: '30px' } }}
              >
                $
                {currentPrice}
              </Typography>
            </Box>
            <CardActions
              sx={stylesActionsCard}
            >
              <Box
                variant="outlined"
                sx={stylesButtonCardOutline}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseDown={() => setIsActive(true)}
                onMouseUp={() => setIsActive(false)}
                onClick={isUserAuthorized ? toggleFavourite : handleOpenModalLogin}
              >
                Favourite
                <FavouriteIcon id={id} sx={{ ml: 1 }} ishovered={ishovered} isactive={isactive} />
              </Box>
              <Button
                variant="contained"
                sx={stylesButtonCard}
                onClick={handleAddToCart}
              >
                Add to card
                <AddBoxOutlinedIcon
                  fontSize="medium"
                  sx={{ ml: 1 }}
                />
              </Button>
            </CardActions>
          </Stack>
        </Stack>
      </Card>
    </Container>
  );
};

export default ProductCard;
