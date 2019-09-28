import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID f13c50006d7d63bf5c56d39572a4a1cd3f9d6dfed7fc453ad6504155a7671b68'
  }
});