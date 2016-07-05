Meteor.subscribe('recipies');

Template.Recipies.helpers({
  recipies: ()=> {
    return Recipies.find({});
  }
})
