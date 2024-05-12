import React, { useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { MdRefresh } from 'react-icons/md';

const RotateButton = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <motion.div
      whileTap={{ rotate: 360 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <IconButton
        icon={<MdRefresh />}
        variant="ghost"
        colorScheme="purple"
        onClick={handleClick}
        aria-label="Rotate Button"
        transform={isRotated ? 'rotate(360deg)' : 'rotate(0deg)'}
      />
    </motion.div>
  );
};

export default RotateButton;
