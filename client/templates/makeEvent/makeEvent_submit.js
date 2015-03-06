Template.makeEvent.events({
	'submit form': function(e){
		e.preventDefault();
		var newEvent = {
			eventName: $(e.target).find('#eventName').val(),
			description: $(e.target).find('#eventDescription').val(),
			targetMonth: $(e.target).find('#monthPicked').val()
		};
		events._id = Events.insert(newEvent);
		Router.go('eventPage', newEvent)
	}, 
	'change': function(e){
		if(e.target === $('#monthPicked')){
			console.log('sweet');
		}
	}
});