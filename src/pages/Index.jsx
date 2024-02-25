import { useEffect } from "react";

const createUserWithCredentials = async () => {
  const login = "55";
  const password = "666";
  try {
    const response = await fetch("https://backengine-k9iq.fly.dev/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: login, password }),
    });
    if (!response.ok) {
      throw new Error("Failed to create user with given credentials.");
    }
  } catch (error) {
    console.error("There was an error creating the user:", error);
  }
};

import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const Index = () => {
  useEffect(() => {
    createUserWithCredentials();
  }, []);

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="password" />
        </FormControl>
        <Button colorScheme="blue" width="full" mt={4}>
          Sign In
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
