import Icon from '../../shared/Icons/Icon.jsx';
import css from './CamperFeatures.module.css';

const CamperFeatures = ({ camper }) => {
  return (
    <ul className={css.listCamperFeatures}>
      {camper.transmission && (
        <li className={css.itemCamperFeatures}>
          <Icon
            id="icon-transmission"
            width={20}
            height={20}
            ariaLabel="Transmission"
          />
          {camper.transmission}
        </li>
      )}

      {camper.engine && (
        <li className={css.itemCamperFeatures}>
          <Icon id="icon-engin" width={20} height={20} ariaLabel="Engine" />
          {camper.engine}
        </li>
      )}

      {camper.AC && (
        <li className={css.itemCamperFeatures}>
          <Icon id="icon-wind" width={20} height={20} ariaLabel="AC" />
          AC
        </li>
      )}

      {camper.kitchen && (
        <li className={css.itemCamperFeatures}>
          <Icon id="icon-cup-hot" width={20} height={20} ariaLabel="Kitchen" />
          Kitchen
        </li>
      )}

      {camper.TV && (
        <li className={css.itemCamperFeatures}>
          <Icon id="icon-tv" width={20} height={20} ariaLabel="TV" />
          TV
        </li>
      )}

      {camper.bathroom && (
        <li className={css.itemCamperFeatures}>
          <Icon id="icon-shower" width={20} height={20} ariaLabel="Bathroom" />
          Bathroom
        </li>
      )}

      {camper.radio && (
        <li className={css.itemCamperFeatures}>
          <Icon id="icon-radio" width={20} height={20} ariaLabel="Radio" />
          Radio
        </li>
      )}

      {camper.refrigerator && (
        <li className={css.itemCamperFeatures}>
          <Icon
            id="icon-refrigerator"
            width={20}
            height={20}
            ariaLabel="Refrigerator"
          />
          Refrigerator
        </li>
      )}

      {camper.microwave && (
        <li className={css.itemCamperFeatures}>
          <Icon
            id="icon-microwave"
            width={20}
            height={20}
            ariaLabel="Microwave"
          />
          Microwave
        </li>
      )}

      {camper.gas && (
        <li className={css.itemCamperFeatures}>
          <Icon id="icon-gas" width={20} height={20} ariaLabel="Gas" />
          Gas
        </li>
      )}

      {camper.water && (
        <li className={css.itemCamperFeatures}>
          <Icon id="icon-water" width={20} height={20} ariaLabel="Water" />
          Water
        </li>
      )}
    </ul>
  );
};

export default CamperFeatures;
