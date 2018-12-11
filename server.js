const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const IngerdientsDispatcher = require('./src/dispatcher');
const IngredientsStore = require('./src/store');
const { showNewIngredients } = require('./src/actions');
const createStirFryGeneratorContainer = require('./src/container');

const server = express();

const createPageHTML = (appHTML, appData) => `
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
            <script>
                window.appData = ${JSON.stringify(appData)}
            </script>
            <script src="./bundle.js"></script>
        </body>
    </html>
`;

server.get('/', (req, res, next) => {
    const ingredientDispatcher = new IngerdientsDispatcher();
    const ingredientsStore = new IngredientsStore(ingredientDispatcher);

    showNewIngredients(ingredientDispatcher, {}, () => {
        const StirFryGeneratorContainer = createStirFryGeneratorContainer(ingredientDispatcher, ingredientsStore);
        const App = React.createElement(StirFryGeneratorContainer);
        const appHTML = ReactDOMServer.renderToString(App);
        const appData = ingredientsStore.dehydrate();
        const pageHTML = createPageHTML(appHTML, appData);

        res.send(pageHTML);
    });
});

server.get('/bundle.js', (req, res, next) => {
    res.sendFile(__dirname + req.path);
});

server.listen(8080, () => console.log('Server on.'));
