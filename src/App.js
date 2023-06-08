import React from "react";
import Index from "pages/index";
import Work from "pages/work";
import Pwdsignup from "pages/pwdsignup";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/work' component={Work}/>
			<Route exact path='/pwdsignup' component={Pwdsignup}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
