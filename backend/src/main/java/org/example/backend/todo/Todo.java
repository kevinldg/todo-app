package org.example.backend.todo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "todo")
public record Todo(@Id String id, String description, Boolean done) {}
