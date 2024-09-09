"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Toaster } from "react-hot-toast";
import Navigation from "@/components/Navigation";
import { store } from "@/store/store";
import { I18nextProvider } from "react-i18next";
import i18n from "@/locales/i18n";
import ChangeLang from "./ChangeLang";

let persistor = persistStore(store);

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster position="bottom-center" reverseOrder={true} />
          <main className="max-w-screen-lg my-0 mx-auto">
            <Navigation />
            <div className="p-5">{children}</div>
            <ChangeLang />
          </main>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
}
