import * as NasaAPIUtil from '../util/nasa_iotd_util'

export const RECEIVE_IOTD = 'RECEIVE_IOTD';

const getImageOfTheDay = (payload) => ({
  type: 'RECEIVE_IOTD',
  payload
});

export const fetchImageOfTheDay = () => dispatch => (
  NasaAPIUtil.fetchImageOfTheDay().then(iotd => dispatch(getImageOfTheDay(iotd)))
);