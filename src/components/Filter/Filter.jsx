import FilterForm from './FilterForm/FilterForm.jsx';
import css from './Filter.module.css';

const Filter = () => {
  return (
    <aside className={css.asideBar}>
      <FilterForm />
    </aside>
  );
};
export default Filter;
