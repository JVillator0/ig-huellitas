import axios from 'axios';

import Config from "./Config";
import AuthService from "../services/AuthService";

export function jwtInterceptor() {
  axios.interceptors.request.use(request => {
    // add auth header with jwt if account is logged in and request is to the api url
    const isLoggedIn = AuthService.getAuth();
    const isApiUrl = request.url.startsWith(Config.baseUrl);
    // modify this condition for other request
    if (isLoggedIn && isApiUrl) {
      request.headers.common.Authorization = `Bearer ${AuthService.getAuthToken()}`;
    }
    return request;
  });
}
