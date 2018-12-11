const { ReduceStore } = require('flux/utils');
const ingredientDispatcher = require('./dispatcher');
const { actionTypes } = require('./actions');

class IngredientsStore extends ReduceStore {
    constructor () {
        super(ingredientDispatcher);
    }

    getInitialState () {
        return [];
    }

    reduce (state, action) {
        switch (action.type) {
            case actionTypes.RECEIVE_INGREDIENTS:
                return action.ingredients;
            default:
                return state;
        } 
    }
}

const ingredientsStore = new IngredientsStore();

module.exports = ingredientsStore;
