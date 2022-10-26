import { useState } from "react";
import { UserContext } from "./UserContext";

const User = {
    id: 123,
    name: 'David Enamorado',
    email: 'ejemplo@gmail.com'
}

export const UserProvider = ({ children }) => {


    const [user, setUser] = useState();

    return (
        <UserContext.Provider
        value={{user, setUser}}
        >
            {children}
        </UserContext.Provider>
    )
}
