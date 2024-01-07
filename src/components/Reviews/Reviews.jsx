import { getReviews } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Maindiv, NotResultsText, ReList, ReText } from './ReviewsStyled';
import { Loader } from 'components/Loader/Loader';

const Review = (props) => {
  const { movieId } = props; 
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const getRevs = await getReviews(movieId);
        setReview(getRevs);
      } catch (error) {
        console.error('Error fetching reviews', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (!review) {
    return (
      <Maindiv>
        {isLoading && <Loader />}
        <NotResultsText>We are loading reviews for this movie</NotResultsText>
      </Maindiv>
    );
  }

  if (!review.results || review.results.length === 0) {
    return (
      <Maindiv>
        {isLoading && <Loader />}
        <NotResultsText>We don't have any reviews for this movie</NotResultsText>
      </Maindiv>
    );
  }

  return (
    <>
      <Maindiv>
        <ReList>
          {review.results.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{`Author: ${author}`}</h3>
              <ReText>{content}</ReText>
            </li>
          ))}
        </ReList>
      </Maindiv>
    </>
  );
};

export default Review;
