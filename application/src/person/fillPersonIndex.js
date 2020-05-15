import axios from 'axios';
import * as elasticsearchClient from '../elasticsearchClient';
import { handleError } from '../utils/errorHandler';
import { INDEX_NAME } from './constants';

const fillPersonIndex = async () => {
  const data = await fetchPersonData();
  const mapped = data.map((person) => mapData(person));

  const body = mapped.flatMap((doc) => [{ index: { _index: INDEX_NAME } }, doc]);
  elasticsearchClient.bulk(INDEX_NAME, body);
};

const mapData = (person) => {
  const { cell, dob, email, gender, id, location, login, name, nat, phone, picture, registered } = person;
  return {
    birthdate: dob.date,
    cell,
    email,
    gender,
    id,
    location: {
      ...location,
      coordinates: { lat: location.coordinates.latitude, lon: location.coordinates.longitude },
    },
    login,
    name,
    nat,
    phone,
    picture,
    registered,
  };
};

const fetchPersonData = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=5000&noinfo');
    const { data, status, statusText } = response;

    if (status !== 200) {
      throw new Error(`An error occurred: [${status}]:${statusText}`);
    }
    return data.results;
  } catch (error) {
    handleError(error);
  }
  return [];
};

fillPersonIndex().catch(handleError);
