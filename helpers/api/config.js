import axios from 'axios';

export default axios.create({
    // Create Global API url base on Axios
    baseURL: 'https://api.bitubu.com/api/v2'
});