import css from './CamperGallery.module.css';

const CamperGallery = ({ gallery, description }) => {
  return (
    <ul className={css.camperGalleryList}>
      {gallery.map((item, index) => (
        <li className={css.camperGalleryItem} key={index + item.thumb}>
          <img
            className={css.camperGalleryImg}
            src={item.thumb}
            width={292}
            height={312}
            alt={description}
          />
        </li>
      ))}
    </ul>
  );
};

export default CamperGallery;
