// Meteor.subscribe('recipies');

Template.RecipeSingle.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe('singleRecipe', id)
  })
})

Template.RecipeSingle.helpers({
  recipe: ()=> {
    var id = FlowRouter.getParam('id');
    return Recipies.findOne({_id: id});
  }
})
