import axios from 'axios';

const barberApi = axios.create({
  baseURL: 'http://localhost:3333/',
});

// console.log(barberApi);
export default barberApi;
