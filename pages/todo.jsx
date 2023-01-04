import { Todo } from '../types/Todo';
import { useEffect, useState } from 'react';

const Todo2 = () => {

    /* const [todoList, setTodoList] = useState<Todo[]>([]); */
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        loadTodos();
    }, []);

    const loadTodos = async () => {
        /*setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const list: Todo[] = await res.json();
        setTodoList(list);
        setLoading(false);*/
    }

    return (
        <div>
            <h1>Lista de tarefas</h1>

            {loading && <div>Carregando...</div>}

            <ul>
                {todo.map((todoItem, index) => (
                    <li key={index}>
                        {todoItem.title} - {todoItem.completed.toString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo2;

export const getServerSideProps = async () => {
    /* const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todoList: Todo[] = await res.json();

    return {
        props: {
            todo: todoList
        }
    } */
}