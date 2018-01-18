import DS from 'ember-data';

export default DS.Model.extend({
  job: DS.attr('string'),
  location: DS.attr('string')
  // estimator: 
});
