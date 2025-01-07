import { useDispatch, useSelector } from 'react-redux';
import CamperCard from '../CamperCard/CamperCard.jsx';
import {
  selectError,
  selectTotalCampers,
} from '../../redux/catalog/selectors.js';
import { fetchCampers } from '../../redux/catalog/operations.js';
import LoadMoreBtn from '../Buttons/LoadMoreBtn/LoadMoreBtn.jsx';

import Loader from '../Loader/Loader.jsx';

import css from './CatalogList.module.css';

let limit = 4;
let limitSequence = 4;

const CatalogList = ({ campers }) => {
  const dispatch = useDispatch();

  // const loading = useSelector(selectLoading);
  const total = useSelector(selectTotalCampers);
  const error = useSelector(selectError);

  const handleLoadMore = () => {
    if (limit < total) {
      limit += limitSequence;
      dispatch(fetchCampers({ limit }));
    }
  };

  return (
    <section>
      <ul className={css.catalogList}>
        {campers.map(camper => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>

      <LoadMoreBtn onClick={handleLoadMore} disabled={limit >= total}>
        Load more
      </LoadMoreBtn>
    </section>
  );
};

export default CatalogList;
