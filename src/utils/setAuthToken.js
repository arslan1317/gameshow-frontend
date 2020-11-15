import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    console.log('this is working', token);
    axios.defaults.headers.common["xt-user-token"] = token;
  } else {
    delete axios.defaults.headers.common["xt-user-token"];
  }
};

export default setAuthToken;
