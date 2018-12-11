const { Container } = require('flux/utils');
const { showIngredients } = require('./actions');
const ingredientsStore = require('./store');
const StirFryGenerator = require('./view');
const ingredients = require('./ingredients');

const getStores = () => [ ingredientsStore ];
const getState = () => ({
    ingredients: ingredientsStore.getState(),
    updateIngredients: () => showIngredients(ingredients)
});

const StirFryGeneratorContainer = Container.createFunctional(
    StirFryGenerator,
    getStores,
    getState
);

module.exports = StirFryGeneratorContainer;
