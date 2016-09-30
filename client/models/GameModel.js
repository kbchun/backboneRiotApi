// SongModel.js - Defines a backbone model class for songs.
var GameModel = Backbone.Model.extend({

  // play: function() {
  //   // Triggering an event here will also trigger the event on the collection
  //   this.trigger('play', this);
  // },

  add: function() {
    this.trigger('add', this);
  },
  
  display: function() {
    this.trigger('display', this);
  }
});
