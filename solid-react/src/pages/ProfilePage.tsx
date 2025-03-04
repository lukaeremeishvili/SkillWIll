import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { getUsers } from "../api/getUsers";
import { IUser } from "../interfaces/profile.interface";

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const fetchRandomUser = async () => {
    const users = await getUsers();
    const randomUser = users[Math.floor(Math.random() * users.length)];
    setUser(randomUser);
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <Box p={6} backgroundColor="#244133" borderRadius="md">
      <Heading as="h1" size="xl" mb={4}>
        Profile Page
      </Heading>
      {user ? (
        <Box>
          <Text fontSize="xl" mb={2}>
            <strong>Name:</strong> {user.name}
          </Text>
          <Text fontSize="lg" mb={2}>
            <strong>Email:</strong> {user.email}
          </Text>
          <Text fontSize="lg" mb={2}>
            <strong>Phone:</strong> {user.phone}
          </Text>
          <Text fontSize="lg" mb={2}>
            <strong>Website:</strong> {user.website}
          </Text>
          <Text fontSize="lg" mb={2}>
            <strong>Company:</strong> {user.company.name}
          </Text>
          <Text fontSize="lg" mb={2}>
            <strong>Address:</strong> {user.address.street}, {user.address.city}
          </Text>
          <Button colorScheme="teal" onClick={fetchRandomUser}>
            Get Random User
          </Button>
        </Box>
      ) : (
        <Text>Loading...</Text>
      )}
    </Box>
  );
};

export default ProfilePage;
