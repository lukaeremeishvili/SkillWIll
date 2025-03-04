import React, { useEffect, useState } from "react";
import { Box, Button, Heading, Text, VStack, Spinner } from "@chakra-ui/react";
import UserProfile from "../components/users/UserProfile";
import { getUsers } from "../api/getUsers";

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<{ name: string; email: string }[] | null>(
    null
  );

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <Box p={6} backgroundColor="#14231c" borderRadius="md">
      <Heading as="h1" size="xl" mb={4}>
        Home Page
      </Heading>
      {users ? (
        <VStack gap={4} align="start">
          {users.map((user, index) => (
            <UserProfile key={index} name={user.name} email={user.email} />
          ))}
          <Button colorScheme="teal" onClick={() => window.location.reload()}>
            Refresh
          </Button>
        </VStack>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Spinner size="xl" />
          <Text ml={4}>Loading...</Text>
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
