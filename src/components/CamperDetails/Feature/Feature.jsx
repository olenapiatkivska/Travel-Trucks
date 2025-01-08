import CamperFeatures from '../../CamperFeatures/CamperFeatures.jsx';
import TechnicalDetails from './TechnicalDetails/TechnicalDetails.jsx';
import css from './Feature.module.css';

const Feature = ({ camper }) => {
  return (
    <section className={css.featureSection}>
      <CamperFeatures camper={camper} />
      <TechnicalDetails camper={camper} />
    </section>
  );
};

export default Feature;
