'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Historia() {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <div
            className="bg-white min-h-[600px] flex items-center flex-col justify-center py-4 sm:py-8 md:py-12"
            style={{
                backgroundImage: "url('/img2.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
            id='historia'
        >
            <div className="flex flex-col md:flex-row max-w-full md:max-w-6xl w-full gap-4 sm:gap-8 md:gap-10 mx-auto px-2 sm:px-4 md:px-8">

                <div className="flex-1 font-semibold text-black flex flex-col justify-center gap-2 sm:gap-4 md:gap-5">
                    <h1
                        data-aos="fade-up"
                        className="font-cheap-pine whitespace-nowrap text-red-800 font-bold mb-2 sm:mb-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-[38px]"
                        
                    >
                        COMO TUDO COMEÇOU...
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="mb-2 sm:mb-4 text-xs xs:text-sm sm:text-base md:text-lg xl:text-[22px] leading-relaxed"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Um mineiro e dois paulistas criaram um boteco que mistura o melhor de Minas e São Paulo. Aqui tem comida boa, cerveja gelada e muita resenha!
                    </p>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="mb-2 sm:mb-4 text-xs xs:text-sm sm:text-base md:text-lg xl:text-[22px] leading-relaxed"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Atendimento acolhedor, tira-gosto com identidade e um clima único para você se sentir em casa.
                    </p>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="text-xs xs:text-sm sm:text-base md:text-lg xl:text-[22px] leading-relaxed"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Venha brindar com a gente!
                    </p>
                </div>

                <div className="flex-1 flex flex-col gap-3 sm:gap-6 mt-6 md:mt-0">
                    <img
                        data-aos="fade-left"
                        src="/frentebar.png"
                        alt="Imagem 1"
                        className="self-start w-full max-w-[110px] xs:max-w-[140px] sm:max-w-[180px] md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-md"
                        style={{ minWidth: 80, maxWidth: '100%' }}
                    />
                    <img
                        data-aos="fade-right"
                        src="/prato.png"
                        alt="Imagem 2"
                        className="xl:ml-33 ml-auto w-full max-w-[110px] xs:max-w-[140px] sm:max-w-[180px] md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-md"
                        style={{ minWidth: 80, maxWidth: '100%' }}
                    />
                </div>
            </div>
        </div>

    );
}