const ingredientDispatcher = require('./dispatcher');

const actionTypes = {
    RECEIVE_INGREDIENTS: 'RECEIVE_INGREDIENTTS'
};

const showIngredients = ingredients => {
    ingredientDispatcher.dispatch({
        type: actionTypes.RECEIVE_INGREDIENTS,
        ingredients
    });
};

module.exports = { actionTypes, showIngredients };
