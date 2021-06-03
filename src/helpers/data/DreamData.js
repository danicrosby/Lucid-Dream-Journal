import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getDreams = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/dreams.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addDream = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/dreams.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/dreams/${response.data.name}.json`, body)
        .then(() => {
          getDreams().then((dreamsArray) => resolve(dreamsArray));
        });
    }).catch((error) => reject(error));
});

const deleteDream = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/dreams/${firebaseKey}.json`)
    .then(() => getDreams().then((dreamArray) => resolve(dreamArray)))
    .catch((error) => reject(error));
});

const updateDream = (dream) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/dreams/${dream.firebaseKey}.json`, dream)
    .then(() => getDreams().then(resolve))
    .catch((error) => reject(error));
});

const getSingleDream = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/dreams/${firebaseKey}.json`)
    .then((dream) => resolve(dream.data))
    .catch((error) => reject(error));
});

export {
  addDream, getDreams, deleteDream, updateDream, getSingleDream
};
