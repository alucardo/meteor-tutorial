Template.Menu.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('recipies')
  })
})

Template.Menu.helpers({
  recipies: ()=> {
    return Recipies.find({inMenu: true});
  }
})
