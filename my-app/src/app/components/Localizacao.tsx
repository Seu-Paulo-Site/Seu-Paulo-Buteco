'use client';

import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Localizacao() {

    return (
        <div className='bg-red-800 h-130 '>

            <div className="w-full flex justify-center z-10 mb-0"
                id='contato'
            >
                <img
                    src="/brush-dec1.png"
                    alt="Brush decorativo"
                    className="rotate-180 w-full h-16 sm:max-h-16 md:max-h-20 object-cover -mt-3"
                />

            </div>
            <section className="bg-red-800 py-16 px-4 flex justify-center">
                <div className="flex flex-col md:flex-row max-w-6xl w-full gap-8">

                    <div className="flex-1">
                        <iframe
                            title="Mapa do Bar"
                            width="100%"
                            height="100%"
                            className="min-h-[300px] md:min-h-[400px] rounded shadow-md"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379.4106951472531!2d-44.2166209!3d-19.9503895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c1df13b4b5%3A0x958a312e8e4eae9f!2sR.%20Milton%20Vi%C3%AAra%20Pinto%2C%2016%20-%20Angola%2C%20Betim%20-%20MG%2C%2032653-456!5e0!3m2!1spt-BR!2sbr!4v1722115389461!5m2!1spt-BR!2sbr"
                        ></iframe>
                    </div>

                    <div className="flex-1 text-gray-800 flex flex-col justify-center gap-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Venha nos visitar!
                        </h2>

                        <p className="text-lg text-white">
                            <strong>Endereço:</strong><br />
                            R. MILTON VIÊRA PINTO, 16<br />
                            Angola – Betim/MG
                        </p>

                        <p className="text-lg  text-white">
                            <strong>Contatos:</strong><br />
                            (31) 7352-9146 <br />
                            @seupaulobuteco
                        </p>

                        <p className="text-lg text-white">
                            <strong>Funcionamento:</strong><br />
                            Quarta a Sexta: 17h às 23h<br />
                            Sábados: 12h às 23h<br />
                            Domingos: 12h às 20h<br />
                        </p>

                        <a
                            href="https://www.google.com/maps/place/R.+Milton+Vi%C3%AAra+Pinto,+16+-+Angola,+Betim+-+MG,+32653-456"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4  bg-white flex justify-center items-center text-black text-semibold px-4 py-2 rounded hover:bg-black hover:text-white transition"
                        >
                            Ver no Google Maps
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}