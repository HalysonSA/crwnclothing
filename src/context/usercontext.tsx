import { createContext,useState } from "react"

export const UserContext = createContext<any>({
    currentUser:null,
    setCurrentUser:  (()=>null)
})
export const UserProvider = ({children}:any) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const props = { currentUser, setCurrentUser }
    return <UserContext.Provider value={props}>{children}</UserContext.Provider>
}