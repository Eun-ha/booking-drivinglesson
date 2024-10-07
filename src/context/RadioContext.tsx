import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";

type contextType = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

export const RadioContext = createContext<contextType>({} as contextType);
