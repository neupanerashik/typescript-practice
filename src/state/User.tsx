import React, { useState } from "react";

type AuthUser = {
    name : string;
    email : string;
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser) //useState Hook Type Assertion
    const handleLogin = () => {
        setUser({
            name  : 'Rashik',
            email : 'rashik@example.com', 
        })
    }
    // const handleLogout = () => {
    //    setUser(null)
    // }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>User Name is {user?.name} </div>
            <div>User Email is {user?.email} </div>
        </div>
    )
}