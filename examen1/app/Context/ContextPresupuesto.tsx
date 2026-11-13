'use client'

import { createContext } from 'react'

interface IContextPresupuesto {
    presupuesto: number
    setPresupuesto: (valor: number) => void
    totalGastos: number
    setTotalGastos: (valor: number) => void
}

export const ContextPresupuesto = createContext<IContextPresupuesto>({
    presupuesto: 0,
    setPresupuesto: () => {},
    totalGastos: 0,
    setTotalGastos: () => {}
})
