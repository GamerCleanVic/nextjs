//Modulo 3: Adicionando evento de clique #1
import { peopleList } from '@/data/peopleList' ;

const Page = () =>{

  const chemists = peopleList.filter(person => person.profession === 'chemist');

  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo!</h1>
      <h2 className='mb-4'>Algum outro texto</h2>

      {chemists.length > 0 &&
        <>
          <h3>Lista de químicos</h3>
          <ul className='ml-5 mt-2 list-disc text-ellipsis'>
            {chemists.map(person =>
              <li key={person.id}>{person.name}</li>
            )}
          </ul>
        </>
      }

    </div>
  );
}

export default Page;
