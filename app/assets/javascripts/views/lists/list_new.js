TrelloClone.Views.ListNew = Backbone.View.extend({
  initialize: function(options){
    this.board_id = options.board_id
  },

  events: {
    "click button#add-list": "createListForm",
    "submit form": "addNewList"
  },

  buttonTemplate: JST['lists/newButton'],
  formTemplate: JST['lists/newForm'],

  render: function(){
    var content = this.buttonTemplate();
    this.$el.html(content);
    return this;
  },

  createListForm: function (event) {
    event.preventDefault();
    var content = this.formTemplate();
    this.$el.html(content);
  },

  addNewList: function (event) {
    event.preventDefault();
    var list = new TrelloClone.Models.List([], { board: this.board });
    var title = $(event.currentTarget).find("#title").val();
    list.save({ title: title, board_id: this.board_id },{
      success: function(){
        this.collection.add(list);
        this.render();
      }.bind(this)
    });
  }
})

