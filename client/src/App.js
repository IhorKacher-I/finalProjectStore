import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import axios from 'axios';
import AppRoutes from './AppRoutes';
import Modal from './components/Modal/Modal';
import ScrollTop from './components/ScrollTop/ScrollTop';
import { getProducts } from './redux/slices/productsSlice';
import { setAuthorization } from './redux/slices/authorizationSlice';
import { setUser } from './redux/slices/userSlice';
import { fetchRestaurant } from './redux/slices/restaurantSlice';

const App = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurant());
    // todo: LS eslint

    // eslint-disable-next-line no-undef
    const token = localStorage.getItem('token');
    // eslint-disable-next-line no-undef
    const user = JSON.parse(localStorage.getItem('user'));
    if (token) {
      dispatch(setAuthorization(true));
      dispatch(setUser(user));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Modal disagree="Close" />
      <AppRoutes />
      <ScrollTop />
    </>
  );
};

export default App;
