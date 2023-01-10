import {useRouter} from 'next/router';
import { useEffect } from 'react';

const SobreItem = () => {
    const router = useRouter();
    const { slug } = router.query;

    useEffect(()=>{
        const handleRouteChange = (url: string)=>{
            console.log(`Indo para ${url}`);
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        }
    }, []);
    return (
        <div>
            <h1>Página { slug }</h1>
            <p>Pathname: {router.pathname}</p>
            <p>IsFallback: {router.isFallback.toString()}</p>
            <button onClick={()=>{
                router.push('/sobre/pedro');
            }}>Ir para a página de Pedro</button>
        </div>
    );
}
export default SobreItem;