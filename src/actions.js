const http = require('http');
const ingredientDispatcher = require('./dispatcher');

const actionTypes = {
    RECEIVE_INGREDIENTS: 'RECEIVE_INGREDIENTTS'
};

const showIngredients = (payload, done) => {
    http.get('http://localhost:8000', res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            const { ingredients } = JSON.parse(data);

            ingredientDispatcher.dispatch({
                type: actionTypes.RECEIVE_INGREDIENTS,
                ingredients
            });

            return done && done();
        });
    });
};

module.exports = { actionTypes, showIngredients };
