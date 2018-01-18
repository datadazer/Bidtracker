import JSONAPIAdapter from 'ember-data/adapters/json-api';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';

export default JSONAPIAdapter.extend({

  pathForType(type) {
    return pluralize(underscore(type));
  }

});
