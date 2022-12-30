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
    try {
      return await axios.get(`${BASE_URL}/all`)
    } catch (error: any) {
      console.log(`${error.message}`);
    }
  },

  /**
   * Fetch countries by region
   * @param region 
   * @returns 
   */
  async fetchByRegion(region: string) {
    try {
      if (region === null || region === undefined || region === "") {
        return await this.fetchAll()
      }
      return await axios.get(`${BASE_URL}/region/${region}`)
    } catch (error: any) {
      console.log(`${error.message}`);
    }
  },

  /**
   * Search for a country
   * @param searchString
   * @returns 
   */
  async searchCountry(searchString: string) {
    try {
      if (searchString === null || searchString === undefined || searchString === "") {
        return await this.fetchAll()
      }
      return await axios.get(`${BASE_URL}/name/${searchString}`)
    } catch (error: any) {
      console.log(`${error.message}`);
    }
  },

  /**
   * Search for country by code
   * @param searchString 
   * @returns 
   */
  async searchByCode(codes: string) {
    try {
      if (codes === null || codes === undefined || codes === "") {
        return await this.fetchAll()
      }
      return await axios.get(`${BASE_URL}/alpha?codes=${codes}`)
    } catch (error: any) {
      console.log(`${error.message}`);
    }
  }
} 
