import Route from '@ember/routing/route';

export default Route.extend({
  redirect: function() {
    if (this.get('session.isAuth')) {
      this.transitionTo('dashboard');
    }
  }
});
