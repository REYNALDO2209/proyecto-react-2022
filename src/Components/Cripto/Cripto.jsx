import { Link } from 'react-router-dom'
import './Cripto.css'

const Cripto = ({id,name,priceUSD,symbol,changePercent24Hr}) => {
    return(
        <div className='Cripto'>
            <h2>{name}</h2>
            <div className="info">
                <p><span className="label">Precio: </span>{priceUSD}</p>
                <p><span className="label">Codigo: </span>{symbol}</p>
                <p>
                    
                    <span className="label">Variacion 24hrs:</span>
                    <span className={parseFloat(changePercent24Hr) < 0 ? 'negative':'positive'}
>
                        {parseFloat(changePercent24Hr).toFixed(3)}%
                    </span>

                    <Link to= {`/criptomonedas/${id}`}>Ver detalles</Link>
                </p>
            </div>
        </div>
    )
}

export default Cripto