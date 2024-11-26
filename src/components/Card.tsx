import { ReactNode } from "react";

type Props = {
    phrase: string;
    author?: string;
}
export const Card = ({ phrase, author }: Props) => {
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
				<h3 className='text-3xl font-bold italic'>"{phrase}"</h3>
				<p className='text-right text-sm'>- {author ?? "Autor Desconhecido"}</p>

			</div>
	);
}
