import Icon from '../../shared/Icons/Icon.jsx';

const ReviewInfo = ({ rating, reviews, location }) => {
  const totalReviews = reviews.length;

  return (
    <ul>
      <li>
        <Icon
          id="iicon-star-gold"
          width={16}
          height={16}
          ariaLabel="Star-gold"
        />
        <span>{`${rating} (${totalReviews} Reviews)`}</span>
      </li>
      <li>
        <Icon id="icon-map" width={16} height={16} ariaLabel="Map" />
        <span>{location}</span>
      </li>
    </ul>
  );
};

export default ReviewInfo;
