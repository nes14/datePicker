Template.editEvent.helpers({
	existingEvent: function(){
		var thisEvent = Events.find({_id: this._id});
		var description = $('#editEventDescription');
		console.log(thisEvent);
	}
});