'use client'

import React, { useState, useEffect, useContext } from 'react'
import { ContextGasto } from '../Context/ContextGasto'
import { ContextPresupuesto } from '../Context/ContextPresupuesto'
import { Gasto } from '../Modelos/Gasto'

export default function ProviderGasto({ children }: { children: React.ReactNode }) {

    const [gastos, setGastos] = useState<Gasto[]>([])
    const { setTotalGastos } = useContext(ContextPresupuesto)

    async function obtenerGastos() {
    try {
        const res = await fetch('http://localhost:5000/gasto')
        if (!res.ok) {
            throw new Error('Error al consultar gastos')
        }

        const data = await res.json()
        console.log('Gastos recibidos:', data)
        setGastos(data)

    } catch (error) {
        console.log(error)
        alert('Ocurrio un error al cargar los gastos')
    }
}

    function agregarGasto(gasto: Gasto) {
        fetch('http://localhost:5000/gasto', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(gasto)
        })
            .then(res => {
                if (res.ok) {
                    obtenerGastos()
                } else {
                    alert('Error al guardar gasto')
                }
            })
    }

    function eliminarGasto(id: number) {
    fetch('http://localhost:5000/gasto/' + id, {
        method: 'DELETE'
    })
        .then(res => {
            if (res.ok) {
                obtenerGastos()
            } else {
                alert('No se pudo eliminar')
            }
        })
}

function editarGasto(gasto: Gasto) {
    fetch('http://localhost:5000/gasto/' + gasto.idgasto, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gasto)
    })
        .then(res => {
            if (res.ok) {
                obtenerGastos()
            } else {
                alert('No se pudo editar')
            }
        })
}

    useEffect(() => {
        obtenerGastos()
    }, [])

    useEffect(() => {
        let total = 0
        gastos.forEach(gasto => {
            total += Number(gasto.monto)
        })
        setTotalGastos(total)
    }, [gastos, setTotalGastos])

    return (
        <ContextGasto.Provider value={{ gastos, obtenerGastos, agregarGasto, editarGasto, eliminarGasto }}>
            {children}
        </ContextGasto.Provider>
    )
}

export function useContextGasto() {
    return useContext(ContextGasto)
}