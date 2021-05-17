const restaurants = require('./restaurants');

module.exports = app => {
    app.use('/api/restaurants', restaurants);
}