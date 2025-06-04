import API from "./axios";

export const signupApi = async (signupData: {
  username: string;
  email: string;
  password: string;
}) => {
  return API.post("/auth/register", signupData);
};

export const loginApi = async (loginData: { email: string; password: string }) => {
  return API.post("/auth/login", loginData);
};
