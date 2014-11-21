window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new TrelloClone.Routers.Boards({
      "$mainEl": $("#main"),
    });
    Backbone.history.start();
  }
};
