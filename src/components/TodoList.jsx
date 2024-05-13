import React, { useState, useEffect } from 'react';
import { VStack, Box, Text, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

// Define custom theme
const customTheme = extendTheme({
  colors: {
    primary: {
      500: "#6f48eb",
    },
    secondary: {
      500: "#2ebe55",
    },
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
});

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo])); // Update local storage
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Update local storage
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Update local storage
  };

  return (
    <VStack spacing={4} w="100%" align="stretch">
      <AddTodoForm addTodo={addTodo} />
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ delay: 0.1 }}
            style={{ width: '100%', display: 'flex' }}
          >
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </VStack>
  );
};

const TodoApp = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Box p={8}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          My Todo List
        </Text>
        <TodoList />
      </Box>
    </ChakraProvider>
  );
};

export default TodoApp;
