import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container, Box } from '@mui/material';
import styles from './SwiperReview.module.scss';
import ReviewItem from '../ReviewItem/ReviewItem';
import { searchReview } from '../../redux/slices/reviewsSlice';
import { scrollingWrapperStyles, cardStyles, scrollbarStyles, scrollbarTrackStyles, scrollbarThumbStyles } from './styles';

const SwiperReview = () => {
  const isMobile = useMediaQuery('(max-width: 491px)');
  const isTablet = useMediaQuery('(min-width: 491px) and (max-width: 691px)');
  const isLgTablet = useMediaQuery('(min-width: 691px)');
  const navigate = useNavigate();

  const reviews = useSelector((state) => state.reviews.reviews);
  const sortedReviews = reviews ? [...reviews].sort((a, b) => b.date - a.date) : null;
  const dispatch = useDispatch();
  const handleReviewClick = (item) => {
    navigate('/reviews');
    // eslint-disable-next-line no-underscore-dangle
    dispatch(searchReview(item._id));
  };

  return (
    <Container>
      <Box sx={{ pb: '150px' }}>
        <Box
          // sx={{
          //   ...scrollingWrapperStyles,
          //   '&::-webkit-scrollbar': scrollbarStyles,
          //   '&::-webkit-scrollbar-track': scrollbarTrackStyles,
          //   '&::-webkit-scrollbar-thumb': scrollbarThumbStyles,
          // }}
          className={styles.scrollingWrapper}
        >
          {sortedReviews.slice(0, 9).map((item, index) => (
            <Box
            // eslint-disable-next-line no-underscore-dangle
              key={item._id}
              // eslint-disable-next-line no-underscore-dangle
              data={item._id}
              className={styles.card}
              // sx={cardStyles}
              onClick={() => handleReviewClick(item)}
            >
              <ReviewItem review={item} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default SwiperReview;
