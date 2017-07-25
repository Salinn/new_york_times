//Used for making https requests
import axios from 'axios';
//Used for defining the API Routes Available
export const DOMAIN_NAME = 'https://api.nytimes.com/svc/search';
const API_VERSION = '/v2';
export const ARTICLE_ENDPOINT = DOMAIN_NAME + API_VERSION + '/articlesearch.json';

export const fetchArticles = ({ search }) => {
    return axios.get(ARTICLE_ENDPOINT + getParams({ search }));
};

export const getParams = ({ search }) => {
    let params = '?';
    const keys = Object.keys(search);

    keys.forEach( key => { params += `&${key}=${search[key]}` });

    return params
};