import  { createContext } from "react";


interface Context {

    user: string | null | undefined,
    username: string | null | undefined
}

export const UserContext = createContext<Context>({ user: null, username: null });
