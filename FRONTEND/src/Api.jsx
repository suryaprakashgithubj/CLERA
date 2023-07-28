


import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v4/user/";
const AUTH_API_BASE_URL = "http://localhost:8080/auth/";
const SERVICE_BASE_URL = "http://localhost:8080/api/v1/service/"
const PROVIDER_BASE_URL = "http://localhost:8080/api/v1/provider/"

class UserService {

  //public
  saveUser(user) {
    return axios.post(AUTH_API_BASE_URL + "register", user);
  }

  //public
  loginUserWithEmailAndPassword(user) {
    return axios.post(AUTH_API_BASE_URL + "login", user);
  }

  deleteUser(id, user) {
    return axios.delete(USER_API_BASE_URL + "del/" + id, user);
  }

  updateUser(id, user) {
    return axios.put(USER_API_BASE_URL + "edit/" + id, user);
  }
  getUserByEmail(email, token) {
    return axios.get(USER_API_BASE_URL + "get/" + email, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  }

  getServices(token) {
    return axios.get("http://localhost:8080/api/v1/service/get", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  }

  addFeedback(data, token) {
    return axios.post(USER_API_BASE_URL + "feedback/add", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  }

  getProviders(category, location, token) {
    return axios.get(PROVIDER_BASE_URL + "get-specific/" + category + "/" + location, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
  }

}

export default new UserService();