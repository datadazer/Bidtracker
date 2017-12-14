import Base from 'ember-simple-auth/authenticators/base';
import Torii from 'ember-simple-auth/authenticators/torii';
const { service } = Ember.inject;

export default Torii.extend({
  torii: service('torii'),
  authenticate(options) {
    return this._super(options).then(function (data) {
      alert(`authorizationCode:\n${data.authorizationCode}\nprovider: ${data.provider}\nredirectUri: ${data.redirectUri}`);
    });
  }
    /*
  restore(data) {
  },

  authenticate() {
  },

  invalidate(data) {
  }*/
});
