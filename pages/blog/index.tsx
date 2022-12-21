import { Post } from '../../types/Post';

type Props = {
    name: string;
    posts: Post[];
}

const Blog = ({ name, posts }: Props) => {
    return (
        <div>
            <h1>
                BLOG
            </h1>
            <p>
                Blog de {name}
            </p>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    return {
        props: {
            name: 'Jonas',
            posts
        },
        revalidate: 7200
    }
}

export default Blog;