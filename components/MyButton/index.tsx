type Props = {
    label: string;
    onClick: () => void;
}

export const MyButton = ({ label, onClick }: Props) => {
    return(
        <button onClick={onClick} className="btn bg-lime-500 text-lime-900 hover:bg-green-900 hover:text-lime-500 ml-1 mr-3 pt-1 pb-2 pr-3 pl-3 rounded">
            {label}
        </button>
    );
}