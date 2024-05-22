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

      <Person
        name="Elon Musk"
        avatar="https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg?quality=70&strip=info&w=1024"
        roles={[
          'CEO da Tesla',
          'CEO da Spacex'
        ]}
      />
      <Person
        name="Jeff Bezos"
        avatar="https://files.sunoresearch.com.br/p/uploads/2018/09/jeff-bezos-2-768x511.webp"
        roles={[
          'CEO da Amazon',
          'CEO da Blue Origin'
        ]}
      />
    </div>
  );
}

export default Page;
