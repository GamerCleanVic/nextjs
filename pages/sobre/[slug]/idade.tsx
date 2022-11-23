import { useRouter } from 'next/router';

const Idade = () => {
    const router = useRouter();
    const { slug } = router.query;

    return(
        <div>
            { slug } tem 90 anos.
        </div>
    );
}

export default Idade;