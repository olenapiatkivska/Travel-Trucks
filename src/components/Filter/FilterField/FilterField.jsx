import Icon from '../../../shared/Icons/Icon.jsx';
import css from './FilterField.module.css';

const FilterField = ({
  type,
  options,
  legend,
  handleChange,
  selectedValues,
}) => {
  return (
    <fieldset className={css.fieldset}>
      <legend className={css.fieldsetLegend}>{legend}</legend>
      <hr className={css.hrFilter} />
      <div className={css.fieldsetWrapp}>
        {Object.keys(options).map(item => {
          const isChecked =
            type === 'checkbox'
              ? selectedValues[item] || false
              : selectedValues.selected === item;

          return (
            <label
              key={item}
              className={`${css.label} ${isChecked ? css.checked : ''}`}
            >
              <input
                type={type}
                name={type !== 'checkbox' ? 'radioBtn' : item}
                value={item}
                className={css.input}
                onChange={e =>
                  handleChange(
                    type === 'checkbox'
                      ? { ...selectedValues, [item]: e.target.checked }
                      : item,
                  )
                }
                checked={isChecked}
              />
              <div className={css.contentWrapper}>
                <Icon id={item.toLocaleLowerCase()} width={32} height={32} />
                <span className={css.contentText}>{options[item]}</span>
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default FilterField;
