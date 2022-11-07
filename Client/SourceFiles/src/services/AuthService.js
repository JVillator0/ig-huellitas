import jwtDecode from "jwt-decode";

class AuthService {
  static getAuth() {
    const token = localStorage.getItem("token");
    if (token){
      const tokenDecoder = jwtDecode(token);
      let currentDate = new Date();
      if (tokenDecoder.exp * 1000 < currentDate.getTime()) {
        console.log("Token expired.");
        return false;
      } else {
        return true;
      }
    }else{
      return false;
    }
  }
  static saveToken(token){
    localStorage.setItem("token", token);
  }
  static getToken(){
    const token = localStorage.getItem("token");
    if (token){
      return jwtDecode(token);
    }
  }
  static getAuthToken(){
    return localStorage.getItem("token")
  }
}
export default AuthService;
