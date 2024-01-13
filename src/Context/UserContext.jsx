import { createContext, useState } from "react";

export const UserContext = createContext("X")

export default function UserProvider({ children }) {
    const [user, setUser] = useState()
    const [favorites, setFavorites] = useState({})
    console.log(favorites);
    return (
        <UserContext.Provider value={{ user, setUser, favorites, setFavorites }}>
            {children}
        </UserContext.Provider>
    )
}