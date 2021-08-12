import Link from 'next/link';
import styles from './index.module.css';
const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <a className={styles.wrapper}>Home</a>
      </Link>
    </div>
  );
};

export default Navbar;
