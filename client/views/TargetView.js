var TargetView = Backbone.View.extend({

  tagName: 'table',

  // SHOULD BE DISPLAYING STATS
  template: _.template(`<td>Win?: <%= win %><br>
    Total Damage Dealt to Champions: <%= totalDamageDealtToChampions %><br>
    Total Damage Taken: <%= totalDamageTaken %><br>
    Wards Placed: <%= wardPlaced %><br>
    Wards Killed: <%= wardKilled %><br>
    Player Role: <%= playerRole %><br>
    Largest Multi Kill: <%= largestMultiKill %><br>
    Largest Killing Spree: <%= largestKillingSpree %><br>
    Time Played: <%= timePlayed %> minutes
    </td>`),

  initialize: function() {
    // this.model.on('display', this.render, this);
    this.model.on('change', this.render, this);
  },

  setGame: function(game) {
    this.model = game;
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    // this.$el.children().detach();
    // debugger;
    this.$el.children().detach();
    // var $stats = $('<th>Stats</th>');
    return this.$el.html('<th>Statistics</th>').append(this.template(this.model.attributes.targetGame.attributes));
  }

});
// this.$el.html('<th>Statistics</th>').append(
//       for(var key in this.model.attributes) {

//       }