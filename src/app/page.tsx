import { GeoForm } from '@/components/GeoForm';
import { Person } from '@/components/Person';

const Page = () =>{
  return(
    <div>
      <h1 className="
        font-bold
        text-2xl
      ">Olá Next.JS</h1>
      <h3>Algum outro texto.</h3>

      <Person />
    </div>
  );
}

export default Page;
