import React, { useState } from 'react';
import { Flex, Input, Button } from '@chakra-ui/react';

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <Flex as="form" onSubmit={handleSubmit} p={"4"}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        mr={2}
      />
      <Button type="submit" colorScheme="purple">
        Add
      </Button>
    </Flex>
  );
};

export default AddTodoForm;
