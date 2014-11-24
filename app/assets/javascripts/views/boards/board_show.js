TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.addListShowView);
    this.addNewListView();
    this.addDestroyBoardView();
  },
  
  addDestroyBoardView: function(){
    var destroyBoardView = new TrelloClone.Views.BoardDestroy({ model: this.model, collection: this.collection });
    this.addSubview('#destroy-board', destroyBoardView);
  },
  
  addNewListView: function () {
    var listButtonView = new TrelloClone.Views.ListNew({ 
      collection: this.model.lists(), 
      board_id: this.model.get('id') 
    });
    this.addSubview('#new-list', listButtonView);
  },
  
  addListShowView: function (list) {
    var listShowView = new TrelloClone.Views.ListShow({ model: list });
    this.addSubview('#lists', listShowView);
  },

  template: JST['boards/show'],

  render: function(){
    var content = this.template({ board: this.model });
    this.$el.html(content);
    
    this.attachSubviews();
    return this;
  }
})
