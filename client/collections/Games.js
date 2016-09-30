// Songs.js - Defines a backbone collection class for songs.
var dataCleaner = function(results) {
  var data = [];
  for (var game in results) {
    // debugger;
    var champion = champData.data[results[game].championId].name;
    var stats = results[game].stats;
    data.push({
      champion: champion,
      totalDamageDealtToChampions: stats.totalDamageDealtToChampions || 0,
      totalDamageTaken: stats.totalDamageTaken || 0,
      wardPlaced: stats.wardPlaced || 0,
      wardKilled: stats.wardKilled || 0,
      playerRole: stats.playerRole,
      assists: stats.assists || 0,
      deaths: stats.numDeaths || 0,
      largestMultiKill: stats.largestMultiKill || 0,
      kills: stats.championsKilled || 0,
      largestKillingSpree: stats.largestKillingSpree || 0,
      win: stats.win,
      timePlayed: (stats.timePlayed/60).toFixed(2),
      ipEarned: results[game].ipEarned
    });
  }
  return data;
};

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
    var context = this;
    $.ajax({
      url: this.url + this.summonerID + "/recent?" + this.secret,
      // url: "https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/58770522/recent?api_key=4a99a25b-dd7e-4698-8256-9b3b773fa3ed",
      type: "GET",
      dataType: 'json',
      success: function(data) {
        var trimmedData = dataCleaner(data.games);
        context.add(trimmedData);
      },
      error: function(error) {
        console.log("error: " + error);
      }
    });
  },

});