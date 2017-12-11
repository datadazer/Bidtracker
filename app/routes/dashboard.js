import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
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
      options: {
        responsive: true,
        responsiveAnimationDuration: 100,
        maintainAspectRation: false
      },
    }
  }
});
