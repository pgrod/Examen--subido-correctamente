'use client'

import React, { useState, useContext } from 'react'
import { useContextGasto } from '../Provider/ProviderGasto'

export default function FormularioGasto() {

   const { agregarGasto } = useContextGasto()
    const [monto, setMonto] = useState<string>('')
    const [categoria, setCategoria] = useState<string>('')
    const [fecha, setFecha] = useState<string>('')
    const [descripcion, setDescripcion] = useState<string>('')

    function guardarGasto() {

        if (monto === '' || categoria === '' || fecha === '') {
            alert('Complete los campos')
            return
        }

        agregarGasto({idgasto: 0, monto: Number(monto), descripcion: descripcion, categoria: categoria, fecha: fecha})
        setMonto('')
        setCategoria('')
        setFecha('')
        setDescripcion('')
    }

    return (
        <div className='mb-5'>
            <h3 className='text-xl font-bold mb3'>Agregar Gasto</h3>

            <input type='number'placeholder='Monto' className='border p-2 m-2' value={monto} onChange={(e) => setMonto(e.target.value)}
            />

            <input type='text' placeholder='Descripcion' className='border p-2 m-2' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
            />

            <input
                type='text'
                placeholder='Categoria'
                className='border p-2 m-2'
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            />

            <input type='date' className='border p-2 m-2' value={fecha} onChange={(e) => setFecha(e.target.value)}
            />

            <br />

            <button
                type='button'
                className='bg-blue-400 p-2 rounded m-2'
                onClick={guardarGasto}
            >
                Guardar Gasto
            </button>
        </div>
    )
}
