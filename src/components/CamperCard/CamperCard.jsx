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
    <li className={css.wrappCamperCard}>
      <img
        className={css.imgCamperCard}
        src={camper.gallery[0].thumb}
        alt={camper.name}
        width={292}
        height={320}
      />

      <div className={css.descriptionCamperCard}>
        <div className={css.mainTitleCamperCard}>
          <div className={css.mainTitleCamperCardWrapp}>
            <h2 className={css.titleCamperCard}>{camper.name}</h2>
            <div className={css.favoriteCamperCard}>
              <span className={css.priceCamperCard}>{`€${camper.price.toFixed(
                2,
              )}`}</span>
              <Icon
                className={css.iconFavorite}
                id="icon-heart-favorite"
                width={26}
                height={24}
                role="button"
                // onClick={handleToggleFavorite}
                ariaLabel="Heart-favorite"
              />
            </div>
          </div>

          <ReviewInfo
            reviews={camper.reviews}
            rating={camper.rating}
            location={camper.location}
          />
        </div>

        <p className={css.camperCardText}>{camper.description}</p>
        <CamperFeatures camper={camper} />

        <Link to={`/catalog/${camper.id}`}>
          <button className={css.btnShowMore} type="button">
            Show more
          </button>
        </Link>
      </div>
    </li>
  );
};

export default CamperCard;
