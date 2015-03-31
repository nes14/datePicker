Template.eventPage.rendered = function(){
    /*Getting Event data from iron-router and storing it into an array*/
    var eventData = this.data.dates;



    console.log( this.data.groupMembers);

    var calendar = $('#eventCalendar').fullCalendar({
        /*dayRender function handling the intial rendering of days on page load*/
        dayRender: function (date, cell) {
            /*For each item in the eventData onLoad adding the toggleOn class*/
            $.each(eventData,function(index,value){
                $("td[data-date='"+value+"']").addClass('toggleOn');
            });
        }
    })
};
Template.eventPage.helpers({

    /* this is just an example from the makeEvent Page
        Needs to loop thru the ids stored in this.data.groupMembers and pull the ids
        This its an issue with this.data need to pull it from the Events array directly
        unsure atm how to get the id without this
     */
   // friends: function () {
        //var members = ;
        //console.log(members);
        //return Meteor.users.find({ _id: { $in: Meteor.userDirectory() } })
  //  }


});
