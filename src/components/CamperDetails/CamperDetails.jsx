import { useDispatch, useSelector } from 'react-redux';
import CamperGallery from './CamperGallery/CamperGallery.jsx';
import { selectCamperById } from '../../redux/catalog/selectors.js';
import { useParams } from 'react-router-dom';
import { fetchCamper } from '../../redux/catalog/operations.js';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader.jsx';
import DetailsTitle from './DetailsTitle/DetailsTitle.jsx';
import Feature from './Feature/Feature.jsx';

import css from './CamperDetails.module.css';
import ToggleButtons from './Feature/ToggleButtons/ToggleButtons.jsx';
import Reviews from './Reviews/Reviews.jsx';
import BookingForm from './BookingForm/BookingForm.jsx';

const CamperDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(state => selectCamperById(state, id));
  const [isActiveBtn, setIsActiveBtn] = useState({
    feature: true,
    reviews: false,
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchCamper(id));
    }
  }, [dispatch, id]);

  const handleClickBtn = typeBtn => {
    setIsActiveBtn({
      feature: typeBtn === 'feature',
      reviews: typeBtn === 'reviews',
    });
  };

  if (!camper) {
    return <Loader />;
  }

  return (
    <div className={css.camperDetailsWrapp}>
      <DetailsTitle camper={camper} />

      {camper.gallery ? (
        <CamperGallery gallery={camper.gallery} />
      ) : (
        <p>No gallery available</p>
      )}

      <p className={css.camperDetailsText}>
        {camper.description || 'No description available'}
      </p>

      <ToggleButtons active={isActiveBtn} handleClick={handleClickBtn} />

      <div className={css.camperDetailsBtn}>
        {isActiveBtn.feature ? (
          <Feature camper={camper} />
        ) : (
          <Reviews camper={camper} />
        )}
        <BookingForm />
      </div>
    </div>
  );
};

export default CamperDetails;
