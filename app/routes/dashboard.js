import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      users: this.get('store').findAll('user')
    });
    // return {
    //   data: {
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //     datasets: [{
    //         label: '# of Votes',
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //             'rgba(3, 208, 142, 0.2)',
    //         ],
    //         borderColor: [
    //             '#03d08e'
    //         ],
    //         borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     responsiveAnimationDuration: 100,
    //     maintainAspectRatio: false
    //   },
    // }
  }
});
