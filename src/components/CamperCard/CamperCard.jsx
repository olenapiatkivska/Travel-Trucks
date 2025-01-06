import { useDispatch } from 'react-redux';
import Icon from '../../shared/Icons/Icon.jsx';
import CamperFeatures from '../CamperFeatures/CamperFeatures.jsx';
import { Link } from 'react-router-dom';
import ReviewInfo from '../ReviewInfo/ReviewInfo.jsx';

import css from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  // const dispatch = useDispatch();
  // const handleToggleFavorite = () => {
  //   dispatch(toggleFavorite(camper.id));
  // };

  return (
    <li>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        width={292}
        height={320}
      />
      <h2>{camper.name}</h2>
      <span>{`€${camper.price.toFixed(2)}`}</span>
      <Icon
        id="icon-heart-favorite"
        width={26}
        height={24}
        role="button"
        ariaLabel="Heart-favorite"
      />
      <ReviewInfo
        reviews={camper.reviews}
        rating={camper.rating}
        location={camper.location}
      />
      <p>{camper.description}</p>
      <CamperFeatures camper={camper} />

      <Link to={`/catalog/${camper.id}`}>
        <button type="button">Show more</button>
      </Link>
    </li>
  );
};

export default CamperCard;
