import { NavLink } from 'react-router-dom';
import Icon from '../../shared/Icons/Icon.jsx';
import Container from '../../shared/Container/Container.jsx';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.containerHeader}>
      <Container>
        <nav className={css.navigation}>
          <NavLink to="/">
            <Icon
              className={css.iconLogo}
              id="icon-logo"
              width={136}
              height={16}
              ariaLabel="Home"
            />
          </NavLink>
          <div className={css.menu}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.link} ${css.activeLink}` : `${css.link}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.link} ${css.activeLink}` : css.link
              }
              to="/catalog"
            >
              Catalog
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
