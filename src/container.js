const { Container } = require('flux/utils');
const { showNewIngredients } = require('./actions');
const ingredientsStore = require('./store');
const StirFryGenerator = require('./view');
const ingredients = require('./ingredients');

const getStores = () => [ ingredientsStore ];
const getState = () => ({
    ingredients: ingredientsStore.getState(),
    updateIngredients: () => showNewIngredients(ingredients)
});

const StirFryGeneratorContainer = Container.createFunctional(
    StirFryGenerator,
    getStores,
    getState
);

module.exports = StirFryGeneratorContainer;
