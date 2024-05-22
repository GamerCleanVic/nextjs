//Próxima aula: Módulo 2 - Passando props para um componente
const getWeekDay = () =>{
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}

type Props = {
    name: string;
    avatar: string;
    roles: string[];
}

export const Person = ({name, avatar, roles}: Props) => {
    return(
        <>
            <div className="
                border-[3px]
                border-purple-600
                rounded-[7px]
                p-4
                m-2
                w-[30rem]
                hover:border-pink-600
                transition
                duration-[1.5s]
            ">
                <h1 style={
                    {color: "lightgreen", fontWeight: "bold"}
                }
                    className="mt-4"
                >{name}</h1>
                <img src={avatar}
                    alt={name}
                    className="
                    w-[20rem]
                "/>
                <ul className="
                    list-disc
                    list-inside
                ">
                    <li>{roles[0]}</li>
                    <li>{roles[1]}</li>
                </ul>
            </div>
        </>
    );
}
