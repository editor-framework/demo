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
    // create main window
    let mainWin = new Editor.Window('main', {
      title: 'Editor Framework',
      width: 900,
      height: 700,
      minWidth: 900,
      minHeight: 700,
      show: false,
      resizable: true,
    });
    Editor.Window.main = mainWin;

    // restore window size and position
    mainWin.restorePositionAndSize();

    // load and show main window
    // mainWin.nativeWin.once('ready-to-show', () => {
    //   mainWin.show();
    // });
    mainWin.show();

    // page-level test case
    mainWin.load( 'app://index.html' );

    // open dev tools if needed
    if ( Editor.argv.showDevtools ) {
      // NOTE: open dev-tools before did-finish-load will make it insert an unused <style> in page-level
      mainWin.nativeWin.webContents.once('did-finish-load', function () {
        mainWin.openDevTools();
      });
    }
    mainWin.focus();
  },
});
