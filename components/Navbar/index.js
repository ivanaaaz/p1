import Link from 'next/link';
import '../../tailwind.config';

const Navbar = () => {
  return (
    <header className="flex justify-center text-gray-400 text-xl pt-6">
      <Link href="/">
        <a>Home</a>
      </Link>
      <a className="ml-4 border-l-2 pl-4">About us</a>
    </header>
  );
};

export default Navbar;
