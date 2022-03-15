import axios from "axios";

const API_SEARCH = 'http://omdbapi.com?apiKey=c032e2d7&s='

export const searchRequest = axios.create({
      baseURL: API_SEARCH,
});
