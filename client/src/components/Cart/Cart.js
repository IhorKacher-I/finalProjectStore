import React, { useEffect } from 'react';
import {
  Typography,
  Container,
  Box,
  Button,
} from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  mainBox,
  title,
  cartProductsContainer,
  continueShoppingBtn,
  priceAndContBtnWrapper,
  textAndPriceWrapper,
  deliveryTypography,
  freeTypography,
  priceWrapper,
  price,
  continueBtn,
} from './styles';
import ProductCartItem from '../ProductCartItem/ProductCartItem';
import createCart from './cartFunctions';
import { instance } from '../../API/instance';
import { getCartItemsFromServer, sendCartToServer, setCart } from '../../redux/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.cart.products, shallowEqual);
  const userIsHasCart = useSelector((state) => state.cart.isCart);
  const isUserAuthorization = useSelector((state) => state.authorization.isUserAuthorized);
  // console.log(cartProducts);
  // console.log(userIsHasCart);
  // console.log(isUserAuthorization);
  const getProductsFromDB = async () => {
    try {
      const { data } = await instance.get('http://localhost:4000/api/cart');
      console.log(data);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    // getProductsFromDB();
    dispatch(getCartItemsFromServer());
    // createCart(cartProducts);
  }, [dispatch]);

  const totalSum = 24.55;

  const continueFn = () => {
    if (isUserAuthorization) {
      if (userIsHasCart) {
        console.log('We didn\'t create cart');
      } else {
        console.log('We must create cart');
        createCart(cartProducts);
      }
    } else {
      navigate('/personalInformation');
    }
    console.log('Continue');
  };

  return (
    <Container>
      <Box
        sx={mainBox}
      >
        <Typography
          variant="h2"
          sx={title}
        >
          Order
        </Typography>
        <Box
          sx={cartProductsContainer}
        >
          {cartProducts.map((product) => (
            <ProductCartItem key={product.id} {...product} />
          ))}
        </Box>
        <Button
          LinkComponent={NavLink}
          to="/menu"
          variant="outlined"
          sx={continueShoppingBtn}
        >
          Continue shopping
        </Button>
        <Box
          sx={priceAndContBtnWrapper}
        >
          <Box
            sx={textAndPriceWrapper}
          >
            <Typography
              component="p"
              sx={deliveryTypography}
            >
              Delivery
            </Typography>
            <Typography
              component="p"
              sx={freeTypography}
            >
              Free
            </Typography>
            <Box
              sx={priceWrapper}
            >
              <Typography
                component="p"
                sx={price}
              >
                $
                {totalSum}
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            onClick={continueFn}
            sx={continueBtn}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
