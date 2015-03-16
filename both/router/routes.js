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

Router.route('/eventPage/:_id', function(){
	var id = this.params._id;
	this.render('eventPage', {_id : id});
},{
	name: 'eventPage'
});

Router.route('/editEvent/:_id', function(){
	var id = this.params._id;
	this.render('editEvent', {_id: id});
},{
	name: 'editEvent'
},{
	waitOn: function(){
		return Meteor.subscribe('findById', this.params._id);
	}
});