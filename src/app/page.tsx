//Modulo 2: Filtrando Listas #12
import { peopleList } from '@/data/peopleList' ;

const Page = () =>{
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo!</h1>
      <h2 className='mb-4'>Algum outro texto</h2>
      {peopleList.length > 0 &&
        <ul className='m-5'>
          {
            peopleList.map(person =>
              <li key={person.id} className='list-disc text-purple-600 hover:text-yellow-400 hover:transition-colors hover:duration-900'>
                <b className='hover:text-green-400'>{person.name} - <code className='hover:text-yellow-400 hover:border-4 hover:border-purple-600 hover:p-1 hover:mb-4'>{person.profession}</code></b>
              </li>
          )}
        </ul>
      }
    </div>
  );
}

export default Page;
