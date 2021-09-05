import Link from 'next/link';
import '../../tailwind.config';

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-blue-800 px-10 py-4 text-white text-lg shadow">
      <Link href="/">
        <a>Home</a>
      </Link>
    </header>
  );
};

export default Navbar;
