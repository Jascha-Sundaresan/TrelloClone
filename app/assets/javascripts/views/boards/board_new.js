TrelloClone.Views.BoardNew = Backbone.View.extend({

  events: {
    "click button#add-board": "createBoardForm",
    "submit form": "addNewBoard"
  },

  buttonTemplate: JST['boards/newButton'],
  formTemplate: JST['boards/newForm'],

  createBoardForm: function (event) {
    event.preventDefault();
    var content = this.formTemplate();
    this.$el.html(content);
  },

  addNewBoard: function (event) {
    event.preventDefault();
    var model = new TrelloClone.Models.Board();
    var title = $(event.currentTarget).find("#title").val();
    var that = this;
    model.save({ title: title },{
      success: function (){
        var urlString = "#boards/" + model.escape("id");
        Backbone.history.navigate(urlString, { trigger: true });
      }
    });
  },

  render: function(){
    var content = this.buttonTemplate();
    this.$el.html(content);
    return this;
  }

})

