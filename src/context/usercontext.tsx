import { createContext,useState,useEffect } from "react"
import {AuthState,createUserAuth} from '../utills/firebase/firebase'
export const UserContext = createContext<any>({
    currentUser:null,
    setCurrentUser:  (()=>null)
})
export const UserProvider = ({children}:any) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const props = { currentUser, setCurrentUser }

    useEffect(()=>{
       const unsubscribe = AuthState((user:any)=>{
           if(user){
               createUserAuth(user)
           }
            setCurrentUser(user)
        })
        return unsubscribe
    },[])

    return <UserContext.Provider value={props}>{children}</UserContext.Provider>
}