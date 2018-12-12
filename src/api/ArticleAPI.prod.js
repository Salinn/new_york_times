import { get } from './HttpRequests'

// export const HOME_ARTICLE_ENDPOINT = DOMAIN_NAME  + '?';
// export const WORLD_ARTICLE_ENDPOINT = DOMAIN_NAME + '?fq=news_desk:("World")';
// export const US_ARTICLE_ENDPOINT = DOMAIN_NAME + '?fq=news_desk:("U.S.")';
// export const NY_ARTICLE_ENDPOINT = DOMAIN_NAME + '?fq=news_desk:("N.Y.")';
// export const POLITICS_ARTICLE_ENDPOINT = DOMAIN_NAME + '?fq=news_desk:("Politics")';
// export const MORE_ARTICLE_ENDPOINT = DOMAIN_NAME + '?';

export const getHomeArticles = (props) => {
    const {
        pageNumber = 1,
    } = props

    return get(`articlesearch.json?page=${pageNumber}`, props)
}

export const getWorldArticles = (props) => {
    const {
        pageNumber = 1,
    } = props

    return get(`articlesearch.json?page=${pageNumber}&fq=news_desk:("World")`, props)
}

export const getUSAArticles = (props) => {
    const {
        pageNumber = 1,
    } = props

    return get(`articlesearch.json?page=${pageNumber}&fq=news_desk:("U.S.")`, props)
}

export const getPoliticsArticles = (props) => {
    const {
        pageNumber = 1,
    } = props

    return get(`articlesearch.json?page=${pageNumber}&fq=news_desk:("Politics")`, props)
}

export const getNYCArticles = (props) => {
    const {
        pageNumber = 1,
    } = props

    return get(`articlesearch.json?page=${pageNumber}&fq=news_desk:("N.Y.")`, props)
}

export const getMoreArticles = (props) => {
    const {
        pageNumber = 1,
        searchTerm = '',
    } = props

    return get(`articlesearch.json?page=${pageNumber}&q=${searchTerm}`, props)
}