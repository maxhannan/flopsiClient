import { Children, createContext, useEffect, useState } from "react";
import {
  Navigate,
  Outlet,
  RouterProvider,
  useNavigate,
  useOutlet,
} from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useUser } from "../Hooks/useUser";
import Login from "../Pages/Login";
import { mainrouter } from "../Router";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { getUserInfo } = useAuth();
  const [currentUser, setCurrentUser] = useState();
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const { addUser, removeUser } = useUser();

  const authLogin = (user, token) => {
    console.log("hello");
    setCurrentUser(user);
    addUser(user, token);
  };

  const authLogout = () => {
    removeUser();
    setCurrentUser(null);
  };

  useEffect(() => {
    if (currentUser) {
      nav("/recipes");
    }
  }, [currentUser]);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let cuser = await getUserInfo();
      if (cuser === null) {
        localStorage.setItem("user", "");
        cuser = "";
      }

      await setCurrentUser(cuser);
      setLoading(false);
    };

    checkLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, authLogin, authLogout }}>
      {!loading && <Outlet />}
    </AuthContext.Provider>
  );
};
export default AuthContext;
