export const getFetchArticleInfo = (state) => {
    const {
        meta: {
            currentPage,
            paginationPage,
        },
        articles: {
            searchTerm
        }
    } = state

    return {
        currentPage,
        paginationPage,
        searchTerm
    }
}

export const getApiToken = (state) => {
    const {
        meta: {
            apiKey
        }
    } = state

    return {
        apiKey
    }
}