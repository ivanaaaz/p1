import '../../tailwind.config';

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              {/*eslint-disable-next-line*/}
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                alt=""
              ></img>
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">
            {/* // eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              More
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
