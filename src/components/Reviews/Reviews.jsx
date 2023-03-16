import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetReviewsData } from 'Service/GetMovies';
import { Item, List } from './Reviews.styled';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const response = await GetReviewsData(movieId);
        setReview(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      {review.length !== 0 ? (
        <List>
          {review.map(({ id, author, content }) => {
            return (
              <Item key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </Item>
            );
          })}
        </List>
      ) : (
        <p>No comments yet</p>
      )}
    </>
  );
};

export default Reviews;
