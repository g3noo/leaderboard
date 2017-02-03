PlayersList = new Mongo.Collection('players');


if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    },
    'otherHelperFunction': function(){
      return "Some other function";
    },
    'playerCount': function(){
      return PlayersList.find().count();
    }
  });
  Template.leaderboard.events({
    'dblclick .player': function(){
      console.log("you clicked a player element");
    }
  });


}

if(Meteor.isServer){
}
