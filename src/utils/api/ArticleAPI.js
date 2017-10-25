if (process.env.NODE_ENV !== 'development') {
    module.exports = require('./ArticleAPI.dev');
} else {
    module.exports = require('./ArticleAPI.prod');
}
