'use client'

import React, { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { ContextSesion } from '../Context/ContextSesion'

export default function LoginComponent() {

    const [usuario, setUsuario] = useState<string>('')
    const [clave, setClave] = useState<string>('')

    const { iniciarSesion } = useContext(ContextSesion)
    const router = useRouter()

    function login() {
        if (iniciarSesion(usuario, clave)) {
            router.push('/Presupuesto')
        } else {
            alert('Usuario o contraseña incorrectos')
        }
    }

    return (
        <div className='flex justify-center mt-10'>
            <div className='border p-8 w-full max-w-sm text-center rounded'>

                <h2 className='mb-8 font-bold'>Mis Gastos / Inicio de Sesion</h2>

                <input type='text' placeholder='Usuario' className='border bg-gray-100 p-3 rounded w-full mb-3' value={usuario} onChange={(e) => setUsuario(e.target.value)}/>

                <input type='password' placeholder='Clave' className='border bg-gray-100 p-3 rounded w-full mb-5' value={clave} onChange={(e) => setClave(e.target.value)}/>

                <button
                    type='button'
                    onClick={login}
                    className='bg-blue-600 text-white p-3 rounded'>
                    Iniciar Sesion
                </button>

            </div>
        </div>
    )
}
