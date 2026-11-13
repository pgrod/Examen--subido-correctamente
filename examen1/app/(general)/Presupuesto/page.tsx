'use client'

import React, { useState, useContext } from 'react'
import { ContextPresupuesto } from '../../Context/ContextPresupuesto'

export default function Page() {

    const { presupuesto, setPresupuesto, totalGastos } = useContext(ContextPresupuesto)
    const [monto, setMonto] = useState<string>('')

    function guardarPresupuesto() {
        if (Number(monto) <= 0) {
            alert('Ingrese un presupuesto válido')
            return
        }

        setPresupuesto(Number(monto))
        alert('Presupuesto guardado')
    }

    return (
        <div className='flex justify-center mt-10'>
 <div className='p-8 w-full max-w-md text-center rounded'>
                <h2 className='font-bold mb-8'>Establecer Presupuesto Mensual</h2>

                <input
                    type='text'
                    placeholder='Monto de presupuesto Mensual'
                    className='border bg-gray-100 p-3 rounded w-full mb-5'
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                />

                <button
                    onClick={guardarPresupuesto}
                    className='bg-blue-600 text-white p-3 rounded mb-5'
                >
                    Guardar Presupuesto
                </button>

                <br />

                <a href='/Gastos' className='inline-block bg-blue-600 text-white p-3 rounded mt-5'>
                Ir a Gastos
                </a>

                {presupuesto > 0 && (
                    <p className='mb-4'>Presupuesto: L. {presupuesto}</p>
                )}

                {presupuesto > 0 && totalGastos >= presupuesto * 0.8 && totalGastos <= presupuesto && (
                    <p className='bg-yellow-100 text-yellow-800 p-3 rounded mb-4'>
                        Ha alcanzado el 80% del presupuesto
                    </p>
                )}

                {presupuesto > 0 && totalGastos > presupuesto && (
                    <p className='bg-red-100 text-red-800 p-3 rounded mb-4'>
                        Has superado el límite del presupuesto, debes ajustar gastos
                    </p>
                )}

            </div>
        </div>
    )
}
