import React from "react";
import ReactDOM from "react-dom";

// Hello World Example
import HelloWorld from "./helloWorld/HelloWorld";

// List Data Api Example
import MoviesContainer from "./listDataApi/MoviesContainer";

// Lifting State Up Example
import CardContainer from "./liftingStateUp/CardContainer";

// Life Cycle Example
import LifeCycleContainer from "./lifeCycle/LifeCycleContainer";

// React Router Example
import App from "./reactRouter/App";

// Active Links Example
import ActiveLinks from "./activeLinks/ActiveLinks";

// Post Example
import ListFormContainer from "./postTest/ListFormContainer";

// Hook Example
import Counter from "./firstHook/Counter";

// Styled Components Example
import StyledContainer from "./styledExample/StyledContainer";

// CSS Modules Example
import CssModuleContainer from "./cssModulesExample/CssModuleContainer";

const containerApp = document.getElementById("root");

ReactDOM.render(<StyledContainer />, containerApp);
