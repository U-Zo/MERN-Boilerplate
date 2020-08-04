import React, {useState, useEffect} from 'react'

const App = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        callApi().then(res => setUser(res));
    }, [setUser]);

    const callApi = async () => {
        const response = await fetch('/api/test');
        const body = await response.json();
        return body;
    }

    return (
        <>
            <div>
                {user ? user.map(res => {
                    return res.name + res.age;
                }) : ''}
            </div>
        </>
    );
}

export default App;
