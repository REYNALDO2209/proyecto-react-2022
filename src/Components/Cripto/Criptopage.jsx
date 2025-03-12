import { useParams } from "react-router-dom"
import "./Criptopage.css"
import usePetition from "../../Hooks/usePetition"
import CriptoInfo from "./CriptoInfo"
import Criptohistorial from "./CriptoHistorial"

const Criptopage = () =>{
    
    const params = useParams()

    const [cripto,cargandoCripto,errorescripto] = usePetition(`assets/${params.id}`)
    const [history,cargandoHistory,erroreshistory] = usePetition(`assets/${params.id}/history?interval=d1`)

    if(cargandoCripto || cargandoHistory)
        return<span>Cargando....</span>
    
    if (errorescripto || erroreshistory) {
        return <span>Hubo un error al cargar los datos...</span>;
    }

    return(
        <>
            <h1>Soy la criptomoneda</h1>
            {
                cripto && <CriptoInfo cripto ={cripto}/>
            }
            <h2>HISTORIAL</h2>
            {
                history && <Criptohistorial history= {history}/>
            }
        </>
    )
}

export default Criptopage