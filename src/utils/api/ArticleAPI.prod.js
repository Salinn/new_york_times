//Used for making https requests
import axios from 'axios';

//Used for defining the API Routes Available
export const DOMAIN_NAME = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

export const HOME_ARTICLE_ENDPOINT = DOMAIN_NAME  + '?';
export const WORLD_ARTICLE_ENDPOINT = DOMAIN_NAME + '?fq=news_desk:("World")';
export const US_ARTICLE_ENDPOINT = DOMAIN_NAME + '?fq=news_desk:("U.S.")';
export const NY_ARTICLE_ENDPOINT = DOMAIN_NAME + '?fq=news_desk:("N.Y.")';
export const POLITICS_ARTICLE_ENDPOINT = DOMAIN_NAME + '?fq=news_desk:("Politics")';
export const MORE_ARTICLE_ENDPOINT = DOMAIN_NAME + '?';


export const fetchArticles = ({ searchFields, currentPage }) => {
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
    let params = '';
    const keys = Object.keys(searchFields);

    keys.forEach( key => params += searchFields[key] ? `&${key}=${searchFields[key]}` : '' );

    return params
};