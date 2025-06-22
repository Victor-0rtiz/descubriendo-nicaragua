import React, { useState } from 'react';

const GastronomiaPlatos = () => {


    const dishes = [
        {
            id: 1,
            name: "Gallo Pinto",
            description: "El desayuno tradicional nicaragüense hecho con arroz, frijoles rojos, cebolla y pimiento. Suele acompañarse con huevos, plátanos fritos y queso.",
            image: "gallopinto.webp",
            region: "Todo el país",
            color: "bg-yellow-600"
        },
        {
            id: 2,
            name: "Nacatamal",
            description: "Un tamal relleno de carne de cerdo o pollo, arroz, papas, aceitunas, pasas y verduras, envuelto en hojas de plátano.",
            image: "nacatamal.jpg",
            region: "Región Central",
            color: "bg-[#145068]"
        },
        {
            id: 3,
            name: "Vigorón",
            description: "Plato típico de Granada que consiste en yuca cocida, chicharrón y ensalada de repollo con tomate, servido sobre una hoja de plátano.",
            image: "vigoron.jpg",
            region: "Granada",
            color: "bg-yellow-600"
        },
        {
            id: 4,
            name: "Quesillo",
            description: "Tortilla de maíz rellena de queso fresco, cebolla encurtida y crema agria, enrollada y servida en una bolsa plástica.",
            image: "quesillo.avif",
            region: "La Paz Centro",
            color: "bg-[#145068]"
        },
        {
            id: 5,
            name: "Indio Viejo",
            description: "Guiso espeso hecho con carne desmenuzada, masa de maíz, naranja agria y hierbas, considerado uno de los platos más antiguos del país.",
            image: "indioviejo.jpg",
            region: "Región del Pacífico",
            color: "bg-yellow-600"
        },
        {
            id: 6,
            name: "Tres Leches",
            description: "Postre icónico hecho con bizcocho empapado en tres tipos de leche: evaporada, condensada y crema, coronado con merengue.",
            image: "tresleches.jpg",
            region: "Todo el país",
            color: "bg-[#145068]"
        }
    ];

    return (
        <div className="min-h-screen py-12 ">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-[#145068] px-4 py-1 rounded-full mb-4">
                        <span className="text-white text-sm font-semibold tracking-wider">SABORES AUTÉNTICOS</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#145068] mb-4">
                        Delicias de la Cocina Nicaragüense
                    </h1>
                    <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-700 text-lg">
                        Explora la rica tradición culinaria de Nicaragua, donde cada platillo cuenta una historia de cultura, tradición y pasión por los sabores auténticos.
                    </p>
                </div>

                {/* Grid de platillos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dishes.map((dish) => (
                        <div
                            key={dish.id}
                            className={`relative overflow-hidden rounded shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl `}

                        >
                            {/* Imagen del platillo (placeholder) */}
                            <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 relative">
                                <div className="relative h-48 md:h-56 overflow-hidden rounded-lg shadow-lg">
                                    <img src={`${dish.image}`} className='object-cover w-full h-full' />
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="p-6 mt-7 bg-white">
                                <div className="flex justify-between items-start mb-3">
                                    <h2 className="text-xl font-bold text-[#145068]">{dish.name}</h2>
                                    <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                                        {dish.region}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-4">{dish.description}</p>


                            </div>


                        </div>
                    ))}
                </div>


            </div>

            {/* Sección de cultura gastronómica */}
            <div className="mt-20 bg-[#145068]  w-full md:p-12 text-white overflow-hidden relative">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-600 rounded-full opacity-20"></div>
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-yellow-600 rounded-full opacity-20"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-4">Sabores con Historia</h2>
                            <p className="mb-4 text-white">
                                La cocina nicaragüense es un reflejo de su diversidad cultural, fusionando influencias indígenas, españolas y africanas. Cada región del país aporta sus propias especialidades, creando un mosaico de sabores únicos.
                            </p>
                            <p className="mb-6 text-white">
                                Desde los mercados callejeros hasta las celebraciones familiares, la comida es un elemento central de la vida nicaragüense, donde cada platillo lleva consigo tradiciones transmitidas por generaciones.
                            </p>

                        </div>

                        <div className="flex-1 flex justify-center">
                            <div className="relative">
                                <img src='gastronomia.jpg' className=" rounded-xl " />
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-600 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GastronomiaPlatos;