import { useNavigate } from 'react-router-dom';
import Container from '../../shared/Container/Container.jsx';
import HomePageDescription from '../../components/HomePageDescription/HomePageDescription.jsx';

import css from './HomePage.module.css';

const Home = () => {
  const nav = useNavigate();
  return (
    <section className={css.sectionHome}>
      <Container>
        <div className={css.homePage}>
          <HomePageDescription />
          <button
            type="button"
            className={css.buttonView}
            onClick={() => nav('/catalog')}
          >
            View Now
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Home;
