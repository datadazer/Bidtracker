import Ember from 'ember';
import DS from 'ember-data';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
// import Inflector from 'ember-inflector';
// import { singularize, pluralize } from 'ember-inflector';

// const { String: { underscore } } = Ember;

export default JSONAPIAdapter.extend({

  // pathForType(type) {
  //   return pluralize(underscore(type));
  // }

});
