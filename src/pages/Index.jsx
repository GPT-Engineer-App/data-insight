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

const Index = () => {
  // ...

  useEffect(() => {
    createUserWithCredentials();
  }, []);

  // ...
};

export default Index;
