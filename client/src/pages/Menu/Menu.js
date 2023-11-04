import React, { useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import RestaurantItem from '../../components/RestaurantItem/RestaurantItem';
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem';
import ListItemAction from '../../components/ListItems/ListItemAction';
import ListItems from '../../components/ListItems/ListItem';
import { setSearch } from '../../redux/slices/searchSlice';
import SectionSwipperFilterSearch from '../../components/SectionSwipper&Filter&Search/SectionSwipper&Filter&Search';
import { instance } from '../../API/instance';
import useAlert from '../../customHooks/useAlert';
import CustomAlert from '../../components/Alert/Alert';

const MenuPage = () => {
  const dispatch = useDispatch();
  const itemsFromSearch = useSelector((state) => state.search.search);
  const itemsFromFilter = useSelector((state) => state.filter.filter);
  const keyFromSearch = useSelector((state) => state.search.key);
  const products = useSelector((state) => state.products.products);

  const topPartners = useSelector((state) => state.partners.topPartners, shallowEqual);

  const productsAnchor = useSelector((state) => state.scrollAnchor.scrollAnchor);

  const { alert, handleShowAlert, handleCloseAlert } = useAlert();

  useEffect(() => {
    dispatch(setSearch([]));
  }, [dispatch]);

  // приклад запиту за продуктами, які відповідають пошуку
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await instance.post('/products/search', { query: 'cheese' });
  //       console.log(response);
  //     } catch (err) {
  //       console.error('Error getting searched products: ', err);
  //     }
  //   })();
  // }, []);

  return (
    <>
      <SectionSwipperFilterSearch />

      {keyFromSearch === 'restaurant' && itemsFromSearch.length !== 0 && (
        <ListItems
          title={`Search Restaurant (${itemsFromSearch.length})`}
          items={itemsFromSearch}
          itemComponent={RestaurantItem}
          actions={null}
          type="partners"
        />
      )}

      {keyFromSearch === 'food' && itemsFromSearch.length !== 0 ? (
        <ListItems
          title={`Search Results (${itemsFromSearch.length})`}
          items={itemsFromSearch}
          itemComponent={ProductCardItem}
          actions={null}
          type="food"
          pagination
          anchor={productsAnchor}
        />
      ) : itemsFromFilter.length !== 0 ? (
        <ListItems
          title={`Filter Results (${itemsFromFilter.length})`}
          items={itemsFromFilter}
          itemComponent={ProductCardItem}
          actions={null}
          type="food"
          pagination
          anchor={productsAnchor}
        />
      ) : (
        <ListItems
          title="All Dishes"
          items={products}
          itemComponent={ProductCardItem}
          actions={null}
          type="food"
          pagination
          anchor={productsAnchor}
        />
      )}

      {topPartners.length > 0 && (
        <ListItems
          title="Our Top Restaurants"
          items={topPartners}
          itemComponent={RestaurantItem}
          actions={<ListItemAction type="partners" />}
          type="partners"
        />
      ) }
      {/* { alert && <CustomAlert type="error" handleCloseAlert={handleCloseAlert} /> } */}
    </>
  );
};

export default MenuPage;
