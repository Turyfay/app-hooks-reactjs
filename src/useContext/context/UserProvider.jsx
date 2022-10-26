import { UserContext } from "./UserContext";

const User = {
    id: 123,
    name: 'David Enamorado',
    email: 'ejemplo@gmail.com'
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider
        value={{hola:'Mundo',user}}
        >
            {children}
        </UserContext.Provider>
    )
}
