'use client'

import React, { useContext } from 'react'
import FormularioGasto from '@/app/Components/FormularioGasto'
import CardGasto from '@/app/Components/CardGasto'
import { ContextPresupuesto } from '@/app/Context/ContextPresupuesto'

export default function Page() {

    const { presupuesto, totalGastos } = useContext(ContextPresupuesto)

    return (
        <div className='p-5'>
            <h2 className='text-2xl font-bold mb-4'>Registro de Gastos</h2>

            <h3>Presupuesto establecido: L. {presupuesto}</h3>
            <h3>Total gastado: L. {totalGastos}</h3>

            {presupuesto > 0 && totalGastos >= presupuesto * 0.8 && totalGastos <= presupuesto && (
                <div className='bg-yellow-300 p-3 mt-3'>
                    Has alcanzado el 80% de tu presupuesto
                </div>
            )}

            {presupuesto > 0 && totalGastos > presupuesto && (
                <div className='bg-red-500 text-white p-3 mt-3'>
                    Has superado el límite del presupuesto, debes ajustar gastos
                </div>
            )}

            <br />

            <FormularioGasto />

            <CardGasto />
        </div>
    )
}
