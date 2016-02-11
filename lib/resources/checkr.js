'use strict';

var Candidates = require('./Candidates');
var Reports = require('./Reports');
var SsnTrace = require('./SsnTrace');
var SexOffenderSearch = require('./SexOffenderSearch');
var TerroristWatchlistSearch = require('./TerroristWatchlistSearch');
var NationalCriminalSearch = require('./NationalCriminalSearch');
var CountyCriminalSearch = require ('./CountyCriminalSearch');
var MotorVehicleReport = require('./MotorVehicleReport');

var Checkr = function (apiKey) {
  if (this === undefined) {
    return new Checkr(apiKey);
  }
  if (typeof apiKey === 'string') {
    this.endpoint = 'https://api.checkr.io/v1/';
    this.apiKey = apiKey;
  } else {
    throw new Error('API Key must be set');
  }
  this.candidates = new Candidates(this);
  this.reports = new Reports(this);
  this.ssnTrace = new SsnTrace(this);
  this.sexOffenderSearch = new SexOffenderSearch(this);
  this.terroristWatchlistSearch = new TerroristWatchlistSearch(this);
  this.nationalCriminalSearch = new NationalCriminalSearch(this);
  this.countyCriminalSearch = new CountyCriminalSearch(this);
  this.motorVehicleReport = new MotorVehicleReport(this);
};

module.exports = Checkr;
