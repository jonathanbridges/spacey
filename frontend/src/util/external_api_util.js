import keys from '../config/keys';
import axios from 'axios';

export const fetchImageOfTheDay = () => {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${keys.nasa}`;
  return axios.get(url);
};

export const fetchSpaceXLaunches = () => {
  let url = 'https://api.spacexdata.com/v3/launches/upcoming';
  return axios.get(url);
};

export const fetchSpaceLaunchNow = () => {
  let url = '/api/spacelaunchnow'
  return axios.get(url);
}
