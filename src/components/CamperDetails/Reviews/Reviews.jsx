import Icon from '../../../shared/Icons/Icon.jsx';
import css from './Reviews.module.css';

const Reviews = ({ camper }) => {
  const ratingMax = 5;

  if (!camper || !camper.reviews) {
    return <p>No reviews available</p>;
  }

  return (
    <article className={css.reviewsArticle}>
      <ul className={css.reviewsList}>
        {camper.reviews.map((item, index) => (
          <li key={index + item.reviewer_name} className={css.reviewsItem}>
            <div className={css.reviewsWrapp}>
              <h3 className={css.reviewsLetter}>{item.reviewer_name[0]}</h3>
              <div className={css.reviewsContent}>
                <p className={css.reviewsName}>{item.reviewer_name}</p>
                <div>
                  {Array.from({ length: ratingMax }, (_, index) => (
                    <span key={index}>
                      <Icon
                        className={
                          index < item.reviewer_rating
                            ? css.starFilled
                            : css.starEmpty
                        }
                        id="icon-star-gray"
                        width={16}
                        height={16}
                        ariaLabel="Star-gray"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className={css.reviewsComment}>{item.comment}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Reviews;
