import { createContext, useState } from "react";

const UserContext = createContext("X")

export default function UserProvider({ children }) {
    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}