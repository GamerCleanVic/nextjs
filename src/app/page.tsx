//Modulo 2: Children do componente #8
import { Card } from '@/components/Card';
import { Circle } from '@/components/Circle';

const Page = () =>{
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo!</h1>
      <h2>Algum outro texto</h2>

      <Card>
        <>
          <h3 className='text-3xl font-bold italic'>"Frase de efeito"</h3>
          <p className='text-right text-sm'>- Autor desconhecido</p>
          <Circle />
        </>
      </Card>
    </div>
  );
}

export default Page;
