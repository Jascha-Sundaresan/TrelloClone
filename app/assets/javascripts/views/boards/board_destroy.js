TrelloClone.Views.BoardDestroy = Backbone.CompositeView.extend({
  
  events: {
    "click button#destroy-board": "createDestroyQuery",
    "submit form": "destroyBoard"
  },
  
  buttonTemplate: JST['boards/destroyButton'],
  queryTemplate: JST['boards/destroyQuery'],
  
  createDestroyQuery: function (event) {
    event.preventDefault();
    var that = this;
    this.model.destroy({
      success: function (){
        that.collection.remove(that.model);
        Backbone.history.navigate("", { trigger: true });
      }
    });
    
//     var content = this.queryTemplate();
//     this.$el.html(content);
  },
  
  destroyQuery: function(event) {
    event.preventDefault();
    debugger
    var answer = $(event.currentTarget).find("").val();
  },
  
  render: function(){
    var content = this.buttonTemplate();
    this.$el.html(content);
    return this;
  }
});