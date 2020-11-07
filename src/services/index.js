import axios from 'axios';

export default axios.create({
    // baseURL: 'https://us1.locationiq.com/v1/'
    baseURL: 'https://api.opencagedata.com/geocode/v1/'
})