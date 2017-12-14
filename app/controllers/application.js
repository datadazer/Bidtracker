import Controller from '@ember/controller';

export default Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    authenticateSession() {
      this.get('session').authenticate('authenticator:torii', 'google-oauth2');
    },
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
