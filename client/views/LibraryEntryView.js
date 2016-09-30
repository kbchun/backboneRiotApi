// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
  // SHOULD BE DISPLAYING GAME TITLES: SUMMONER, CHAMP, KDA
  // template1: _.template('<td>Win? <%= win %></td>'),
  // template2: _.template('<td>Game Type: <%= subType %>, <%= gameMode %></td>'),
  template: _.template('<td>Champion: <%= champion %>, K/D/A: <%= kills %>/<%= deaths %>/<%= assists %></td>'),

  events: {
    'click': function() {
      this.model.display();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
