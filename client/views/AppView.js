// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    // this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.targetView = new TargetView({model: this.model.get('targetGame')});
    // debugger;
    // this.songView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change', function(model) {
      this.targetView.setGame(model);
    }, this);
  },

  render: function() {
    return this.$el.html([
    this.libraryView.$el,
    this.targetView.$el
    ]);
  }

});
