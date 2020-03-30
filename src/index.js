import React from 'react';
import ReactDOM from 'react-dom';

// Hello World Example
import HelloWorld from './helloWorld/HelloWorld';

// List Data Api Example
import MoviesContainer from './listDataApi/MoviesContainer';

// Lifting State Up Example
import CardContainer from './liftingStateUp/CardContainer';

import LifeCycleContainer from './lifeCycle/LifeCycleContainer';

const containerApp = document.getElementById('root');

ReactDOM.render(<LifeCycleContainer />, containerApp)