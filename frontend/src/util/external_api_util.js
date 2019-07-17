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

export const fetchTweets = () => {
  let nasaUrl = `/api/external/tweets/nasa`;
  let nasaJPLUrl = `/api/external/tweets/nasajpl`;
  let nasaHubbleUrl = `/api/external/tweets/nasahubble`;
  // let hubbleSpaceUrl = `/api/external/tweets/hubble_space`;
  // let marsCuriosityUrl = `/api/external/tweets/marscuriosity`;
  let ISSResearchUrl = `/api/external/tweets/ISS_Research`;
  // let esaUrl = `/api/external/tweets/esa`;
  // let spaceXUrl = `/api/external/tweets/spacex`;
  // let billNyeUrl = `/api/external/tweets/billnye`;
  // let dailySpacerUrl = `/api/external/tweets/DailySpacer`;
  let spaceFeaturesUrl = `/api/external/tweets/SpaceFeatures`;
  let AstroHagueUrl = `/api/external/tweets/AstroHague`;
  let AstroChristinaUrl = `/api/external/tweets/Astro_Christina`;

  let tweets = [];
  return axios.get(nasaUrl)
    .then(res => tweets = tweets.concat(res.data.data))
    .then(() => axios.get(nasaJPLUrl))
    .then(res => tweets = tweets.concat(res.data.data))
    .then(() => axios.get(nasaHubbleUrl))
    .then(res => tweets = tweets.concat(res.data.data))
    .then(() => axios.get(ISSResearchUrl))
    .then(res => tweets = tweets.concat(res.data.data))
    .then(() => axios.get(spaceFeaturesUrl))
    .then(res => tweets = tweets.concat(res.data.data))
    .then(() => axios.get(AstroHagueUrl))
    .then(res => tweets = tweets.concat(res.data.data))
    .then(() => axios.get(AstroChristinaUrl))
    .then(res => tweets = tweets.concat(res.data.data))
    .then(() => tweets.sort((a,b) => b.id - a.id));
};
