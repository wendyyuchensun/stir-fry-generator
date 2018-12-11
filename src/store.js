const { ReduceStore } = require('flux/utils');
const { actionTypes, showNewIngredients } = require('./actions');

class IngredientsStore extends ReduceStore {
    constructor(dispatcher) {
        super(dispatcher);
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

    dehydrate () {
        return this.getState();
    }

    rehydrate (state) {
        this._state = state;
    }
}

module.exports = IngredientsStore;
