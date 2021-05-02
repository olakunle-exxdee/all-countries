import { Link } from "react-router-dom";
import Toggle from "./Toggle";

const Nav = () => {
  return (
    <nav className="w-full bg-gray-50 dark:bg-mirage-900 py-6 shadow-lg ring-1 ring-mirage-200">
      <ul className="flex items-center justify-around w-full ">
        <Link className="text-gray-500 dark:text-gray-200" to="/">
          Home
        </Link>
        <Toggle />
      </ul>
    </nav>
  );
};

export default Nav;
