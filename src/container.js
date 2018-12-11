const { Container } = require('flux/utils');
const { showNewIngredients } = require('./actions');
const ingredientsStore = require('./store');
const StirFryGenerator = require('./view');
const ingredients = require('./ingredients');

const createStirFryGeneratorContainer = (dispatcher, store) => {
    const getStores = () => [ store ];
    const getState = () => ({
        ingredients: store.getState(),
        updateIngredients: () => showNewIngredients(dispatcher, {}, null)
    });

    return Container.createFunctional(
        StirFryGenerator,
        getStores,
        getState
    );
} 

module.exports = createStirFryGeneratorContainer;
