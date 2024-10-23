const weekDay = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long' }).format(new Date());
}

export const Person = () =>{
    const today: Date = new Date();
    const data = {
        name: 'Elon Musk',
        avatar: 'https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg',
        roles: ['CEO da Tesla', 'CEO da SpaceX']
    }

    return(
        <>
            <div
                className="
                    border
                    border-green-400
                    rounded-sm
                    mt-3
                    p-3
                "
            >
            <h1>{data.name} - {weekDay(today)}</h1>
                <img
                    src={data.avatar}
                    alt={data.name}
                    className="
                        w-40
                    "
                />
                <ul>
                    <li>{data.roles[0]}</li>
                    <li>{data.roles[1]}</li>
                </ul>
            </div>
        </>
    );
}
