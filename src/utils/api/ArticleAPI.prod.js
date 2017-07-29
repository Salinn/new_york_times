//Used for making https requests
import axios from 'axios';
//Used for dates
import moment from 'moment';

//Used for defining the API Routes Available
export const DOMAIN_NAME = 'https://api.nytimes.com/svc';
const API_VERSION = '/v2';

export const HOME_ARTICLE_ENDPOINT = DOMAIN_NAME + '/topstories' + API_VERSION + '/home.json';
export const WORLD_ARTICLE_ENDPOINT = DOMAIN_NAME + '/topstories' + API_VERSION + '/world.json';
export const US_ARTICLE_ENDPOINT = DOMAIN_NAME + '/topstories' + API_VERSION + '/national.json';
export const NY_ARTICLE_ENDPOINT = DOMAIN_NAME + '/topstories' + API_VERSION + '/nyregion.json';
export const POLITICS_ARTICLE_ENDPOINT = DOMAIN_NAME + '/topstories' + API_VERSION + '/politics.json';
export const MORE_ARTICLE_ENDPOINT = DOMAIN_NAME + '/search' + API_VERSION + '/articlesearch.json';

export const fetchArticles = ({ searchFields, currentPage }) => {
    console.log(currentPage);
    switch ( currentPage ){
        case 'Home':
            return axios.get(HOME_ARTICLE_ENDPOINT + getParams({ searchFields, currentPage }));
        case 'World':
            return axios.get(WORLD_ARTICLE_ENDPOINT + getParams({ searchFields, currentPage }));
        case 'U.S.':
            return axios.get(US_ARTICLE_ENDPOINT + getParams({ searchFields, currentPage }));
        case 'Politics':
            return axios.get(POLITICS_ARTICLE_ENDPOINT + getParams({ searchFields, currentPage }));
        case 'N.Y.':
            return axios.get(NY_ARTICLE_ENDPOINT + getParams({ searchFields, currentPage }));
        case 'More':
            return axios.get(MORE_ARTICLE_ENDPOINT + getParams({ searchFields, currentPage }));
        default:
            return axios.get(HOME_ARTICLE_ENDPOINT + getParams({ searchFields, currentPage }));
    }
};

export const getParams = ({ searchFields }) => {
    let params = '?';
    const keys = Object.keys(searchFields);

    keys.forEach( key => params += `&${key}=${searchFields[key]}` );

    return params
};