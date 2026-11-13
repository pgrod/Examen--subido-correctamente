'use client'

import React, { useState, useEffect } from 'react'
import { ContextPresupuesto } from '../Context/ContextPresupuesto'

export default function ProviderPresupuesto({ children }: { children: React.ReactNode }) {

const [presupuesto, setPresupuesto] = useState<number>(0)
    const [totalGastos, setTotalGastos] = useState<number>(0)

    useEffect(() => {
        const guardado = localStorage.getItem('presupuesto')
        if (guardado) {
            setPresupuesto(Number(guardado))
        }
    }, [])

    function guardarPresupuesto(valor: number) {
        setPresupuesto(valor)
        localStorage.setItem('presupuesto', String(valor))
    }

    return (
        <ContextPresupuesto.Provider value={{ presupuesto, setPresupuesto: guardarPresupuesto, totalGastos, setTotalGastos }}>
            {children}
        </ContextPresupuesto.Provider>
    )
}
