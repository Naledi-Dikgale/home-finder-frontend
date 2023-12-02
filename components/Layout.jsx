// import Head from 'next/head';
// import { Box } from '@chakra-ui/react';

// import Footer from './Footer';
// import Navbar from './Navbar';

// export default function Layout({ children }) {
//   return (
//     <>
//       <Head>
//         <title>Home Finder</title>
//       </Head>
//       <Box maxWidth='1280px' m='auto'
//        bgGradient='linear(to-r, teal.50, blue.100)'
//       //  h='100vh'
//       >
//         <header>
//           <Navbar />
//         </header>
//         <main>{children}</main>
//         <footer>
//           <Footer />
//         </footer>
//       </Box>
//     </>
//   );
// }

import Head from 'next/head';

import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Home Finder</title>
      </Head>
      <div>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
