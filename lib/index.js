'use strict';

var _terminalKit = require('terminal-kit');

var items = ['Express.js', 'Fastify.js', 'Without Framework'];

_terminalKit.terminal.white.bgBlack.bold.italic(' Node.js Boilerplate \n by https://github.com/jack5341 \n\n Choose a framework;');
_terminalKit.terminal.singleColumnMenu(items, function (error, response) {
    (0, _terminalKit.terminal)('\n').eraseLineAfter.green("Installing " + response.selectedText);
    process.exit();
});