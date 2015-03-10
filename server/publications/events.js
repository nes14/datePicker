Meteor.publish('events', function(){
	return Events.find({userId: this.userId});
});

Meteor.publish('findById', function(someId){
	return Events.findOne({_id: this.someId});
});