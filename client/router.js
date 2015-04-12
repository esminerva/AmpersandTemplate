var app = require('ampersand-app');
var Router = require('ampersand-router');
var HomePage = require('./pages/home');


module.exports = Router.extend({
    routes: {
        '': 'home',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        app.trigger('page', new HomePage());
    },

    catchAll: function () {
        this.redirectTo('');
    }
});
