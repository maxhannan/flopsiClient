import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { addUser, removeUser } = useUser();

  const getUserInfo = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      return null;
    }
    return JSON.parse(user);
  };

  const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return null;
    }
    return JSON.parse(token);
  };
  const authLogin = (user, token) => {
    addUser(user, token);
  };

  const logout = () => {
    removeUser();
  };

  return { getUserInfo, getToken, authLogin, logout };
};
