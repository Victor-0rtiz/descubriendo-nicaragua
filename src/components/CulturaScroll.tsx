import React from 'react';

const CulturaScroll = () => {
    return (
        <div className="relative">
            {/* Diapositiva 1: Patrimonio Cultural */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[#145068] text-white">
                <div className="text-center px-4 max-w-4xl">
                    <div className="inline-block bg-yellow-600 px-4 py-1 rounded-full mb-6">
                        <span className="text-white text-sm font-semibold tracking-wider">PATRIMONIO CULTURAL</span>
                    </div>

                    <h2 className="text-3xl md:text-6xl font-bold mb-6">El Güegüense</h2>

                    <div className="flex justify-center mb-8">
                        <img src='gueguense.jpg' className="object-cover rounded-xl w-64 h-64" />
                    </div>

                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Obra maestra del Patrimonio Oral e Inmaterial de la Humanidad (UNESCO), esta sátira teatral del siglo XVI combina danza, música y teatro para expresar la resistencia indígena.
                    </p>

                    <div className="text-yellow-400 flex items-center justify-center gap-2 animate-bounce mt-8">
                        <span>Desliza para continuar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Diapositiva 2: Bailes Tradicionales */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-600 to-yellow-800 text-white">
                <div className="text-center px-4 max-w-4xl">
                    <div className="inline-block bg-[#145068] px-4 py-1 rounded-full mb-6 mt-6">
                        <span className="text-white text-sm font-semibold tracking-wider">EXPRESIONES FOLKLÓRICAS</span>
                    </div>

                    <h2 className="text-3xl md:text-6xl font-bold mb-6">Bailes Tradicionales</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                        {/* Baile 1: El Güegüense */}
                        <a href="#" className="group relative block w-full sm:w-[250px] h-[300px] rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030e13] to-transparent opacity-90 z-10"></div>
                            <img
                                alt="El Güegüense"
                                src="gueguense2.jpg"
                                className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-80 transition-opacity group-hover:opacity-60"
                            />

                            <div className="relative p-6 z-20 h-full flex flex-col justify-end">
                                <p className="text-sm font-medium tracking-widest text-yellow-400 uppercase">
                                    Patrimonio UNESCO
                                </p>

                                <p className="text-2xl font-bold text-white mt-2">El Güegüense</p>

                                <div className="mt-6">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white text-left">
                                            Obra maestra del teatro popular que combina danza, música y drama. Representa la resistencia
                                            indígena durante la colonización española a través de la sátira y el ingenio.
                                        </p>
                                        <div className="mt-4 flex justify-start">
                                            <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded-full">Danza-teatro</span>
                                            <span className="text-xs bg-[#145068] text-white px-2 py-1 rounded-full ml-2">Siglo XVI</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Baile 2: Palo de Mayo */}
                        <a href="#" className="group relative block w-full sm:w-[250px] h-[300px] rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030e13] to-transparent opacity-90 z-10"></div>
                            <img
                                alt="Palo de Mayo"
                                src="palomayo.webp"
                                className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-80 transition-opacity group-hover:opacity-60"
                            />

                            <div className="relative p-6 z-20 h-full flex flex-col justify-end">
                                <p className="text-sm font-medium tracking-widest text-yellow-400 uppercase">
                                    Tradición Afrocaribeña
                                </p>

                                <p className="text-2xl font-bold text-white mt-2">Palo de Mayo</p>

                                <div className="mt-6">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white text-left">
                                            Celebración de la fertilidad y la llegada de las lluvias. Bailes enérgicos alrededor
                                            de un árbol decorado con cintas de colores. Fusión de tradiciones africanas y mestizas.
                                        </p>
                                        <div className="mt-4 flex justify-start">
                                            <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded-full">Festival de Mayo</span>
                                            <span className="text-xs bg-[#145068] text-white px-2 py-1 rounded-full ml-2">Bluefields</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Baile 3: Las Inditas */}
                        <a href="#" className="group relative block w-full sm:w-[250px] h-[300px] rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030e13] to-transparent opacity-90 z-10"></div>
                            <img
                                alt="Las Inditas"
                                src="inditas.webp"
                                className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-80 transition-opacity group-hover:opacity-60"
                            />

                            <div className="relative p-6 z-20 h-full flex flex-col justify-end">
                                <p className="text-sm font-medium tracking-widest text-yellow-400 uppercase">
                                    Folklore Mestizo
                                </p>

                                <p className="text-2xl font-bold text-white mt-2">Las Inditas</p>

                                <div className="mt-6">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white text-left">
                                            Danza que honra a las mujeres indígenas y mestizas. Movimientos suaves que representan
                                            actividades cotidianas como la cosecha, el tejido y la preparación de alimentos.
                                        </p>
                                        <div className="mt-4 flex justify-start">
                                            <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded-full">Danza Femenina</span>
                                            <span className="text-xs bg-[#145068] text-white px-2 py-1 rounded-full ml-2">Masaya</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>

                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Nicaragua posee más de 30 bailes tradicionales que reflejan la fusión de culturas indígenas, españolas y africanas, cada uno con su propia historia y significado.
                    </p>


                </div>
            </div>

            {/* Diapositiva 3: Artesanías */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 text-[#145068]">
                <div className="text-center px-4 max-w-4xl">
                    <div className="inline-block bg-yellow-600 px-4 py-1 rounded-full mb-6">
                        <span className="text-white text-sm font-semibold tracking-wider">ARTE Y ARTESANÍAS</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold mb-6">Creaciones Tradicionales</h2>

                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        <div className="relative">
                            <img src='sanjuanoriente.jpg' className="object-cover  rounded-xl w-48 h-48" />
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-600 rounded-lg"></div>
                        </div>

                        <div className="relative mt-8">
                            <img src='hamacas.jpg' className=" rounded-xl w-48 h-48" />
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#145068] rounded-lg"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="text-left">
                            <h3 className="text-2xl font-bold mb-3 flex items-center">
                                <div className="w-8 h-8 rounded-full bg-[#145068] mr-3 flex items-center justify-center text-yellow-600">
                                    1
                                </div>
                                Cerámica de San Juan de Oriente
                            </h3>
                            <p className="text-gray-700">
                                Poblado conocido como "Pueblo de Alfareros" donde se mantienen técnicas precolombinas de cerámica.
                            </p>
                        </div>

                        <div className="text-left">
                            <h3 className="text-2xl font-bold mb-3 flex items-center">
                                <div className="w-8 h-8 rounded-full bg-[#145068] mr-3 flex items-center justify-center text-yellow-600">
                                    2
                                </div>
                                Hamacas de Masaya
                            </h3>
                            <p className="text-gray-700">
                                Tejidas a mano con vibrantes colores, son un símbolo de descanso y tradición nicaragüense.
                            </p>
                        </div>
                    </div>


                </div>
            </div>




        </div>
    );
};

export default CulturaScroll;