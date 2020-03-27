import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './helloWorld/HelloWorld';

import MoviesContainer from './listDataApi/MoviesContainer';

import CardContainer from './liftingStateUp/CardContainer';

const containerApp = document.getElementById('root');

ReactDOM.render(<CardContainer />, containerApp)