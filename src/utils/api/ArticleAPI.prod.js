//Used for making https requests
import axios from 'axios';
//Used for defining the API Routes Available
export const DOMAIN_NAME = 'https://api.nytimes.com/svc/search';
const API_VERSION = '/v2';
const API_KEY = '?api-key=a8457610b68381085a3fff38d6a36337:6:74255139';
export const ARTICLE_ENDPOINT = DOMAIN_NAME + API_VERSION + '/articlesearch.json' + API_KEY;

export const fetchArticles = ({ page }) => {
    return axios.get(ARTICLE_ENDPOINT + `&page=${page}`);
};