import React, { useState, useEffect } from "react";
import {
  VStack,
  Box,
  Text,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";

// Define custom theme
const customTheme = extendTheme({
  colors: {
    primary: {
      500: "#6f48eb",
    },
    secondary: {
      500: "#2ebe55",
    },
    accent1: "#640cb2",
    accent2: "#9957c7",
    accent3: "#7114b5",
    accent4: "#94846c",
    accent5: "#c7bfb4",
    accent6: "#3c3c3c",
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
});
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo])); // Update local storage
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Update local storage
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Update local storage
  };

  return (
    <Box
      p={8}
      bgGradient="linear(to-r, #640cb2, #9957c7, #7114b5, #94846c, #c7bfb4)"
      // borderRadius="xl"
      boxShadow="md"
      minHeight="100vh" // Ensure the container covers the entire screen
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
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
              style={{ width: "100%", display: "flex" }}
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
    </Box>
  );
};

export default TodoList;
