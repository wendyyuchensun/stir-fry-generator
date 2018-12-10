// flux: dispatcher, action, store, container

// dispatcher

const { Dispatcher } = require('flux');
const IngredientDispatcher = new Dispatcher();

// action

const ActionTypes = {
    RECEIVE_INGREDIENTS: 'RECEIVE_INGREDIENTTS'
};

const actions = {
    receiveIngredients (ingredients) {
        IngredientDispatcher.dispatch({
            type: ActionTypes.RECEIVE_INGREDIENTS,
            ingredients
        });
    }
};

// store

const { ReduceStore } = require('flux/utils');
class IngredientStore extends ReduceStore {
    constructor () {
        super(IngredientDispatcher);
    }

    getInitialState () {
        return [];
    }

    reduce (state, action) {
        switch (action.type) {
            case ActionTypes.RECEIVE_INGREDIENTS:
                return action.ingredients;
            default:
                return state;
        } 
    }
}

const ingredientStore = new IngredientStore();

// view

const React = require('react');

const newIngredients = ['sesame oil', 'garlic', 'chili', 'chicken', 'cabbage'];

const GenerateBtn = () => {
    return React.createElement('button', {
        onClick: () => actions.receiveIngredients(newIngredients)
    }, 'Generate')
};

const IngredientsLine = ({ ingredients }) => {
    const wording = ingredients.length
        ? ingredients.join(', ')
        : 'no ingredient yet';

    return React.createElement('h2', null, wording);
}

const StirFryGenerator = ({ ingredients }) => {
    return React.createElement('div', null, [
        React.createElement(GenerateBtn, { key: '0' }, null),
        React.createElement(IngredientsLine, { key: '1', ingredients }, null),
    ]);
}

// container

const { Container } = require('flux/utils');

const getStores = () => [ ingredientStore ];
const getState = () => ({
    ingredients: ingredientStore.getState()
});

const StirFryGeneratorContainer = Container.createFunctional(
    StirFryGenerator,
    getStores,
    getState
);

const ReactDOM = require('react-dom');
const root = document.querySelector('.root');
ReactDOM.render(React.createElement(StirFryGeneratorContainer), root);
