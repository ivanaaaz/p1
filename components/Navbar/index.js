import Link from 'next/link';
import styles from './index.module.css';
const Navbar = () => {
  return (
    <header>
      <Link href="/">
        <a className={styles.wrapper}>Home</a>
      </Link>
    </header>
  );
};

export default Navbar;
