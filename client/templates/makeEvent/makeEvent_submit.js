

Template.makeEvent.events({
	'submit form': function(e){
		e.preventDefault();
        var eventDescription = document.getElementById("eventDescription").value;
		var newEvent = {
<<<<<<< HEAD
			'userId': Meteor.userId(),
=======

>>>>>>> origin/mf-styling
			'eventName': $(e.target).parent().find('#eventName').val(),
			'description': eventDescription,
			'targetMonth': $(e.target).parent().find('#monthPicked').val()
		};
		newEvent._id = Events.insert(newEvent);
		Session.set('newEventId', newEvent._id);
		Router.go('eventPage', newEvent)
	}
});