TrelloClone.Collections.Lists = Backbone.Collection.extend({

  initialize: function(modelArray, options){
    this.board = options.board;
  },

  url: function(){ 
    return this.board.url() + "/lists"
  },

  model: TrelloClone.Models.List

});