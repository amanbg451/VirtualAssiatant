import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
export const UserDataContext = createContext();
function UserContext({ children }) {
    const serverUrl = "http://localhost:8000";
    const [userData, setUerData] = useState(null);

    const handleCurrentUer = async () => {
        try {
            const result = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true });
            setUerData(result.data);
            console.log(result.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleCurrentUer();
    },[])

    const value = {
        serverUrl
    }
    return (
        <div>
            <UserDataContext.Provider value={value}>
                {children}
            </UserDataContext.Provider>
        </div>

    )
}

export default UserContext