import React, {useState, useEffect} from 'react'
import {Route} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage';

const App = () => {
    // const [user, setUser] = useState();
    //
    // useEffect(() => {
    //     callApi()
    //         .then(res => setUser(res))
    //         .catch(err => console.log(err));
    // }, [setUser]);
    //
    // const callApi = async () => {
    //     const response = await fetch('/api/test');
    //     const body = await response.json();
    //     return body;
    // }

    return (
        <>
            <Route component={LoginPage} path="/login/"/>
        </>
    );
}

export default App;
