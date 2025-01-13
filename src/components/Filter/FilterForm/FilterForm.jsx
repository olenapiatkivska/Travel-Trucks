import { useForm, Controller } from 'react-hook-form';
import { clearFilter, setFilter } from '../../../redux/filters/slice.js';
import { fetchCampers } from '../../../redux/catalog/operations.js';
import { formatObject } from '../../../shared/formatObject.js';
import { useDispatch } from 'react-redux';

import css from './FilterForm.module.css';
import Icon from '../../../shared/Icons/Icon.jsx';
import FilterField from '../FilterField/FilterField.jsx';

const FilterForm = () => {
  const dispatch = useDispatch();

  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      location: 'Kyiv, Ukraine',
      equipment: {
        Transmission: false,
        AC: false,
        Bathroom: false,
        Kitchen: false,
        TV: false,
      },
      vehicleType: '',
    },
  });

  const onSubmit = data => {
    const filters = {
      location: data.location.split(',')[0],
      ...formatObject(data.equipment),
      form: data.vehicleType,
    };

    dispatch(clearFilter());
    dispatch(setFilter(filters));
    dispatch(fetchCampers(filters));
  };

  const iconColor =
    watch('location').trim() === '' ? 'emptyInput' : 'fillInInput';

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.locationWrapp}>
        <p className={css.locationTitle}>Location</p>
        <label className={css.locationLabel}>
          <Icon
            className={`${css.locationIcon} ${css[iconColor]}`}
            id="location"
            width={20}
            height={20}
            ariaLabel="Location"
          />
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <input
                className={css.locationInput}
                type="text"
                {...field}
                placeholder="City"
              />
            )}
          />
        </label>
      </div>

      <div className={css.filtersWrapp}>
        <p className={css.filtersTitle}>Filters</p>
        <Controller
          name="equipment"
          control={control}
          render={({ field }) => (
            <FilterField
              type={'checkbox'}
              options={{
                Transmission: 'Automatic',
                AC: 'AC',
                Bathroom: 'Bathroom',
                Kitchen: 'Kitchen',
                TV: 'TV',
              }}
              legend={'Vehicle equipment'}
              handleChange={field.onChange}
              selectedValues={field.value}
            />
          )}
        />

        <Controller
          name="vehicleType"
          control={control}
          render={({ field }) => (
            <FilterField
              type={'radio'}
              options={{
                panelTruck: 'Van',
                fullyIntegrated: 'Fully Integrated',
                alcove: 'Alcove',
              }}
              legend={'Vehicle type'}
              handleChange={field.onChange}
              selectedValues={{ selected: field.value }}
            />
          )}
        />
      </div>
      <button
        className={css.filterFormBtn}
        type="submit"
        onClick={handleSubmit(onSubmit)}
        aria-label={'Submit filter form'}
      >
        Search
      </button>
    </form>
  );
};

export default FilterForm;
