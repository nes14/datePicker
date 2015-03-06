Router.route('/', {
  name: 'dashboard'
});
Router.route('/loginPage', {
  name: 'loginPage'
});

Router.route('/profile');
Router.route('/friends');

Router.route('/makeEvent',{
	name: 'makeEvent'
});

Router.route('/eventPage/:_id',{
	name: 'eventPage'
});
