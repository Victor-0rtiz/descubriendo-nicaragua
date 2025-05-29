import React from 'react'

export default function Introduccion() {
    return (

        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div className="w-full items-center mx-auto max-w-screen-lg">
                <div className="group grid w-full grid-cols-2 items-center">
                    <div>
                        <div className="pr-12">
                            <h2 className="text-3xl font-bold text-[#145068] mb-6">
                                Nicaragua: Tierra de Lagos y Volcanes
                            </h2>
                            <p className="peer mb-6 text-[#145068]">
                                Nicaragua destaca por su riqueza natural única y su vibrante geografía. Es el hogar de impresionantes lagos como el Lago de Nicaragua (Cocibolca), el más grande de América Central, y el Lago de Managua (Xolotlán).                            </p>
                            <p className="mb-6 text-[#145068]">
                                Además, su paisaje está adornado por numerosos volcanes, algunos activos, como el Masaya, el Momotombo y el Concepción, que no solo ofrecen espectaculares vistas sino también un testimonio de la dinámica actividad geológica de la región.                            </p>
                            {/* <h3 className="mb-4 font-semibold text-xl text-gray-400">Conditioning installation packages</h3>
                            <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">
                                <li>5 cups chopped Porcini mushrooms</li>
                                <li>1/2 cup of olive oil</li>
                                <li>3lb of celery</li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="pr-16 relative flex flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-[#145068] before:bottom-0 before:right-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[#145068] w-4/6 px-12 py-14 flex flex-col justify-center rounded-xl group-hover:bg-[#147068] transition-all ">
                            <span className="block mb-10 font-bold group-hover:text-orange-300">HERE WE ARE</span>
                            <h2 className="text-white font-bold text-3xl">
                                What started as a tiny team mostly dedicated to Air Quality has grown.
                            </h2>
                        </div>
                        <div className="font-bold text-sm flex mt-2 mb-8 items-center gap-2" >
                            
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <img src="https://picsum.photos/800/800" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
