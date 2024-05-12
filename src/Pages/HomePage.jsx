import React, { useState } from 'react';
import { Flex, Text, Button, Box, ChakraProvider, extendTheme, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';

// Define custom theme
const customTheme = extendTheme({
  styles: {
    global: {
      '.react-calendar': {
        width: '100%', // Set width to 100%
        maxWidth: '100%', // Ensure it doesn't exceed the container width
        backgroundColor: '#fff',
        color: '#222',
        borderRadius: '8px',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Arial, Helvetica, sans-serif',
        lineHeight: '1.125em',
      },
      '.react-calendar__navigation button': {
        color: '#6f48eb',
        minWidth: '44px',
        background: 'none',
        fontSize: '16px',
        marginTop: '8px',
      },
      '.react-calendar__navigation button:enabled:hover, .react-calendar__navigation button:enabled:focus': {
        backgroundColor: '#f8f8fa',
      },
      '.react-calendar__navigation button[disabled]': {
        backgroundColor: '#f0f0f0',
      },
      'abbr[title]': {
        textDecoration: 'none',
      },
      '.react-calendar__tile:enabled:hover, .react-calendar__tile:enabled:focus': {
        background: '#f8f8fa',
        color: '#6f48eb',
        borderRadius: '6px',
      },
      '.react-calendar__tile--now, .react-calendar__tile--now:enabled:hover, .react-calendar__tile--now:enabled:focus': {
        background: '#6f48eb33',
        borderRadius: '6px',
        fontWeight: 'bold',
        color: '#6f48eb',
      },
      '.react-calendar__tile--hasActive:enabled:hover, .react-calendar__tile--hasActive:enabled:focus': {
        background: '#f8f8fa',
      },
      '.react-calendar__tile--active, .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus': {
        background: '#6f48eb',
        borderRadius: '6px',
        fontWeight: 'bold',
        color: 'white',
      },
      '.react-calendar--selectRange .react-calendar__tile--hover': {
        backgroundColor: '#f8f8fa',
      },
      '.react-calendar__tile--range': {
        background: '#f8f8fa',
        color: '#6f48eb',
        borderRadius: '0',
      },
      '.react-calendar__tile--rangeStart': {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
        borderTopLeftRadius: '6px',
        borderBottomLeftRadius: '6px',
        background: '#6f48eb',
        color: 'white',
      },
      '.react-calendar__tile--rangeEnd': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
        borderTopRightRadius: '6px',
        borderBottomRightRadius: '6px',
        background: '#6f48eb',
        color: 'white',
      },
    },
  },
});

const HomePage = () => {
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate()
    const isMobile = useBreakpointValue({ base: true, md: false });

    const handleChange = (newDate) => {
      setDate(newDate);
    };

    return (
      <ChakraProvider theme={customTheme}>
        <Flex
          justify="center"
          align="center"
          minH="100vh" // Ensure full height of the screen is covered
          bgGradient="linear(to-r, #640cb2, #9957c7)" // Updated background gradient
          flexDirection={isMobile ? 'column' : 'row'} // Conditionally set flexDirection
        >
          {isMobile ? (
            <Box mb={4} mt={4} width="80%" maxWidth="400px" ml="auto" mr="auto" textAlign="center"> {/* Adjusted width and margins for mobile */}
              <Flex
                bg="#c7bfb4" // Updated background color
                borderRadius="xl"
                p={6} // Adjusted padding for the card
                boxShadow="lg"
                flexDirection="column"
                justify="center"
                align="center"
                width="100%"
              >
                <Text color="#3c3c3c" fontSize="20px" fontWeight="bold" mb={2}> {/* Updated text size */}
                  Manage Your Daily Activity So Easy
                </Text>
                <Text color="#3c3c3c" fontSize="14px" mb={4}> {/* Updated text size */}
                  This smart tool is designed to help you manage your daily activity.
                </Text>
                <Button
                onClick={()=>navigate("/todo")}
                  bg="#7114b5" // Updated button color
                  color="#ffffff" // Updated button text color
                  _hover={{ bg: '#94846c' }} // Updated hover color
                  fontSize="14px" // Updated button font size
                  px={6} // Adjusted padding for the button
                  py={2} // Adjusted padding for the button
                  borderRadius="xl"
                  cursor="pointer"
                >
                  Get Started
                </Button>
              </Flex>
            </Box>
          ) : null}
          <Flex
            justify="center" // Center the calendar horizontally on all screens
            align="center"
            flex="1"
            width="100%"
            maxWidth="600px"
            ml={isMobile ? "auto" : "0"} // Center the calendar horizontally on mobile
            mr={isMobile ? "auto" : "0"} // Center the calendar horizontally on mobile
          >
            <Box mr={!isMobile ? 8 : 8} width="100%"  ml={8} alignItems={"center"}>
              <Calendar
                onChange={handleChange}
                value={date}
                locale="en-US"
                minDate={new Date('2000-01-01')}
                maxDate={new Date('2100-12-31')}
              />
            </Box>
            {!isMobile ? (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                ml={4} // Add margin between the calendar and the card for non-mobile
                width="100%"
              >
                <Flex
                  bg="#c7bfb4"
                  borderRadius="xl"
                  p={6}
                  textAlign="center"
                  boxShadow="lg"
                  flexDirection="column"
                  justify="center"
                  align="center"
                  width="100%"
                >
                  <Text color="#3c3c3c" fontSize="20px" fontWeight="bold" mb={2}>
                    Manage Your Daily Activity So Easy
                  </Text>
                  <Text color="#3c3c3c" fontSize="14px" mb={4}>
                    This smart tool is designed to help you manage your daily activity.
                  </Text>
                  <Button
                    bg="#7114b5"
                    onClick={()=>navigate("/todo")}
                    color="#ffffff"
                    _hover={{ bg: '#94846c' }}
                    fontSize="14px"
                    px={6}
                    py={2}
                    borderRadius="xl"
                    cursor="pointer"
                  >
                    Get Started
                  </Button>
                </Flex>
              </motion.div>
            ) : null}
          </Flex>
        </Flex>
      </ChakraProvider>
    );
  };
  
  export default HomePage;
