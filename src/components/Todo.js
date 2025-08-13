import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const FILTERS = {
  ALL: "all", // All items
  ACTIVE: "active", // Active items
  COMPLETED: "completed", // Completed items
};

const getInitialTodos = () => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
};

const Todolist = () => {
  const [todos, setTodos] = useState(getInitialTodos);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState(FILTERS.ALL);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = { id: Date.now(), text: input.trim(), complete: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTERS.ALL) return true;
    if (filter === FILTERS.ACTIVE) return !todo.completed;
    if (filter === FILTERS.COMPLETED) return todo.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h1>Todo App</h1>
      <Stack direction="row" spacing={1}>
        <TextField
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
        />
        <Button variant="contained" onClick={addTodo}>
          Add
        </Button>
      </Stack>

      <Stack direction="row" spacing={1} style={{ marginTop: 10 }}>
        <Button variant="contained" onClick={() => setFilter(FILTERS.ALL)}>
          All
        </Button>
        <Button variant="contained" onClick={() => setFilter(FILTERS.ACTIVE)}>
          Active
        </Button>
        <Button
          variant="contained"
          onClick={() => setFilter(FILTERS.COMPLETED)}
        >
          Completed
        </Button>
      </Stack>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 0",
            }}
          >
            <Box
              sx={{
                color: "#ffffffff",
                bgcolor: "#3a57ffff",
                p: 2,
                borderRadius: 5,
              }}
            >
              {todo.text}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent toggleTodo from firing
                  deleteTodo(todo.id);
                }}
                style={{
                  background: "none",
                  border: "red",
                  color: "red",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginLeft: "1px",
                }}
              >
                ×
              </button>
            </Box>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
