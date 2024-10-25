import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}
export const Card = ({ children }: Props) => {
    return(
        <div className="
            border
            border-green-500
            rounded-sm
            p-4
            m-5
            text-2xl
            text-center
            italic
            w-96
        ">
            {children}
        </div>
    );
}
