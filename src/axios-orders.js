import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-1ecd2.firebaseio.com/",
});

export default instance;
