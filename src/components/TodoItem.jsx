import React from 'react';
import { Flex, Text, IconButton } from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <Flex
      width="100%"
      align="center"
      justify="space-between"
      bg={todo.completed ? '#f1f1f1' : 'white'}
      p={4}
      m={4}
      borderRadius="md"
      boxShadow="md"
      _hover={{ shadow: "lg" }}
    >
      <Flex align="center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          style={{
            marginRight: '8px',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            backgroundColor: todo.completed ? '#2ebe55' : 'transparent',
            border: '1px solid #2ebe55',
          }}
        />
        <Text
          textDecoration={todo.completed ? 'line-through' : 'none'}
          color={todo.completed ? 'gray.500' : 'brand.800'}
        >
          {todo.text}
        </Text>
      </Flex>
      <IconButton
        icon={<MdDelete />}
        variant="ghost"
        colorScheme="red"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete Todo"
      />
    </Flex>
  );
};

export default TodoItem;
