import {useEffect, useState} from "react";
import {fetchTodos} from "./utils/fetchTodos.js";

const loadTodos = async (setTodos, setLoading, setError) => {
    try {
        const data = await fetchTodos();
        setTodos(data);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
};

export default function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadTodos(setTodos, setLoading, setError);
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <ul className="flex flex-col gap-4">
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            <p>{todo.description}</p>
                            <p>{todo.done ? "Erledigt" : "Nicht erledigt"}</p>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}
