"use client";

import React, { useState } from "react";
import { ContextSesion } from "../Context/ContextSesion";

export default function ProviderSesion({
    children
}: {
    children: React.ReactNode
}) {

const [usuario, setUsuario] = useState<string>("");

const iniciarSesion = (nombre: string, clave: string): boolean => {

if (nombre === "admin" && clave === "admin123") {
        setUsuario(nombre);
        return true;
    }

return false;
    };

return (
    <ContextSesion.Provider value={{ usuario, iniciarSesion }}>
        {children}
    </ContextSesion.Provider>
    );
}
