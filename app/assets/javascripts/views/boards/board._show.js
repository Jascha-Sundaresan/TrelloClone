TrelloClone.Views.BoardShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  template: JST['boards/show'],

  render: function(){
    var content = this.template({ board: this.model });
    this.$el.html(content);
    var $lists = $("<div>");
    $lists.attr("id", "lists");
    this.$el.append($lists);
    this.model.lists().each(function (list){
      var view = new TrelloClone.Views.ListShow({ model: list });
      $lists.append(view.$el);
      view.render();
    });
  }
})
