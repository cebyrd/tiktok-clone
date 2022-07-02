import axios from "axios";

const instance = axios.create({
    baseURL: "https://mern-tiktok-be.herokuapp.com/"
});

export default instance;