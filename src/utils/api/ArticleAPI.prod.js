//Used for making https requests
import axios from 'axios';
//Used for dates
import moment from 'moment';

//Used for defining the API Routes Available
export const DOMAIN_NAME = 'https://api.nytimes.com/svc/search';
const API_VERSION = '/v2';
export const ARTICLE_ENDPOINT = DOMAIN_NAME + API_VERSION + '/articlesearch.json';

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

export const fetchArticles = ({ searchFields }) => {
    return axios.get(ARTICLE_ENDPOINT + getParams({ searchFields }), headers);
};

export const getParams = ({ searchFields }) => {
    let params = '?';
    const keys = Object.keys(searchFields);

    keys.forEach( key => {

        if (key === 'end_date') {
            params += `&${key}=${moment(searchFields[key].value).format('YYYYMMDD')}`
        } else {
            params += `&${key}=${searchFields[key].value}`
        }
    });
    return params
};