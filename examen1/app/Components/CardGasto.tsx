'use client'

import React, { useContext } from 'react'
import { useContextGasto } from '../Provider/ProviderGasto'
import { Gasto } from '../Modelos/Gasto'

export default function CardGasto() {

    const { gastos, eliminarGasto, editarGasto } = useContextGasto()

    function editar(gasto: Gasto) {
        const nuevoMonto = prompt('Nuevo monto:', String(gasto.monto))
        const nuevaCategoria = prompt('Nueva categoría:', gasto.categoria)
        const nuevaDescripcion = prompt('Nueva descripción:', gasto.descripcion || '')

        if (nuevoMonto === null || nuevaCategoria === null || nuevaDescripcion === null) {
            return
        }

        if (nuevoMonto === '' || Number(nuevoMonto) <= 0 || nuevaCategoria === '') {
            alert('Ingrese datos válidos')
            return
        }

        editarGasto({
            ...gasto,
            monto: Number(nuevoMonto),
            categoria: nuevaCategoria,
            descripcion: nuevaDescripcion
        })
    }

    return (
        <div>
            <h3 className='text-xl font-bold mb-3'>Lista de Gastos</h3>

            <table className='w-full border'>
                <thead>
                    <tr>
                        <th className='border p-2'>Monto</th>
                        <th className='border p-2'>Descripción</th>
                        <th className='border p-2'>Categoría</th>
                        <th className='border p-2'>Fecha</th>
                        <th className='border p-2'>Editar</th>
                        <th className='border p-2'>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        gastos.map((gasto: Gasto) => (
                            <tr key={gasto.idgasto}>
                                <td className='border p-2'>{gasto.monto}</td>
                                <td className='border p-2'>{gasto.descripcion}</td>
                                <td className='border p-2'>{gasto.categoria}</td>
                                <td className='border p-2'>{gasto.fecha}</td>

                                <td className='border p-2'>
                                    <button
                                        onClick={() => editar(gasto)}
                                        className='bg-yellow-300 p-2 rounded'
                                    >
                                        Editar
                                    </button>
                                </td>

                                <td className='border p-2'>
                                    <button
                                        onClick={() => eliminarGasto(gasto.idgasto)}
                                        className='bg-red-400 text-white p-2 rounded'
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
