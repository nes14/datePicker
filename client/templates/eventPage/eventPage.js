
Template.eventPage.helpers({
	 currentEvent: function(){
	 	return Events.find({_id: Session.get('newEventId')});
	 }
});


