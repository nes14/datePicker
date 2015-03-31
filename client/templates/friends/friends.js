Template.friends.rendered = function() {
};


Template.friends.events({'submit form' : function(event, template) {
    event.preventDefault(); //prevent page reload
    var email = event.target.Email.value;
    var result = {
        'result' : Meteor.users.find({ "emails.address" : email })
    };

    console.log(result);

},
    'click .addBtn': function(e) {
        e.preventDefault();
        var thisId = this._id;
        console.log(thisId);


        Meteor.users.update({_id: Meteor.user()._id}, {
            $addToSet: {
                "profile.friends": thisId

            }
        })

    }


});

Template.friends.helpers({

    userDirectory: function () {
        return Meteor.users.find();
    }


});
