package org.example.backend.todo;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/todo")
public class TodoController {
    private final TodoService todoService;

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @GetMapping("{id}")
    public Optional<Todo> getTodoById(@PathVariable String id) {
        return todoService.getTodoById(id);
    }

    @PostMapping
    public Todo addTodo(@RequestBody TodoDTO todo) {
        return todoService.addTodo(todo);
    }

    @PutMapping("{id}")
    public Todo updateTodo(@RequestBody TodoDTO todo, @PathVariable String id) {
        return todoService.updateTodoById(todo, id);
    }

    @DeleteMapping("{id}")
    public void deleteTodo(@PathVariable String id) {
        todoService.deleteTodoById(id);
    }
}
