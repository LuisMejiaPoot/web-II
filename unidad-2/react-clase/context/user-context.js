const { useState, createContext } = React;


const UserContext = createContext(null);

function UserContextProvider({ children }) {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        age: 100
    });

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
window.UserContext = UserContext;
window.UserContextProvider = UserContextProvider;