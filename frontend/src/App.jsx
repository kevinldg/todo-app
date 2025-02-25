import {useEffect, useState} from "react";
import {fetchTodos} from "./utils/fetchTodos.js";
import Todo from "./components/Todo.jsx";

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
        <div className="p-4 flex flex-col gap-4">
            <h1 className="text-xl font-bold">Todo App</h1>
            <div className="flex gap-4">
                <ul className="flex flex-col gap-4">
                    <h2 className="font-semibold">Nicht erledigt</h2>
                    {
                        todos.filter(todo => !todo.done).map(todo => (
                            <Todo key={todo.id} todo={todo}/>
                        ))
                    }
                </ul>
                <ul className="flex flex-col gap-4">
                    <h2 className="font-semibold">Erledigt</h2>
                    {
                        todos.filter(todo => todo.done).map(todo => (
                            <Todo key={todo.id} todo={todo}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
