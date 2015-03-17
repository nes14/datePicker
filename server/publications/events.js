Meteor.publish('events', function(){
	return Events.find({userId: this.userId});
});

<<<<<<< HEAD
Meteor.publish('findById', function(someId){
	return Events.find({_id: someId});
=======
Meteor.publish('findById', function(){
	return Events.find({_id: this._id});
>>>>>>> mf-second-branch
});

Meteor.publish('usersDates', function(){
	return Events.find({
		userId: this.userId //,
		//todo: add selector for events user is invited to 
		//as well as the events made by user
	});
});