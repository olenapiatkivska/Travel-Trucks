import Icon from '../../shared/Icons/Icon.jsx';

import css from './CamperFeatures.module.css';

const CamperFeatures = ({ camper }) => {
  return (
    <ul>
      {camper.transmission && (
        <li>
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
        <li>
          <Icon id="icon-engin" width={20} height={20} ariaLabel="Engine" />
          {camper.engine}
        </li>
      )}

      {camper.AC && (
        <li>
          <Icon id="icon-wind" width={20} height={20} ariaLabel="AC" />
          AC
        </li>
      )}

      {camper.kitchen && (
        <li>
          <Icon id="icon-cup-hot" width={20} height={20} ariaLabel="Kitchen" />
          Kitchen
        </li>
      )}

      {camper.TV && (
        <li>
          <Icon id="icon-tv" width={20} height={20} ariaLabel="TV" />
          TV
        </li>
      )}

      {camper.bathroom && (
        <li>
          <Icon id="icon-shower" width={20} height={20} ariaLabel="Bathroom" />
          Bathroom
        </li>
      )}

      {camper.radio && (
        <li>
          <Icon id="icon-radio" width={20} height={20} ariaLabel="Radio" />
          Radio
        </li>
      )}

      {camper.refrigerator && (
        <li>
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
        <li>
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
        <li>
          <Icon id="icon-gas" width={20} height={20} ariaLabel="Gas" />
          Gas
        </li>
      )}

      {camper.water && (
        <li>
          <Icon id="icon-water" width={20} height={20} ariaLabel="Water" />
          Water
        </li>
      )}
    </ul>
  );
};

export default CamperFeatures;
