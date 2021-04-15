"use strict";

var _terminalKit = require("terminal-kit");

var _shelljs = require("shelljs");

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = ['Express.js', 'Fastify.js'];

_terminalKit.terminal.white.bgBlack.bold.italic(' Node.js Boilerplate \n by https://github.com/jack5341 \n\n Choose a framework;');
_terminalKit.terminal.singleColumnMenu(items, function (error, response) {
    (0, _terminalKit.terminal)('\n').eraseLineAfter.green("Installing " + response.selectedText + "\n");
    filterRepsonse(response.selectedIndex);
    process.exit();
});

function filterRepsonse(x) {
    switch (x) {
        case 0:
            cloneBoi("git clone git@github.com:jack5341/expressjs-boilerplate.git");
            break;
        case 1:
            cloneBoi("git clone git@github.com:jack5341/fastifyjs-boilerplate.git");
            break;
        default:
            break;
    }
}

function cloneBoi(url) {
    _shelljs2.default.exec(url);
    _terminalKit.terminal.white("Your boilerplate is ready 😉");
}