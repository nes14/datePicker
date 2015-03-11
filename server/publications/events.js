Meteor.publish('events', function(){
	return Events.find({userId: this.userId});
});

Meteor.publish('findById', function(someId){
	return Events.find({_id: someId});
});

Meteor.publish('usersDates', function(){
	return Events.find({
		userId: this.userId, 
		
	});
});