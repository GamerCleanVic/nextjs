//Modulo 2: Passando props para um componente #6
import { Person } from '@/components/Person';

const Page = () =>{
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo!</h1>
      <h2>Algum outro texto</h2>

      <Person />
    </div>
  );
}

export default Page;
