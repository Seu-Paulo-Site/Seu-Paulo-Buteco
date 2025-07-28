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
        <div className='bg-red-800'>

            <div className="w-full flex justify-center z-10 mb-0">
                <img
                    src="/brush-dec1.png"
                    alt="Brush decorativo"
                    className="rotate-180 w-full h-16 sm:max-h-16 md:max-h-20 object-cover -mt-3"
                />
            </div>


            <div className="bg-red-800 py-10 px-2 sm:py-16 sm:px-4 flex justify-center">
                <div className="max-w-4xl w-full text-center">
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8"
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                        Horários de Funcionamento
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-white text-base sm:text-lg font-semibold">
                        {dias.map(({ dia, horario }) => (
                            <div
                                key={dia}
                                className="flex justify-between border-b border-gray-300 pb-2 px-2 sm:px-4"
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

            {/* Bottom brush responsivo */}
            <div className="w-full flex justify-center z-10 mb-0">
                <img
                    src="/brush-dec1.png"
                    alt="Brush decorativo"
                    className="w-full max-h-12 sm:max-h-16 md:max-h-20 object-cover"
                />
            </div>
        </div>
    );
}