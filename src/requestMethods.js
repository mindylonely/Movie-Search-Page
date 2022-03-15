import axios from "axios";

const API = 'http://omdbapi.com?apiKey=c032e2d7&'
const API_SEARCH = 'http://omdbapi.com?apiKey=c032e2d7&s='

export const apiRequest = axios.create({
      baseURL: API,
})

export const searchRequest = axios.create({
      baseURL: API_SEARCH,
});
