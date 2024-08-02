"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Toaster } from "react-hot-toast";
import LoginoutBtn from "./components/LoginoutBtn";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

let persistor = persistStore(store);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Toaster position="bottom-center" reverseOrder={true} />
            <LoginoutBtn />
            <Navigation />
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
