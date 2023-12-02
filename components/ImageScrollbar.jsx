// import { useContext } from 'react';
// import Image from 'next/image';
// import { Box, Icon, Flex } from '@chakra-ui/react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Flex justifyContent='center' alignItems='center' marginRight='1'>
//       <Icon
//         as={FaArrowAltCircleLeft}
//         onClick={() => scrollPrev()}
//         fontSize='2xl'
//         cursor='pointer'
//         d={['none','none','none','block']}
//       />
//     </Flex>
//   );
// }

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Flex justifyContent='center' alignItems='center' marginLeft='1'>
//       <Icon
//         as={FaArrowAltCircleRight}
//         onClick={() => scrollNext()}
//         fontSize='2xl'
//         cursor='pointer'
//         d={['none','none','none','block']}
//     />
//     </Flex>
//   );
// }
// export default function ImageSrollbar({ data }) {
//   return (
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} >
//       {data.map((item) => (
//         <Box width='800px' itemId={item.id} overflow='hidden' p='1'>
//           <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500}  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
//         </Box>
//       ))}
//     </ScrollMenu>
//   );
// }

import { useState, useContext } from 'react';
import Image from 'next/image';

import { useSpring, animated } from 'react-spring';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <div style={{ marginRight: '1px' }}>
      <FaArrowAltCircleLeft onClick={scrollPrev} style={{ fontSize: '2xl', cursor: 'pointer' }} />
    </div>
  );
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <div style={{ marginLeft: '1px' }}>
      <FaArrowAltCircleRight onClick={scrollNext} style={{ fontSize: '2xl', cursor: 'pointer' }} />
    </div>
  );
}

const ImageScrollbar = ({ data }) => {
  const [selected, setSelected] = useState(0);

  const { scroll, ...props } = useSpring({
    scroll: selected * 800,
  });

  const handleSelect = (key) => {
    setSelected(key);
  };

  return (
    <ScrollMenu
      data={data.map((item, index) => ({ ...item, key: index }))}
      selected={selected}
      onSelect={handleSelect}
      translate={scroll}
      alignCenter={false}
      hideArrows={true}
      dragging={false}
      arrowLeft={<LeftArrow />}
      arrowRight={<RightArrow />}
      wheel={false}
      wrapperStyle={{ overflow: 'hidden' }}
      innerWrapperStyle={{ display: 'flex' }}
    >
      {data.map((item, index) => (
        <div key={index} itemID={index} style={{ width: '800px', overflow: 'hidden', padding: '1px' }}>
          <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500} sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
        </div>
      ))}
    </ScrollMenu>
  );
}

export default ImageScrollbar;

