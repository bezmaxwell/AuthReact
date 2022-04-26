import React, {useEffect, useContext, useSyncExternalStore, useState} from 'react';

import { AuthContext } from '../../contexts/auth';

import { getUsers } from '../../services/api';

const HomePage = () => {
    const {logout} = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () =>  {
            const response = await getUsers();
            setUsers(response.data);
            setLoading(false);
        })();
    }, []);

    const handleLogout = () => {
        logout();
    }

    if(loading) {
        return <div className="loading">Loading data...</div>
    }

    return  (
        <>     
            <h1>HomePage</h1>
            <button onClick={handleLogout}>Logout</button>
            <ul>
                {
                    users.map((users) => (
                        <li key={users._id}>
                            {users._id} - {users.email}
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default HomePage;