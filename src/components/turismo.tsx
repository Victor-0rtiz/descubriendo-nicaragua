import React from 'react'

export default function Turismo() {
    return (
        <div className="flex flex-col md:flex-row-reverse items-center justify-between py-16 px-4 md:px-8 max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="md:w-1/2 mb-10 md:mb-0 ">
                <h4 className="text-base md:text-lg font-semibold text-gray-600 mb-2">Descubriendo Nicaragua</h4>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Turismo, Cultura y Tradiciones</h2>
                <p className="text-sm md:text-base text-gray-600 mb-6">
                    Nicaragua, conocida como la "Tierra de Lagos y Volcanes", destaca por su riqueza natural única y su vibrante geografía.
                    Es el hogar de impresionantes lagos como el Lago de Nicaragua (Cocibolca) y numerosos volcanes activos que ofrecen
                    espectaculares vistas y testimonio de la actividad geológica de la región.
                </p>

                
            </div>

            {/* Right Content - Image Gallery */}
            <div className="md:w-1/2 md:pr-10">
                <div className="grid grid-cols-2 gap-4">
                    {/* Imagen 1 */}
                    <div className="relative h-48 md:h-56 overflow-hidden rounded-lg shadow-lg">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                    </div>

                    {/* Imagen 2 */}
                    <div className="relative h-64 md:h-72 overflow-hidden rounded-lg shadow-lg -mt-6">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                    </div>

                    {/* Imagen 3 */}
                    <div className="relative h-64 md:h-72 overflow-hidden rounded-lg shadow-lg -mt-6">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                    </div>

                    {/* Imagen 4 */}
                    <div className="relative h-48 md:h-56 overflow-hidden rounded-lg shadow-lg">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
