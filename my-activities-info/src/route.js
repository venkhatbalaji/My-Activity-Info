import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import App from './components/App';
import { MYACTIVITY, START, LOGIN, PAGE_NOT_FOUND } from './util/constants/endpoints';
import LoginPage from './containers/login/LoginPage.jsx';


export default (
    <BrowserRouter>
        <Route path={START} component={App}/>
        <Route path={MYACTIVITY} />
        <Route path={LOGIN} component={LoginPage} />
        <Route path={PAGE_NOT_FOUND} />
    </BrowserRouter>
);
