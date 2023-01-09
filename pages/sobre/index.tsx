import Link from 'next/link';
import { useState } from 'react';

type Props = {
    nome: string;
}

const Sobre = ({ nome }: Props) => {
    const [contador, setContador] = useState(0);
    const handleContadorBtn = () => {
        setContador(contador + 1);
    }

    return(
        <div>
            <h1>Página Sobre ({contador})</h1>
            <p>
                Meu nome é: {nome}.
            </p>
            <ul>
                <li><Link href="/sobre/jonas">Jonas</Link></li>
                <li><Link href="/sobre/joao">João</Link></li>
            </ul>
            <button onClick={handleContadorBtn}>Aumentar</button>
        </div>
    );    
}

export const getStaticProps = () => {
    return{
        props: {
            nome: process.env.NOME
        }
    }
}

export default Sobre;