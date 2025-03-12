import { createContext, useEffect, useState } from "react";


const Usercontext = createContext()
const UserContexProvider= ({children}) =>
    {

        const [usuario,setUsuario]=useState({})
        useEffect(() => {
            setUsuario({
                name: "Reynaldo Levano Rodriguez",
                registered: "22/09/2001"
            })

        },[])

        return(
            <Usercontext.Provider value={usuario}>
                {children}
            </Usercontext.Provider>
        )
    }

export  {Usercontext, UserContexProvider}