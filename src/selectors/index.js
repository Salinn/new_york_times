export const getFetchArticleInfo = (state) => {
    const {
        meta: {
            currentPage,
            paginationPage,
        }
    } = state

    return {
        currentPage,
        paginationPage
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