import API from "./axios";

export const signup = async (signupData: {
  username: string;
  email: string;
  password: string;
}) => {
  return API.post("/auth/register", signupData);
};

export const login = async (loginData: { email: string; password: string }) => {
  return API.post("/auth/login", loginData);
};
