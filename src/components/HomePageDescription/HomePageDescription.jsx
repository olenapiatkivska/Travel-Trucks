import css from './HomePageDescription.module.css';

const HomePageDescription = () => {
  return (
    <div className={css.containerHome}>
      <h1 className={css.homeTitle}>Campers of your dreams</h1>
      <p className={css.homeText}>
        You can find everything you want in our catalog
      </p>
    </div>
  );
};

export default HomePageDescription;
