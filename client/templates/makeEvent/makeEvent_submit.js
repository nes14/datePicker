

Template.makeEvent.events({
	'submit form': function(e){
		e.preventDefault();
		var newEvent = {
			'userId': Meteor.userId(),
			'eventName': $(e.target).parent().find('#eventName').val(),
			'description': $(e.target).parent().find('#eventDescription').val(),
			'targetMonth': $(e.target).parent().find('#monthPicked').val()
		};
		newEvent._id = Events.insert(newEvent);
		Session.set('newEventId', newEvent._id);
		Router.go('eventPage', newEvent)
	}
});