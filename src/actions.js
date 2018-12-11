const ingredientDispatcher = require('./dispatcher');
const { get } = require('./utils');

const actionTypes = {
    RECEIVE_INGREDIENTS: 'RECEIVE_INGREDIENTTS'
};

const showNewIngredients = (dispatcher, payload, done) => {
    get('http://localhost:8000', data => {
        const { ingredients } = data;

        dispatcher.dispatch({
            type: actionTypes.RECEIVE_INGREDIENTS,
            ingredients
        });

        return done && done();
    });
};

module.exports = { actionTypes, showNewIngredients };
