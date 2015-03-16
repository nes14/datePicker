Template.editEvent.helpers({
	existingEvent: function(){
		var thisEvent = Events.findOne({_id: this._id});
		var description = $('#editEventDescription');
		description.val(thisEvent.description);
	}
});