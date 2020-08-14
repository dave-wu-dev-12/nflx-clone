import axios from "axios";

// appends base url 
const inst = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default inst;