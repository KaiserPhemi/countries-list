// third-party libraries
import axios from 'axios';

// constant
const BASE_URL: string = process.env.REACT_APP_COUNTRIES_API!;

// Methods to make API calls
export const fetchCountries = {
  /**
   * Fetches all countries
   */
  async fetchAll() {
    return await axios.get(`${BASE_URL}/all`)
  }
} 