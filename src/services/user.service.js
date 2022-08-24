import axios from 'axios';
import authHeader from './auth-header';

//const API_URL = 'http://localhost:8080/api/test/';
const API_URL = '';

class UserService {
  getPublicContent() {
    if (API_URL === '') {
      return new Promise(() => "API_URL not defined");
    }
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    if (API_URL === '') {
      return new Promise(() => "API_URL not defined");
    }
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    if (API_URL === '') {
      return new Promise(() => "API_URL not defined");
    }
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    if (API_URL === '') {
      return new Promise(() => "API_URL not defined");
    }
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
