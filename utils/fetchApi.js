import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': 'dc94c7c04emsh98141b8845b4132p141519jsn16d7edc9d129',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });
    
  return data;
}