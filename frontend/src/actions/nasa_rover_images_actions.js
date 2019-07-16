import * as NasaAPIUtil from '../util/external_api_util';

export const RECEIVE_ROVER_MANIFEST = 'RECEIVE_ROVER_MANIFEST';
export const RECEIVE_ROVER_PHOTOS = 'RECEIVE_ROVER_PHOTOS';

const getManifest = (payload) => ({
  type: 'RECEIVE_ROVER_MANIFEST',
  payload
});

export const fetchRoverManifest = () => dispatch => (
  NasaAPIUtil.fetchRoverManifest().then(manifest => dispatch(getManifest(manifest)))
);

const getRoverPhotos = (payload) => ({
  type: 'RECEIVE_ROVER_PHOTOS',
  payload
});

export const fetchRoverPhotos = (date) => dispatch => (
  NasaAPIUtil.fetchRoverPhotos(date).then(images => dispatch(getRoverPhotos(images)))
);