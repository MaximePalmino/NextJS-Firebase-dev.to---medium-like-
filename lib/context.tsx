import  { createContext } from "react";


interface Context {

    name: string | null,
    username: string | null
}

export const UserContext = createContext<Context>({ name: null, username: null });
