const Criptohistorial = ({history}) => 
    {
        return(
        <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
            
            <tbody>
                {
                history.map(({date, priceUsd, time}) =>(
                        <tr key={time}>
                            <td>{date}</td>
                            <td>{priceUsd}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    )}

export default Criptohistorial

