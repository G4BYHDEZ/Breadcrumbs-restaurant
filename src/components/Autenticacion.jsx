import {
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  function login(email, password) {

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (foundUser) {
      setUser(foundUser);

      localStorage.setItem(
        "user",
        JSON.stringify(foundUser)
      );

      return true;
    }

    return false;
  }

  function register(username, email, password) {

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(
      (u) => u.email === email
    );

    if (exists) {
      return false;
    }

    const newUser = {
      username,
      email,
      password,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    return true;
  }

  function logout() {
    setUser(null);

    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}