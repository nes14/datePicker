latestEvent = Session.get('newEventId');

Template.eventPage.helpers({
	 currentEvent: function(){
	 	return Events.find({_id: latestEvent});
	 }
});
