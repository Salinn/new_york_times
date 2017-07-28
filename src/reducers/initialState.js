import moment from 'moment';
import * as patterns from '../utils/types/patternTypes'

export default {
    articles: {
        stories: [],
        fullArticle: {
            isOpen: false,
            web_url: '',
        },
        currentPage: 'Home',
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
        }
    }
}