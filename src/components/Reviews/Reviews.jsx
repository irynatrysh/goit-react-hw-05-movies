import { getReviews } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Maindiv, NotResultsText, ReList, ReText } from './ReviewsStyled';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const fetchedReviews = await getReviews(movieId);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error('Error fetching reviews', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (!reviews) {
    return (
      <Maindiv>
        {isLoading && <Loader />}
        <NotResultsText>We are loading reviews for this movie</NotResultsText>
      </Maindiv>
    );
  }

  if (!reviews.results || reviews.results.length === 0) {
    return (
      <Maindiv>
        {isLoading && <Loader />}
        <NotResultsText>We don't have any reviews for this movie</NotResultsText>
      </Maindiv>
    );
  }

  return (
    <Maindiv>
      <ReList>
        {reviews.results.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{`Author: ${author}`}</h3>
            <ReText>{content}</ReText>
          </li>
        ))}
      </ReList>
    </Maindiv>
  );
};

export default Reviews;
