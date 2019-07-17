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

// Returns a response which lets you know the latest date available for photos
export const fetchRoverManifest = () => {
  let url = `https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=${keys.nasa}`;
  return axios.get(url);
}

export const fetchRoverPhotos = (date) => {
  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${keys.nasa}&earth_date=${date}&page=1`;
  return axios.get(url);
}

export const fetchSpaceLaunchNow = () => {
  let url = '/api/external/spacelaunchnow'
  return axios.get(url);
};

export const fetchHubbleNews = () => {
  let url = '/api/external/hubblesite'
  return axios.get(url);
};

export const fetchNASATweets = () => {
  let url = `/api/external/tweets/nasa`;
  return axios.get(url);
};
