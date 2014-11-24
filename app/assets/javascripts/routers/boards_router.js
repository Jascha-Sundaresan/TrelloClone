TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function (options) {
    this.$mainEl = options.$mainEl;
    this.boards = new TrelloClone.Collections.Boards();
    this.boards.fetch();
  },
  

  routes: {
    "": "index",
    "boards/:id": "show"
  },

  show: function(id) {
    var board = this.boards.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({ model: board, collection: this.boards });
    this.$mainEl.html(view.$el);
    view.render();
  },

  index: function() {
    var view = new TrelloClone.Views.BoardsIndex({ collection: this.boards });
    this.$mainEl.html(view.$el);
    view.render();
  }

});
