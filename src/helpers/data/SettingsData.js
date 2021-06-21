import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getSettings = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/settings.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteSettings = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/settings/${firebaseKey}.json`)
    .then(() => getSettings().then((settingArray) => resolve(settingArray)))
    .catch((error) => reject(error));
});

const getSingleSettings = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/settings/${firebaseKey}.json`)
    .then((setting) => resolve(setting.data))
    .catch((error) => reject(error));
});

const updateSettings = (setting) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/settings/${setting.firebaseKey}.json`, setting)
    .then(() => getSingleSettings(setting.firebaseKey).then(resolve))
    .catch((error) => reject(error));
});

export {
  getSettings, deleteSettings, updateSettings, getSingleSettings
};
