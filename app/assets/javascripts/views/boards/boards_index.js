TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo( this.collection, "sync remove", this.render);
    this.addNewBoardView();
  },

  template: JST['boards/index'],
  
  addNewBoardView: function(){
    var boardButtonView = new TrelloClone.Views.BoardNew({ collection: this.boards });
    this.addSubview('#new-board', boardButtonView)    
  },

  render: function(){
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});