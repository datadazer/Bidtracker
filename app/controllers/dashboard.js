import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
  session: Ember.inject.service('session')
});
