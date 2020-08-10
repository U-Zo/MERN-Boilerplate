import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

const App = () => {
    return (
        <>
            <Route component={LoginPage} path="/login/"/>
            <Route component={MainPage} path="/" exact/>
        </>
    );
}

export default App;
