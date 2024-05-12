// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      500: "#640cb2",
      600: "#9957c7",
      700: "#7114b5",
      800: "#94846c",
      900: "#c7bfb4",
    },
    neutral: {
      500: "#3c3c3c",
    },
  },
});

export default theme;
