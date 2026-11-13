
"use client";

import { createContext } from "react";

interface IContextSesion {
    usuario: string;
    iniciarSesion: (usuario: string, clave: string) => boolean;
}

export const ContextSesion = createContext<IContextSesion>({
    usuario: "",
    iniciarSesion: () => false
});
