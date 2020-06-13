import React from "react";
import ReactDOM from "react-dom";

// 1. Hello World Example
import HelloWorld from "./helloWorld/HelloWorld";

// 2. List Data Api Example
import MoviesContainer from "./listDataApi/MoviesContainer";

// 3. Lifting State Up Example
import CardContainer from "./liftingStateUp/CardContainer";

// 4. Life Cycle Example
import LifeCycleContainer from "./lifeCycle/LifeCycleContainer";

// 5. React Router Example
import App from "./reactRouter/App";

// 6. Active Links Example
import ActiveLinks from "./activeLinks/ActiveLinks";

// 7. Post Example
import ListFormContainer from "./postTest/ListFormContainer";

// 8. Hook Example
import Counter from "./firstHook/Counter";

// 9. Styled Components Example
import StyledContainer from "./styledComponentsExample/StyledContainer";

// 10. CSS Modules Example
import CssModuleContainer from "./cssModulesExample/CssModuleContainer";

const containerApp = document.getElementById("root");

ReactDOM.render(<CardContainer />, containerApp);
