import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Logeo = () =>
    {

        const navigation = useNavigate()

        const [user,setUser] = useState({
            email: "",
            password: ""
        })

        const [cargando,setcargando] = useState(false)
        const [error, seterror] = useState()

        const submit = (e) =>
            {
                e.preventDefault()
                setcargando(true)
                seterror(null)
                axios.post(`https://reqres.in/api/login`,user)
                .then(data => {
                    setcargando(false)
                    localStorage.setItem("tokenEDmarket", data.data.token)
                    navigation("/")
                })
                .catch(e => {
                    setcargando(false)
                    console.error(e)
                    seterror(e.response.data.error)
                })
            }

            if (localStorage.getItem("tokenEDmarket")) return <Navigate to = "/"/>


                return(
            <div className="login-container">
                <h1>Iniciar sesión</h1>
                <form onSubmit={submit}>
                    <div>
                        <label htmlFor="email">Correo Electronico</label>
                        <input onChange ={(e) =>{
                            setUser({
                                ...user,
                                email: e.target.value
                            })
                        }} 
                        type="email" name = "email"/>
                    </div>
                    <div className="field">
                        <label htmlFor="password">Contraseña</label>
                        <input onChange ={(e) =>{
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }}  type="password" name = "password"/>
                        </div>
                        <div className="submit">
                            <input 
                            type="submit" 
                            value = {cargando ? "cargando..." : "Ingresar"} />
                        </div>
                </form>
                    {
                        error && <span className="Error">Error {error}</span>
                    }
            </div>
        )
    }

export default Logeo