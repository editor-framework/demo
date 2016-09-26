'use strict';

const Editor = require('../index');

Editor.App.extend({
  init ( opts, cb ) {
    Editor.init({
      'package-search-path': [
        'app://packages/',
        'app://package-examples/',
      ],
      'panel-window': 'app://window.html',
      'layout': 'app://layout.json',
    });

    if ( cb ) {
      cb ();
    }
  },

  run () {
    Editor.run('app://index.html', {
      title: 'Editor Framework',
      width: 900,
      height: 700,
      minWidth: 900,
      minHeight: 700,
      show: false,
      resizable: true,
    });
  },
});
