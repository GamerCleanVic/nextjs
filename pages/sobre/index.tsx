import { useState } from 'react';

const Sobre = () => {
    const [contador, setContador] = useState(0);
    const handleContadorBtn = () => {
        setContador(contador + 1);
    }

    return(
        <div>
            <h1>Página Sobre ({contador})</h1>
            <ul>
                <li><a href="/sobre/jonas">Jonas</a></li>
                <li><a href="/sobre/joao">João</a></li>
            </ul>
            <button onClick={handleContadorBtn}>Aumentar</button>
        </div>
    );    
}
export default Sobre;