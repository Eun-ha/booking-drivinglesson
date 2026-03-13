import { createContext } from "react";

type contextType = {
  value: string;
  onChange: (value: string) => void;
};

export const RadioContext = createContext<contextType>({} as contextType);
