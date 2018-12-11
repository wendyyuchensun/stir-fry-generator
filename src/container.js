const { Container } = require('flux/utils');
const { showIngredients } = require('./actions');
const ingredientsStore = require('./store');
const StirFryGenerator = require('./view');
const { ingredients2 } = require('./ingredients');

const getStores = () => [ ingredientsStore ];
const getState = () => ({
    ingredients: ingredientsStore.getState(),
    updateIngredients: () => showIngredients(ingredients2)
});

const StirFryGeneratorContainer = Container.createFunctional(
    StirFryGenerator,
    getStores,
    getState
);

module.exports = StirFryGeneratorContainer;
