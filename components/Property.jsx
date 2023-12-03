// import Link from 'next/link';
// import Image from 'next/image';
// import { Box, Flex, Text } from '@chakra-ui/layout';
// import { Avatar } from '@chakra-ui/avatar';
// import { FaBed, FaBath } from 'react-icons/fa';
// import { BsGridFill } from 'react-icons/bs';
// import { GoVerified } from 'react-icons/go';
// import millify from 'millify';

// import DefaultImage from '../assets/images/house.jpg';

// const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID  } }) => (
//   <Link href={`/property/${externalID}`} passHref>
//     <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
//       <Box>
//         <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} />
//       </Box>
//       <Box w='full'>
//         <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
//           <Flex alignItems='center'>
//             <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
//             <Text fontWeight='bold' fontSize='lg'>ZAR {price}{rentFrequency && `/${rentFrequency}`}</Text>
//           </Flex>
//           <Box>
//             <Avatar size='sm' src={agency?.logo?.url}></Avatar>
//           </Box>
//         </Flex>
//         <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='pink.400'>
//           {rooms}
//           <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
//         </Flex>
//         <Text fontSize='lg'>
//           {title.length > 30 ? title.substring(0, 30) + '...' : title}
//         </Text>
//       </Box>
//     </Flex>
//   </Link>
// );

// export default Property;

import Link from 'next/link';
import Image from 'next/image';
import millify from 'millify';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';

import DefaultImage from '../assets/images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID, avatarUrl } }) => (
  <Link href={`/property/${externalID}`} passHref>
    <div className="flex flex-wrap w-96 p-5 pt-0 cursor-pointer">
      <div className="relative w-52 h-32 rounded-2xl overflow-hidden">
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </div>
      <div className="flex-1 ml-4">
        <div className="flex flex-col justify-between h-32">
          <div className="flex items-center">
            <div className="pr-3 text-green-400">{isVerified && <GoVerified />}</div>
            <p className="font-bold text-lg">ZAR {price}{rentFrequency && `/${rentFrequency}`}</p>
          </div>
          <div className="flex items-center p-1 justify-between text-pink-400">
            {rooms} <span className="ml-1"><FaBed /></span> | {baths} <span className="ml-1"><FaBath /></span> | {millify(area)} sqft <span className="ml-1"><BsGridFill /></span>
          </div>
          <img
            src={avatarUrl || 'URL_TO_DEFAULT_AVATAR_IMAGE'}
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="text-lg">
            {title.length > 30 ? title.substring(0, 30) + '...' : title}
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default Property;
