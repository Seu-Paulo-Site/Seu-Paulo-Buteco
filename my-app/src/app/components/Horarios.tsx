'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { div } from 'framer-motion/client';

export default function Horarios() {

    const dias = [
        { dia: 'Segunda-feira', horario: 'Fechado' },
        { dia: 'Terça-feira', horario: '17h às 23h' },
        { dia: 'Quarta-feira', horario: '17h às 23h' },
        { dia: 'Quinta-feira', horario: '17h às 23h' },
        { dia: 'Sexta-feira', horario: '17h às 02h' },
        { dia: 'Sábado', horario: '12h às 02h' },
        { dia: 'Domingo', horario: '12h às 20h' },
    ];

    return (
        <div className='h-140 bg-red-800 '>
            <div className="xl:h-18 lg:h-17 sm-h-20 w-full h-7 flex justify-center  z-10 mb-0">
                <img
                    src="/brush-dec1.png"
                    alt="Brush decorativo"
                    className="rotate-180 w-full transform-gpu backface-hidden -mt-3"
                />
            </div>

            <div className="bg-red-800 py-16 px-4 flex justify-center">
                <div className="max-w-4xl w-full text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8"
                        style={{ fontFamily: "'Dancing Script', cursive" }}>
                        Horários de Funcionamento
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white text-lg text-semibold" >
                        {dias.map(({ dia, horario }) => (
                            <div
                                key={dia}
                                className="flex justify-between border-b border-gray-300 pb-2 px-4"
                            >
                                <span className="font-medium">{dia}</span>
                                <span className={horario === 'Fechado' ? 'text-black' : ''}>
                                    {horario}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="xl:h-17 lg:h-17 sm-h-20 w-full h-7 flex justify-center  z-10 mb-0">
                <img
                    src="/brush-dec1.png"
                    alt="Brush decorativo"
                    className="w-full lg:h-18"
                />
            </div>
        </div>
    )
}