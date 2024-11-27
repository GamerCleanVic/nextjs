//Modulo 2: Renderizando Listas #11
import { Card } from '@/components/Card';

const Page = () =>{
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo!</h1>
      <h2>Algum outro texto</h2>

      <Card
        phrase="Alguma frase TOP"
        // author="Coach de milhões"
      />
    </div>
  );
}

export default Page;
