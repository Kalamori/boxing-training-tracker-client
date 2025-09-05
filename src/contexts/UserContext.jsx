import { createContext, useState } from 'react'
import { getUser } from '../utils/auth'

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(getUser())

console.log(user)


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }