// Meteor.subscribe('recipies');

Template.Recipies.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('recipies')
  })
})

Template.Recipies.helpers({
  recipies: ()=> {
    return Recipies.find({});
  }
})
