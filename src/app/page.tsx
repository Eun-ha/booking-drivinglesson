"use client";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import fireStore from "./firebase/firestore";
import { login, logout, onUserStateChange } from "./firebase/firebasedb";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    onUserStateChange((user) => {
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

  const onClick = async () => {
    const query = await getDoc(doc(fireStore, "사용자", "2345"));
    console.log(query.data());
  };

  return (
    <div>
      <h1>운전연수 예약 페이지 메인입니다.</h1>
      <div>
        {!user && <button onClick={handleLogin}>Login</button>}
        {user && <button onClick={handleLogout}>Logout</button>}
        <Link href="/list">Booking List</Link>
      </div>
    </div>
  );
}
