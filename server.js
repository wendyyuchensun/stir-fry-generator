const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { showIngredients } = require('./src/actions');
const StirFryGeneratorContainer = require('./src/container');

const server = express();

const createPageHTML = appHTML => `
    <html>
        <header>
            <title>Stir Fry Generator</title>
            <style>
                body {
                    padding: 100px;
                    text-align: center;
                }
            </style>
        </header>
        <body>
            <h1>Stir Fry Generator</h1>
            <div class="root">${appHTML}</div>
            <script src="./bundle.js"></script>
        </body>
    </html>
`;

server.get('/', (req, res, next) => {
    const App = React.createElement(StirFryGeneratorContainer);
    const appHTML = ReactDOMServer.renderToString(App);
    const pageHTML = createPageHTML(appHTML);

    res.send(pageHTML);
});

server.get('/bundle.js', (req, res, next) => {
    res.sendFile(__dirname + req.path);
});

server.listen(8080, () => console.log('Server on.'));
