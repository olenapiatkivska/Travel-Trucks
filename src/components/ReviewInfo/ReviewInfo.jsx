import Icon from '../../shared/Icons/Icon.jsx';
import css from './ReviewInfo.module.css';

const ReviewInfo = ({ rating, reviews, location }) => {
  const totalReviews = reviews.length;

  return (
    <ul className={css.listReviewInfo}>
      <li className={css.itemReviewInfo}>
        <Icon
          id="icon-star-gold"
          width={16}
          height={16}
          ariaLabel="Star-gold"
        />
        <span
          className={css.ratingReviewInfo}
        >{`${rating} (${totalReviews} Reviews)`}</span>
      </li>

      <li className={css.itemReviewInfo}>
        <Icon id="icon-map" width={16} height={16} ariaLabel="Map" />
        <span className={css.locationReviewInfo}>{location}</span>
      </li>
    </ul>
  );
};

export default ReviewInfo;
