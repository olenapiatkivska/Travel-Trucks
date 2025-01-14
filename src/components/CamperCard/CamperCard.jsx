import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import clsx from 'clsx';
import CamperFeatures from '../CamperFeatures/CamperFeatures.jsx';
import ReviewInfo from '../ReviewInfo/ReviewInfo.jsx';
import { selectFavorites } from '../../redux/favorites/selectors.js';
import { toggleFavorite } from '../../redux/favorites/slice.js';

import css from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(camper.id);

  const handleFavorite = event => {
    event.preventDefault();
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <div className={css.wrappCamperCard}>
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

              <a
                className={clsx(css.favoriteLink, {
                  [css.favorited]: isFavorite,
                })}
                href="#"
                onClick={handleFavorite}
              >
                <FaRegHeart className={css.iconHeart} />
              </a>
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
    </div>
  );
};

export default CamperCard;
