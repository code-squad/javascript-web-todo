import axios from 'axios';

export default axios.create({
  baseURL: 'https://todo-data.herokuapp.com'
});