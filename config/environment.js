/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'bidtracker',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.torii = {
    providers: {
      'google-oauth2': {
        apiKey: "688090261241-kllc2v7q8ptn376d92tk84880efvn01f.apps.googleusercontent.com",
        // apiKey: "688090261241-0vek9b56e4ngmqgm78nu678u2ul0fme2.apps.googleusercontent.com",
        redirectUri: "http://localhost:4200",
        // redirectUri: "https://bidtracker.heroku.com",
        // should be doing something like this: redirectUri: "http://localhost:4200/torii/redirect.html",
        // tokenExchangeUri: "https://bidtracker.heroku.com/oauth/token"
        tokenExchangeUri: "http://localhost:3000/token"
      }
    },
    routeAfterAuthentication: 'dashboard',
    allowUnsafeRedirect: true
  };

  ENV['ember-simple-auth'] = {
    routeAfterAuthentication: 'dashboard',
    // routeIfAlreadyAuthenticated: 'dashboard',
    routeAfterInvalidation: 'login'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.torii = {
      providers: {
        'google-oauth2': {
          // apiKey: "688090261241-kllc2v7q8ptn376d92tk84880efvn01f.apps.googleusercontent.com",
          apiKey: "688090261241-0vek9b56e4ngmqgm78nu678u2ul0fme2.apps.googleusercontent.com",
          // redirectUri: "http://localhost:4200",
          redirectUri: "https://bidtracker.herokuapp.com",
          // should be doing something like this: redirectUri: "http://localhost:4200/torii/redirect.html",
          tokenExchangeUri: "https://bidtracker.herokuapp.com/oauth/token"
          // tokenExchangeUri: "http://localhost:3000/token"
        }
      },
      routeAfterAuthentication: 'dashboard',
      allowUnsafeRedirect: true
    };
  }

  return ENV;
};
