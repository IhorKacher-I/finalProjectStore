import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container, Box, Typography } from '@mui/material';
import styles from './SwiperReview.module.scss';
import ReviewItem from '../ReviewItem/ReviewItem';
import { scrollingWrapperStyles, cardStyles, scrollbarStyles, scrollbarTrackStyles, scrollbarThumbStyles } from './styles';
import { instance } from '../../API/instance';
import useGetAPI from '../../customHooks/useGetAPI';

const SwiperReview = () => {
  const [lastReviewsData, loading, error] = useGetAPI('/comments/filter?startPage=1&perPage=9&sort=-date');

  // const [isFullCard, setIsFullCard] = useState(true);
  // const reviews = useSelector((state) => state.reviews.reviews);
  // const sortedReviews = reviews ? [...reviews].sort((a, b) => b.date - a.date) : null;

  const scrollingWrapperRef = useRef(null);
  const cardRef = useRef([]);

  useEffect(() => {
    const scrollingWrapper = scrollingWrapperRef.current;
    // console.log(cardRef);
    const scrollingWrapperRect = scrollingWrapper.getBoundingClientRect();
    const cardsRect = cardRef.current.map((item) => item.getBoundingClientRect());
    // console.log(scrollingWrapperRect);
    // console.log(cardsRect);
    cardsRect.forEach((item) => {
      if (scrollingWrapperRect.x === item.x) {
        // setIsFullCard(false);
      }
    });
  }, [scrollingWrapperRef, cardRef]);

  return (
    <Container component="section">
      <Typography variant="h2" component="h2" color="text.primary" sx={{ textAlign: 'center', mb: 2 }}>Customer Say</Typography>
      <Box sx={{ pb: '150px' }}>
        <Box
          // sx={{
          //   ...scrollingWrapperStyles,
          //   '&::-webkit-scrollbar': scrollbarStyles,
          //   '&::-webkit-scrollbar-track': scrollbarTrackStyles,
          //   '&::-webkit-scrollbar-thumb': scrollbarThumbStyles,
          // }}
          className={styles.scrollingWrapper}
          ref={scrollingWrapperRef}
        >
          {/* todo: render skeleton here! */}
          {/* {loading && <p>Loading...</p>} */}
          {lastReviewsData && lastReviewsData?.comments.map((item, index) => (
            <Box
            // eslint-disable-next-line no-underscore-dangle
              key={item._id}
              // eslint-disable-next-line no-underscore-dangle
              data={item._id}
              // eslint-disable-next-line
              ref={function (el) { cardRef.current[index] = el; }}
              className={styles.card}
              // sx={cardStyles}
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
