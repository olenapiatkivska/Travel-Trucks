import css from './TechnicalDetails.module.css';

const TechnicalDetails = ({ camper }) => {
  function modifyString(inputString) {
    return inputString.replace(/([0-9.]+)([a-zA-Z]+)/, '$1 $2');
  }

  return (
    <div className={css.technicalDetailsWrapp}>
      <h3 className={css.technicalDetailsTitle}>Vehicle details</h3>
      <hr className={css.hrLine} />

      <ul className={css.technicalDetailsList}>
        <li className={css.technicalDetailsItem}>
          <span>Form</span>
          <span className={css.technicalDetailsItemForm}>{camper.form}</span>
        </li>
        <li className={css.technicalDetailsItem}>
          <span>Length</span>
          <span>{modifyString(camper.length)}</span>
        </li>
        <li className={css.technicalDetailsItem}>
          <span>Width</span>
          <span>{modifyString(camper.width)}</span>
        </li>
        <li className={css.technicalDetailsItem}>
          <span>Height</span>
          <span>{modifyString(camper.height)}</span>
        </li>
        <li className={css.technicalDetailsItem}>
          <span>Tank</span>
          <span>{modifyString(camper.tank)}</span>
        </li>
        <li className={css.technicalDetailsItem}>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default TechnicalDetails;
