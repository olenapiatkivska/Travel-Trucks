import css from './ToggleButtons.module.css';

const ToggleButtons = ({ active, handleClick }) => {
  const { feature, reviews } = active;

  return (
    <div className={css.toggleButtonsWrapp}>
      <button
        className={`${css.toggleButtons} ${css[feature ? 'active' : '']}`}
        type="button"
        onClick={() => handleClick('feature')}
        aria-label="Show feature"
      >
        Feature
      </button>

      <button
        className={`${css.toggleButtons} ${css[reviews ? 'active' : '']}`}
        type="button"
        onClick={() => handleClick('reviews')}
        aria-label="Show reviews"
      >
        Reviews
      </button>
    </div>
  );
};

export default ToggleButtons;
