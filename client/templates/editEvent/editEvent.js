Template.editEvent.events({
	'submit form': function(e){
		e.preventDefault();
		var eventDescription = document.getElementById("editEventDescription").value;
		var updatedEvent = {
			'eventName': $(e.target).parent().find('#editEventName').val(),
			'description': eventDescription,
			'targetMonth': $(e.target).parent().find('#editMonthPicked').val()
		};
		Events.update(
			{'_id': this._id},
			{$set: 
				{
					eventName: updatedEvent.eventName,
					description: updatedEvent.description,
					targetMonth: updatedEvent.targetMonth
				}
			}
		);//closes Events.update
		Router.go('eventPage', {_id: this._id});
	}//closes submit form function
});//closes template events helper