'use client'

import { createContext } from 'react'
import { Gasto } from '../Modelos/Gasto'

interface IContextGasto {
    gastos: Gasto[]
    obtenerGastos: () => void
    agregarGasto: (gasto: Gasto) => void
    editarGasto: (gasto: Gasto) => void
eliminarGasto: (id: number) => void
}

export const ContextGasto = createContext<IContextGasto>({
    gastos: [],
    obtenerGastos: () => {},
    agregarGasto: () => {},
    editarGasto: () => {},
    eliminarGasto: () => {},
})
