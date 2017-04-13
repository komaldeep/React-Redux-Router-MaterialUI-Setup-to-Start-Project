
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/AppStore';
import { createStore } from 'redux';
import AppList from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



render(
    <MuiThemeProvider>
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={AppList}/>
        </BrowserRouter>
    </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'));