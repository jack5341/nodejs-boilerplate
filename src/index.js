import { terminal } from "terminal-kit"

var items = [
    'Express.js',
    'Fastify.js',
    'Without Framework'
];

terminal.white.bgBlack.bold.italic(' Node.js Boilerplate \n by https://github.com/jack5341 \n\n Choose a framework;')
terminal.singleColumnMenu(items, function (error, response) {
    terminal('\n').eraseLineAfter.green("Installing " + response.selectedText)
    process.exit();
});