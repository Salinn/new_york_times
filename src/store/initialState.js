export default {
    stories: [],
    meta: {
        isLoading: true
    },
    page: {
        fullArticle: {
            isOpen: false,
            web_url: '',
        },
        pagination: {
            current: 0,
            min: 0,
            max: 120
        },
        searchTerm: '',
        currentPage: 'Home',
    },
    sections: ['Home', 'World', 'U.S.', 'Politics', 'N.Y.', 'More']
}