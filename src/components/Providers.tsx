"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Toaster } from "react-hot-toast";
import Navigation from "@/components/Navigation";
import { store } from "@/store/store";

let persistor = persistStore(store);

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="bottom-center" reverseOrder={true} />
        <div className="max-w-screen-lg my-0 mx-auto">
          <Navigation />
          <div className="p-5">{children}</div>
        </div>
      </PersistGate>
    </Provider>
  );
}
