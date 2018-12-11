const React = require('react');

const GenerateBtn = ({ updateIngredients }) => {
    return React.createElement('button', {
        onClick: updateIngredients
    }, 'Generate')
};

const IngredientsLine = ({ ingredients }) => {
    const line = ingredients.length
        ? ingredients.join(', ')
        : 'No ingredients yet.';

    return React.createElement('h2', null, line);
};

const StirFryGenerator = ({ ingredients, updateIngredients }) => {
    return React.createElement('div', null, [
        React.createElement(GenerateBtn, { key: '0', updateIngredients }, null),
        React.createElement(IngredientsLine, { key: '1', ingredients }, null),
    ]);
};

module.exports = StirFryGenerator;
