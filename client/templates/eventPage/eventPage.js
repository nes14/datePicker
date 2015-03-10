latestEvent = Session.get('newEventId');


Template.eventPage.helpers({
	 currentEvent: function(latestEvent){
	 	return Events.find({_id: latestEvent});
	 }
});

console.log(currentEvent);