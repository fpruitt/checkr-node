var TerroristWatchlistSearch;
var request = require('reqwest');

function TerroristWatchlistSearch (config) {
  this.uri = config.endpoint + 'terrorist_watchlist_searches';
  this.apiKey = config.apiKey;
  return this;
}

TerroristWatchlistSearch.prototype.retrieve = function (id, done) {
  request(
    {
      url: this.uri + '/' + id,
      auth: {
        user: this.apiKey,
        password: ''
      },
      json: true,
      method: 'GET'
    }, function (e, r, body) {
      if (body.message) {
        done(body.message, body);
      } else {
        done(e, body);
      }
    });
  return true;
};

module.exports = TerroristWatchlistSearch;
