//Modulo 2: Exportando e Importando um Componente #2
import {GeoForms} from '@/components/GeoForms';

const Page = () =>{
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo!</h1>
      <h2>Algum outro texto</h2>

      <GeoForms />
    </div>
  );
}

export default Page;
