
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaHome, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-black p-2 flex justify-center">
      <div className="text-2xl font-bold">
        <span className="cursor-pointer text-green-400 text-center">
          <FaHome /> Home Finder
        </span>
      </div>
      <div className="md:hidden">
        <button onClick={handleToggle} className="text-white">
          <FaBars className="text-2xl" />
        </button>
      </div>
      {isOpen && (
        <div className="text-white md:flex md:items-center md:ml-auto">
          <ul className="list-none p-0 md:flex text-white">
            <li>
              <Link href='/' passHref>
                <span className="text-white">
                  <FaHome /> Home
                </span>
              </Link>
            </li>
            <li>
              <Link href='/search' passHref>
                <span className="text-white">
                  <FaSearch /> Find
                </span>
              </Link>
            </li>
            <li>
              <Link href='/search?purpose=for-sale' passHref>
                <span className="text-white">Buy a home</span>
              </Link>
            </li>
            <li>
              <Link href='/search?purpose=for-rent' passHref>
                <span className="text-white">Rent a home</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

