'use strict';
var React = require('react');
var flux = require('./flux/flux');
var NotesApp = require('./components/notes-controller-view');

React.render(<NotesApp flux={flux}/>, document.body);
