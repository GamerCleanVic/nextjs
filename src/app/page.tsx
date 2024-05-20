import {Square, Circle}from '@/components/Geo';

const Page = () =>{
  return(
    <div>
      <h1 className="
        font-bold
        text-2xl
      ">Olá Next.JS</h1>
      <h3>Algum outro texto.</h3>

      <Square />
      <Circle />
    </div>
  );
}

export default Page;
