'use strict';
var Fluxxor = require('fluxxor');

var NoteStore = require('../stores/notes-store');

var constants = require('./constants');

var actions = {
  addNote: function (note) {
    this.dispatch(constants.ADD_NOTE, note);
  },

  deleteNote: function (note) {
    this.dispatch(constants.REMOVE_NOTE, note);
  }
};

var stores = {
  NoteStore: new NoteStore()
};

module.exports = new Fluxxor.Flux(stores, actions);


