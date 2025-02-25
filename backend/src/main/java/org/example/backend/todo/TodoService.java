package org.example.backend.todo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class TodoService {
    private final TodoRepository todoRepository;

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Optional<Todo> getTodoById(String id) {
        return todoRepository.findById(id);
    }

    public Todo addTodo(TodoDTO todo) {
        Todo todoToAdd = new Todo(null, todo.description(), todo.done());
        return todoRepository.save(todoToAdd);
    }

    public Todo updateTodoById(TodoDTO todo, String id) {
        Todo todoToUpdate = new Todo(id, todo.description(), todo.done());
        return todoRepository.save(todoToUpdate);
    }

    public void deleteTodoById(String id) {
        todoRepository.deleteById(id);
    }
}
