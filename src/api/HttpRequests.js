import axios from 'axios';
axios.defaults.baseURL = 'https://api.nytimes.com/svc/search/v2/';
axios.defaults.headers = { 'Content-Type': 'application/json' };

const get = (url, props) => {
    const authenticatedUrl = `${url}&api-key=${props.apiKey}`
    
    return axios.get(authenticatedUrl)
}

export {
    get
}