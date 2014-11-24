TrelloClone.Views.ListNew = Backbone.View.extend({

  events: {
    "click button#add-list": "createListForm",
    "submit form": "addNewList"
  },

  buttonTemplate: JST['lists/newButton'],
  formTemplate: JST['lists/newForm'],

  renderButton: function(){
    var content = this.buttonTemplate();
    this.$el.html(content);
  },

  createListForm: function (event) {
    event.preventDefault();
    var content = this.formTemplate();
    this.$el.html(content);
  },

  addNewList: function (event) {
    event.preventDefault();
    var list = new TrelloClone.Models.List();
    var title = $(event.currentTarget).find("#title").val();
    list.set("title", title);
    var that = this;
    list.save({},{
      success: function(){
        that.collection.add(list);
        that.renderButton();
      }
    });
  }
})

