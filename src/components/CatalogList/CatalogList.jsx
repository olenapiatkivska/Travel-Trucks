import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader.jsx';

import css from './CatalogList.module.css';
import CamperCard from '../CamperCard/CamperCard.jsx';
import {
  selectError,
  selectTotalCampers,
} from '../../redux/catalog/selectors.js';
import { fetchCampers } from '../../redux/catalog/operations.js';

let limit = 4;
let limitSequence = 4;

const CatalogList = ({ campers }) => {
  const dispatch = useDispatch();

  // const loading = useSelector(selectLoading);
  const total = useSelector(selectTotalCampers);
  const error = useSelector(selectError);

  // const handleLoadMore = () => {
  //   if (limit < total) {
  //     limit += limitSequence;
  //     dispatch(fetchCampers(limit));
  //   }
  // };

  return (
    <section>
      <ul>
        {campers.map(camper => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CatalogList;
