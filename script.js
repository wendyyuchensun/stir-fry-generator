const React = require('react');
const ReactDOM = require('react-dom');
const IngerdientsDispatcher = require('./src/dispatcher');
const IngredientsStore = require('./src/store');
const createStirFryGeneratorContainer = require('./src/container');

const ingredientDispatcher = new IngerdientsDispatcher();
const ingredientsStore = new IngredientsStore(ingredientDispatcher);
ingredientsStore.rehydrate(window.appData);

const root = document.querySelector('.root');

const StirFryGeneratorContainer = createStirFryGeneratorContainer(ingredientDispatcher, ingredientsStore);
ReactDOM.hydrate(React.createElement(StirFryGeneratorContainer), root);
