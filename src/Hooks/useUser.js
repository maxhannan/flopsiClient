import { useLocalStorage } from "./useLocalStorage";

export const useUser = () => {
  const { setItem } = useLocalStorage();

  const addUser = (user, token) => {
    setItem("user", JSON.stringify(user));
    setItem("token", JSON.stringify(token));
  };

  const removeUser = () => {
    setItem("user", "");
    setItem("token", "");
  };

  return { addUser, removeUser };
};
