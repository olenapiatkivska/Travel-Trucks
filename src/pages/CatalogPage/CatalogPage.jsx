import Catalog from '../../components/Catalog.jsx';
import Container from '../../shared/Container/Container.jsx';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <>
      <Container>
        <div className={css.catalogPageWrapp}>
          <div>Filter</div>
          <Catalog />
        </div>
      </Container>
    </>
  );
};

export default CatalogPage;
