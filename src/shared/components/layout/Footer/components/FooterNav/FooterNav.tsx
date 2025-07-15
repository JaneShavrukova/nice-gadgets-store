import { Link } from 'react-router-dom';

import styles from './FooterNav.module.scss';

export const FooterNav: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link
        className={styles.navbarLink}
        target="_blank"
        to="https://github.com/JaneShavrukova/e-commerce-catalog"
      >
        GitHub
      </Link>
      <Link
        className={styles.navbarLink}
        target="_blank"
        to="https://github.com/JaneShavrukova"
      >
        Contacts
      </Link>
      <Link
        className={styles.navbarLink}
        target="_blank"
        to="https://github.com/JaneShavrukova"
      >
        Rights
      </Link>
    </nav>
  );
};
