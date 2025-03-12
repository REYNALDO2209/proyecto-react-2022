import axios from "axios"
import { use, useEffect, useState } from "react"

const usePetition = (endpoint) =>
    {

    const API_URL = import.meta.env.VITE_API_URL
    
    const [data, setdata] = useState([])
    const [cargando,setcargando] = useState(false)
    const [errores,seterrrores] = useState(false)

        
        useEffect(() =>{
        setcargando(true)
        seterrrores(false)
        axios.get(`${API_URL}${endpoint}`)
        .then(data=> {
            setdata(data.data.data)
            setcargando(false)
        })

        .catch(errores => {
            setcargando(false)
            seterrrores(true)
        })
    
    },[])

        return [data,cargando,errores]
    }

export default usePetition