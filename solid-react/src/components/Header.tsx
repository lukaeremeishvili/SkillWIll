import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Box bg="teal.500" borderRadius="md" p={4} mb={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Heading color="white">SOLID</Heading>
        <Box display="flex" gap={4}>
          <Link to="/">
            <Button colorScheme="teal">Home</Button>
          </Link>
          <Link to="/profile">
            <Button colorScheme="teal">Profile</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
