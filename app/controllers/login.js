import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    authenticateSession() {
      const _this = this;
      this.get('session').authenticate('authenticator:torii', 'google-oauth2').then(function() {
        _this.transitionToRoute('dashboard');
      });
    },
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
