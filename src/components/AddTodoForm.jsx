import React, { useState } from 'react';
import { Flex, Input, Button } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoAdd } from 'react-icons/io5';

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [isRotated, setIsRotated] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  const handleButtonClick = () => {
    setIsRotated(true);
    setTimeout(() => setIsRotated(false), 1000); // Reset rotation after 1 second
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Flex
            as="form"
            onSubmit={handleSubmit}
            p={4}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            alignItems="center"
          >
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a new todo"
              mr={2}
              borderRadius="md"
              border="1px solid #ddd"
              p={2}
              flex="1"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: isRotated ? 360 : 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              onClick={handleButtonClick}
              bg="purple.500"
              color="white"
              borderRadius="md"
              border="none"
              p={2}
            >
              <Button colorScheme="purple">
                <IoAdd size={20} />
              </Button>
            </motion.button>
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddTodoForm;
