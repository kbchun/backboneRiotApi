// SongQueueView.js - Defines a backbone view class for the song queue.
var WindowTargetView = Backbone.View.extend({
  
  tagName: 'table',

  initialize: function() {
    this.collection.on('display', this.render, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Statistics</th>').append(
      this.collection.map(function(game) {
        return new TargetView({model: game}).render();
      })
    );
  }

});
