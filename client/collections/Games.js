// Songs.js - Defines a backbone collection class for songs.
var Games = Backbone.Collection.extend({

  model: GameModel,
  url: "https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/",
  secret: "api_key=4a99a25b-dd7e-4698-8256-9b3b773fa3ed",
  summonerID: 46623503,

  parse: function(response) {
    // debugger;
    return response.results;
  },
  
  initialize: function() {
    this.getGames();
  },

  getGames: function() {
    $.ajax({
      url: this.url + this.summonerID + "/recent?" + this.secret,
      // url: "https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/58770522/recent?api_key=4a99a25b-dd7e-4698-8256-9b3b773fa3ed",
      type: "GET",
      dataType: 'json',
      success: function(data) {
        console.log(data);
      },
      error: function(error) {
        console.log("error: " + error);
      }
    });
  }
});