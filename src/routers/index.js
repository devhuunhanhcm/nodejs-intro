const newsRoute = require('./news');
const siteRoute = require('./site');

function routes(app){

    app.get('/news/:slug', newsRoute);
    app.get('/news', newsRoute);

    app.get('/search',siteRoute);
    app.get('/',siteRoute);

}

module.exports = routes;