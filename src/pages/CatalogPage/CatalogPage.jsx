import Catalog from '../../components/Catalog.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import Container from '../../shared/Container/Container.jsx';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <>
      <Container>
        <div className={css.catalogPageWrapp}>
          <Filter />
          <Catalog />
        </div>
      </Container>
    </>
  );
};

export default CatalogPage;
