
import Link from 'next/link';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';

export const Banner = ({ buttonText, linkName }) => (
  <div>
    <div className="bg-white">
      <button className=" text-black px-4 py-2 rounded hover:bg-green-400 hover:text-white transition duration-300 ease-in-out">
        <Link href={linkName}>{buttonText}</Link>
      </button>
    </div>
  </div>
);

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <div className="h-screen flex flex-col">
    <div className="h-1/2 bg-black text-green-400 flex justify-center">
      <Banner buttonText='RENTALS' linkName='/search?purpose=for-rent' />
      <Banner buttonText='SALES' linkName='/search?purpose=for-sale' />
    </div>

    <div className="h-1/2 bg-white">
    </div>
  </div>
);

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
