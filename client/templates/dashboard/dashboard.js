Template.dashboard.helpers({
	createdByUser: function(){
		return Events.find({userId: Meteor.userId()});
	}
});

Template.dashboard.events({
	'click .eventLink': function(e){
		e.preventDefault();
		var thisId = this._id;
		Session.set('newEventId', thisId);
		Router.go('eventPage', {_id: thisId});
	}
});
