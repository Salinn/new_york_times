import moment from 'moment';
import * as patterns from '../utils/types/patternTypes'

export default {
    articles: {
        stories: [],
        searchMeta: {
            'api-key': {
                name: 'api-key',
                label: 'Api Key',
                pattern: patterns.DEFAULT,
                type: 'text',
            },
            page: {
                name: 'page',
                label: 'Page Number',
                pattern: patterns.DEFAULT,
                type: 'text',
            },
            q: {
                name: 'q',
                label: 'Search',
                pattern: patterns.DEFAULT,
                type: 'text',
            },
            end_date: {
                name: 'end_date',
                label: 'Date',
                pattern: patterns.DATE,
                type: 'date',
            },
        },
        fullArticle: {
            isOpen: false,
            web_url: '',
        },
        searchFields: {
            'api-key': {
                value: 'a8457610b68381085a3fff38d6a36337:6:74255139',
                isError: null,
                errorMessage: '',
            },
            page: {
                value: 0,
                isError: null,
                errorMessage: '',
            },
            q: {
                value: '',
                isError: null,
                errorMessage: '',
            },
            end_date: {
                value: moment().format('YYYY-MM-DD'),
                isError: null,
                errorMessage: '',
            },
        }
    }
}