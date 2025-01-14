import { useDispatch, useSelector } from 'react-redux';
import CamperCard from '../CamperCard/CamperCard.jsx';
import {
  selectError,
  selectTotalCampers,
} from '../../redux/catalog/selectors.js';
import { selectFilters } from '../../redux/filters/selectors.js';
import { fetchCampers } from '../../redux/catalog/operations.js';
import LoadMoreBtn from '../Buttons/LoadMoreBtn/LoadMoreBtn.jsx';

import css from './CatalogList.module.css';

let limit = 4;
let limitSequence = 4;

const CatalogList = ({ campers }) => {
  const dispatch = useDispatch();

  const total = useSelector(selectTotalCampers);
  const savedFilters = useSelector(selectFilters);
  const error = useSelector(selectError);

  const handleLoadMore = () => {
    if (limit < total) {
      limit += limitSequence;
      dispatch(fetchCampers({ ...savedFilters, limit }));
    }
  };

  return (
    <section>
      {error !== null ? (
        <div className={css.notFoundCamperWrapp}>
          <p className={css.notFoundCamper}>Camper not found</p>
        </div>
      ) : (
        <ul className={css.catalogList}>
          {campers.map(camper => (
            <li key={camper.id}>
              <CamperCard camper={camper} />
            </li>
          ))}
        </ul>
      )}

      {error === null && (
        <LoadMoreBtn onClick={handleLoadMore} disabled={limit >= total}>
          Load more
        </LoadMoreBtn>
      )}
    </section>
  );
};

export default CatalogList;
