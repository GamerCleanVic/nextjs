//Modulo 2: Passando props para um componente #6
import { Person } from '@/components/Person';

const Page = () =>{
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo!</h1>
      <h2>Algum outro texto</h2>

      <Person
        name = 'Elon Musk'
        avatar = 'https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg'
        roles = {['CEO da Tesla', 'CEO da SpaceX']}
      />
      <Person
        name = 'Jeff Bezos'
        avatar = 'https://investidorsardinha.r7.com/wp-content/uploads/2020/09/jeff-bezos-a-historia-do-homem-mais-rico-do-mundo-1-scaled.jpg'
        roles = {['CEO da Amazon', 'CEO da Twitch']}
      />
    </div>
  );
}

export default Page;
