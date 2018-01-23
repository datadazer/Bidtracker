import Ember from 'ember';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  session: Ember.inject.service('session'),
  grossProfitTotal: computed("${this.get('model.bids')}", function() {
    let grossProfitAvgAggregation = 0;
    this.get('model.bids').forEach(function(bid) {
      grossProfitAvgAggregation += bid.get('grossProfit');
    })
    return (grossProfitAvgAggregation).toLocaleString();
  }),
  directMarginAvg: computed("${this.get('model.bids')}", function() {
    let directMarginAggregation = 0;
    this.get('model.bids').forEach(function(bid) {
      directMarginAggregation += bid.get('directMargin');
    })
    return directMarginAggregation / this.get('model.bids.length');
  }),
  grossProfitData: {
    labels: ["12/1", "12/2", "12/3", "12/4", "12/5", "12/6"],
      datasets: [{
        label: 'DM%',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
         'rgba(45, 227, 113, 0.2)',
        ],
        borderColor: [
         '#1fd06e'
        ],
        borderWidth: 1
     }]
  },

  chartOptions: {
    responsive: true,
    responsiveAnimationDuration: 100,
    maintainAspectRatio: false
  }
});
