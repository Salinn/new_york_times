//Used for making https requests
import axios from 'axios';
axios.defaults.baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
axios.defaults.headers = { 'Content-Type': 'application/json' };
//Used for defining the API Routes Available
// export const DOMAIN_NAME = '';

// export const HOME_ARTICLE_ENDPOINT = DOMAIN_NAME  + '?';
// export const WORLD_ARTICLE_ENDPOINT = DOMAIN_NAME + '?fq=news_desk:("World")';
// export const US_ARTICLE_ENDPOINT = DOMAIN_NAME + '?fq=news_desk:("U.S.")';
// export const NY_ARTICLE_ENDPOINT = DOMAIN_NAME + '?fq=news_desk:("N.Y.")';
// export const POLITICS_ARTICLE_ENDPOINT = DOMAIN_NAME + '?fq=news_desk:("Politics")';
// export const MORE_ARTICLE_ENDPOINT = DOMAIN_NAME + '?';

export const getHomeArticles = (props) => {
    const {
        pageNumber = 1,
        searchTerm = '',
        apiKey
    } = props

    const search = searchTerm.length > 0 ? `&q=${searchTerm}` : ''
    const URL = `?page=${pageNumber}&api-key=${apiKey}${search}`

    return axios.get(URL)
}

export const getSearchArticles = (props) => {
    const {
        paginationPage = 1,
        searchTerm = '',
        apiKey
    } = props

    const URL = `?page={paginationPage}&q=${searchTerm}`

    return axios.get(URL)
}

export const getParams = ({ searchFields }) => {
    let params = '';
    const keys = Object.keys(searchFields);

    keys.forEach( key => params += searchFields[key] ? `&${key}=${searchFields[key]}` : '' );

    return params
};