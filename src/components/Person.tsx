//Próxima aula: Módulo 2 - Passando props para um componente
const getWeekDay = () =>{
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}

export const Person = () => {
    const data = {
        name: 'Elon Musk',
        avatar: 'https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg?quality=70&strip=info&w=1024',
        roles: [
            'CEO da Tesla',
            'CEO da Spacex'
        ]
    }

    return(
        <>
            <h1 style={
                {color: "lightgreen", fontWeight: "bold"}
            }>{data.name} - {getWeekDay()}</h1>
            <img src={data.avatar}
                alt={data.name}
                className="
                w-[20rem]
            "/>
            <ul className="
                list-disc
                list-inside
            ">
                <li>{data.roles[0]}</li>
                <li>{data.roles[1]}</li>
            </ul>
        </>
    );
}
