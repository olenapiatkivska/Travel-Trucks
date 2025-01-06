import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectLoading,
  selectError,
} from '../redux/catalog/selectors.js';
import { useEffect } from 'react';
// import { resetItems } from '../redux/catalog/slice.js';
import { fetchCampers } from '../redux/catalog/operations.js';
import Loader from './Loader/Loader.jsx';
import CatalogList from './CatalogList/CatalogList.jsx';

const Catalog = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // const filters = useSelector(selectFilters);

  useEffect(() => {
    if ((!campers || campers.length === 0) && error === null) {
      //   dispatch(resetItems());
      dispatch(fetchCampers());
    }
  }, [dispatch, campers, error]);

  return loading ? <Loader /> : <CatalogList campers={campers} />;
};

export default Catalog;
