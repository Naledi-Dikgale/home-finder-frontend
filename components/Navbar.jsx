// import Link from 'next/link';
// import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
// import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
// import { BsSearch } from 'react-icons/bs';
// import { FiKey } from 'react-icons/fi';

// const Navbar = () => (
//   <Flex p='2' borderBottom='1px' borderColor='gray.100'>
//     <Box fontSize='3xl' color='pink.600' fontWeight='bold'>
//       <Link href='/' paddingLeft='2'>Agent</Link>
//     </Box>
//     <Spacer />
//     <Box>
//       <Menu>
//         <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
//         <MenuList>
//           <Link href='/' passHref>
//             <MenuItem icon={<FcHome />}>Home</MenuItem>
//           </Link>
//           <Link href='/search' passHref>
//             <MenuItem icon={<BsSearch />}>Find</MenuItem>
//           </Link>
//           <Link href='/search?purpose=for-sale' passHref>
//             <MenuItem icon={<FcAbout />}>Buy a home</MenuItem>
//           </Link>
//           <Link href='/search?purpose=for-rent' passHref>
//             <MenuItem icon={<FiKey />}>Rent a home</MenuItem>
//           </Link>
//         </MenuList>
//       </Menu>
//     </Box>
//   </Flex>
// );

// export default Navbar;

import Link from 'next/link';
import { useState } from 'react';
import { FcMenu, FcHome, FcSearch } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-2 border-b border-gray-300 flex">
      <div className="text-3xl font-bold text-red-600">
        <span className="cursor-pointer">
           Home Finder
        </span>
      </div>
      <div className="ml-auto hidden md:block">
        <button onClick={handleToggle} className="bg-transparent border-none cursor-pointer">
          <FcMenu className="text-2xl text-red-600" />
        </button>
      </div>
      {isOpen && (
        <div className="ml-auto">
          <ul className="list-none p-0">
            <li>
              <Link href='/' passHref>
                <span className="text-red-600 cursor-pointer">
                  <FcHome /> Home
                </span>
              </Link>
            </li>
            <li>
              <Link href='/search' passHref>
                <span className="text-red-600 cursor-pointer">
                  <FcSearch /> Find
                </span>
              </Link>
            </li>
            <li>
              <Link href='/search?purpose=for-sale' passHref>
                <span className="text-red-600 cursor-pointer">Buy a home</span>
              </Link>
            </li>
            <li>
              <Link href='/search?purpose=for-rent' passHref>
                <span className="text-red-600 cursor-pointer">Rent a home</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
