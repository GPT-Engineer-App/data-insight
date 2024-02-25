import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Heading, useToast, VStack } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://backengine-k9iq.fly.dev/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        toast({
          title: "Account created.",
          description: "We've created your account.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        throw new Error("Failed to sign up.");
      }
    } catch (error) {
      toast({
        title: "Error occurred.",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://backengine-k9iq.fly.dev/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        toast({
          title: "Logged in.",
          description: "You're now logged in!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        throw new Error("Failed to log in.");
      }
    } catch (error) {
      toast({
        title: "Error occurred.",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent>
      <Box width="100%" maxW="md" p={4}>
        <VStack spacing={5}>
          <Heading>Interactive API</Heading>
          <form onSubmit={handleSignup}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button leftIcon={<FaSignInAlt />} colorScheme="blue" type="submit" onClick={handleSignup}>
                Sign Up
              </Button>
            </Stack>
          </form>
          <form onSubmit={handleLogin}>
            <Button leftIcon={<FaSignInAlt />} colorScheme="teal" type="submit" onClick={handleLogin}>
              Login
            </Button>
          </form>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
