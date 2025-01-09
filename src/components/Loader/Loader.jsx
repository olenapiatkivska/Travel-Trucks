import { DotLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <DotLoader color="red" size={50} />
    </div>
  );
};

export default Loader;
