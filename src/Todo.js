import React, { useState, useEffect } from 'react';

const FILTERS = {
    ALL: 'all', // All items
    ACTIVE: 'active', // Active items
    COMPLETED: 'completed' // Completed items
}

const getInitialTodos = () => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
};

const Todolist = () => {
    const [todos, setTodos] = useState(getInitialTodos);
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState(FILTERS.ALL);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const addTodo = () => {
        if (!input.trim()) return;
        const newTodo = { id: Date.now(), text: input.trim(), complete: false };
        setTodos([...todos, newTodo]);
        setInput('');
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
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
        <div style={{ maxWidth: 500, margin: 'auto', padding: 20 }}>
            <h1>Todo App</h1>
            <div>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="What needs to be done?"
                />
                <button onClick={addTodo}>Add</button>
            </div>

            <div style={{ marginTop: 10 }}>
                <button onClick={() => setFilter(FILTERS.ALL)}>All</button>
                <button onClick={() => setFilter(FILTERS.ACTIVE)}>Active</button>
                <button onClick={() => setFilter(FILTERS.COMPLETED)}>Completed</button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {filteredTodos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '5px 0'
                        }}
                    >
                        <span>{todo.text}</span>
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // prevent toggleTodo from firing
                                deleteTodo(todo.id);
                            }}
                            style={{
                                background: 'none',
                                border: 'red',
                                borderRadius: 5,
                                color: 'red',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                marginLeft: '10px'
                            }}
                        >
                            ×
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default Todolist;