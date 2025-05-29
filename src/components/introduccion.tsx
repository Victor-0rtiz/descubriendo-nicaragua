import React from 'react'

export default function Introduccion() {
    return (

        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden  py-6 sm:py-12">
            <div className="w-full items-center mx-auto max-w-screen-lg">
                <div className="group grid w-full grid-cols-2 items-center">
                    <div>
                        <div className="pr-12">
                            <h2 className="text-3xl font-bold text-[#145068] mb-6">
                                Nicaragua: Tierra de Lagos y Volcanes
                            </h2>
                            <p className="peer mb-6 text-[#145068]">
                                En el corazón de Centroamérica, Nicaragua se alza como una joya de diversidad natural, historia profunda y cultura vibrante. Conocida como la "Tierra de Lagos y Volcanes", su geografía combina maravillas geológicas con paisajes que inspiran asombro.
                            </p>
                            <p className="mb-6 text-[#145068]">
                                Desde el imponente Volcán Masaya hasta el sereno Lago Cocibolca, el más grande de la región, cada rincón del país cuenta una historia. No es solo un destino turístico, es una experiencia sensorial donde cada volcán, cada plato típico y cada tradición te conecta con la esencia viva de su gente.
                            </p>
                            <p className="mb-6 text-[#145068]">
                                Este espacio es una invitación a descubrir, sentir y valorar lo que hace única a Nicaragua: su naturaleza indómita, su herencia ancestral y su alegría contagiosa.
                            </p>

                        </div>
                    </div>
                    <div className="pr-16 relative flex flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-[#145068] before:bottom-0 before:right-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[#145068] w-4/6 px-12 py-14 flex flex-col justify-center rounded-xl group-hover:bg-[#238cb6] transition-all ">
                            <span className="block mb-10 font-bold group-hover:text-orange-300">BIENVENIDO</span>
                            <h2 className="text-white font-bold text-3xl">
                                Descubriendo Nicaragua: Turismo, Gastronomía, Cultura y Tradiciones.
                            </h2>
                        </div>
                        <div className="font-bold text-sm flex mt-2 mb-8 items-center gap-2" >

                        </div>
                        <div className="rounded-xl overflow-hidden ">
                            <img src="catedral-nicaragua.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
