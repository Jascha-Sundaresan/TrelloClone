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
    var view = new TrelloClone.Views.BoardShow({ model: board });
    $boardEl = $("<div>");
    $boardEl.attr("id", "board");
    this.$mainEl.html($boardEl);
    $boardEl.html(view.$el);
    view.render();
  },

  index: function() {
    $boardsEl = $("<div>");
    $boardsEl.attr("id", "boards");
    this.$mainEl.html($boardsEl);
    var view = new TrelloClone.Views.BoardsIndex({ collection: this.boards });
    $boardsEl.html(view.$el);
    view.render();
    var boardButtonView = new TrelloClone.Views.BoardNew( { collection: this.boards } );
    $newForm = $("<div>");
    $newForm.attr("id", "new-form");
    $newForm.html(boardButtonView.$el);
    $boardsEl.append($newForm);
    boardButtonView.renderButton();
  }

});
