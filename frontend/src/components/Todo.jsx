export default function Todo({todo}) {
    return (
        <li className="border-neutral-400 border-2 w-64 p-2 flex justify-between items-center gap-4">
            <p className="truncate">{todo.description}</p>
            <input type="checkbox" checked={todo.done} />
        </li>
    );
}