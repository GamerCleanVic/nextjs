import Link from 'next/link';
import { useState } from 'react';
import Script from 'next/script';
import { MyButton } from '../../components/MyButton';
import styles from '../../components/MyButton/MyButton.module.css';

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
            <MyButton label="Aumentar" onClick={function (): void {
                throw new Error('Function not implemented.');
            } } />
            <button onClick={handleContadorBtn} className="btn btn-primary">Aumentar</button>
            <button className={styles.myBtn}>Module CSS</button>
            <Script id="my-script" strategy="afterInteractive">
                {`window.alert('carreguei!')`}
            </Script>
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