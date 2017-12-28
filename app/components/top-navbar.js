import Component from '@ember/component';

export default Component.extend({
  session: Ember.inject.service('session'),
  routing: Ember.inject.service('-routing'),
  actions: {
    authenticateSession() {
      this.get('session').authenticate('authenticator:torii', 'google-oauth2');
    },
    invalidateSession() {
      const _this = this;
      this.get('session').invalidate().then(function() {
        _this.get('routing').transitionTo('login');
      });
    }
  }
});
