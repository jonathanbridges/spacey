import axios from 'axios'

export const fetchImageOfTheDay = () => {
  let url = 'https://api.nasa.gov/planetary/apod?api_key=d4ZI9zLharrE2OR7EKtesQzSmI3w4hxfx8FMkVSF';
  return (
    axios.get(url)
  );
}