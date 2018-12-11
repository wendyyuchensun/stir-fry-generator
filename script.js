const React = require('react');
const ReactDOM = require('react-dom');
const StirFryGeneratorContainer = require('./src/container');

const root = document.querySelector('.root');

ReactDOM.hydrate(React.createElement(StirFryGeneratorContainer), root);
