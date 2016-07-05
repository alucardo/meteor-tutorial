Meteor.publish('recipies', function(){
  return Recipies.find({author: this.userId});
})

Meteor.publish('singleRecipe', function(id){
  check(id, String);
  return Recipies.find({_id: id});
})
