import ReviewInfo from '../../ReviewInfo/ReviewInfo.jsx';
import css from './DetailsTitle.module.css';

const DetailsTitle = ({ camper }) => {
  return (
    <>
      <h2 className={css.detailsTitle}>{camper.name}</h2>
      <div className={css.detailsTitleContent}>
        <ReviewInfo
          rating={camper.rating}
          reviews={camper.reviews}
          location={camper.location}
        />
        <span className={css.priceDetailsTitle}>{`€${camper.price.toFixed(
          2,
        )}`}</span>
      </div>
    </>
  );
};

export default DetailsTitle;
