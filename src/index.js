import { terminal } from "terminal-kit"
import shell from "shelljs"

var items = [
    'Express.js',
    'Fastify.js',
    'Without Framework'
];

terminal.white.bgBlack.bold.italic(' Node.js Boilerplate \n by https://github.com/jack5341 \n\n Choose a framework;')
terminal.singleColumnMenu(items, function (error, response) {
    terminal('\n').eraseLineAfter.green("Installing " + response.selectedText + "\n")
    filterRepsonse(response.selectedIndex)
    process.exit();
});

function filterRepsonse(x) {
    switch (x) {
        case 0:
            cloneBoi("git clone git@github.com:jack5341/ugur-anderungsschneiderei.git")
            break;
        case 1:
            cloneBoi("git clone git@github.com:jack5341/ugur-anderungsschneiderei.git")
            break;
        case 2:
            cloneBoi("git clone git@github.com:jack5341/ugur-anderungsschneiderei.git")
            break;
        default:
            break;
    }
}

function cloneBoi (url) {
    shell.exec(url)
    terminal.white("Your boilerplate is ready 😉")
}