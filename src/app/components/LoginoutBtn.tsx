"use client";

import { login, logout, onUserStateChange } from "../firebase/firebasedb";
import { useEffect, useState } from "react";

export default function LoginoutBtn() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user: any) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };

  return (
    <div>
      {!user && <button onClick={handleLogin}>Login</button>}
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}
