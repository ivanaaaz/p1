import Link from 'next/link';
import '../../tailwind.config';

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-secondary-200 text-white font-semibold text-xl text-center pt-4 pb-4 ml-0 me-0 md:ml-20 md:mr-20 lg:ml-0 lg:mr-0 rounded-b">
      <Link href="/">
        <a>Home</a>
      </Link>
      <a className="border-l-2 pl-4 border-white mr-0 ml-4">About us</a>
    </header>
  );
};

export default Navbar;
