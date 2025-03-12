import Cripto from "./Cripto/Cripto.jsx"
import './Cuadricula.css'
import usePetition from "../Hooks/usePetition.js"


function Cuadricula() {

  const [criptos,cargando,errores] = usePetition("assets")

  if (cargando) return <span>Cargando...</span>;
  if (errores) return <span>Error al cargar los datos.</span>;

return (
  <>
    <div className="app-container">
    <h1>Lista de Criptomonedas</h1>
    <div className="Cripto-container">    
      {criptos.map(({ id, name, priceUsd,symbol,changePercent24Hr}) =>(
      <Cripto 
      key={id} 
      name={name} 
      priceUSD={priceUsd} 
      symbol={symbol} 
      changePercent24Hr={changePercent24Hr}
      id={id}/>
      ))}
    </div>
    </div>
  </>
);
}

export default Cuadricula
