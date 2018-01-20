import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';

export default Component.extend({
  session: Ember.inject.service('session'),
  grossProfitAvg: computed("${this.get('model.bids')}", function() {
    let grossProfitAvgAggregation = 0;
    this.get('model.bids').forEach(function(bid) {
      grossProfitAvgAggregation += bid.get('grossProfit');
    })
    return grossProfitAvgAggregation / this.get('model.bids.length');
  }),
});
