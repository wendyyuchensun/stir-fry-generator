const React = require('react');
const ReactDOM = require('react-dom');

const GenerateBtn = () => React.createElement('button', { key: 0 }, 'Generate');
const Ingredients = () => React.createElement('h2', { key: 1 }, 'Cabbage, chili, sesame oil, chicken, spring onion');

const StirFryGenerator = () => React.createElement('div', null, [GenerateBtn(), Ingredients()]);
const root = document.querySelector('.root');

ReactDOM.render(React.createElement(StirFryGenerator), root);
