import React from 'react'

export default function Gastronomia() {
  return (
    <div id="gastronomia" className="relative flex min-h-screen flex-col justify-center overflow-hidden  py-6 sm:py-12">
      <div className="w-full items-center mx-auto max-w-screen-lg px-4">
        <div className="group grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna izquierda con imágenes */}
          <div className="relative flex before:block before:absolute before:h-1/6 before:w-2 before:bg-stone-200 before:top-0 before:right-0 before:rounded-lg before:transition-all group-hover:before:bg-yellow-500 ">
            <div className="absolute bottom-0 right-0  w-4/6 overflow-hidden flex flex-col justify-center  ">
              <img src="vaho.jpg" alt="" />
            </div>

            <div className="h-2/3  overflow-hidden  ">
              <img src="guirilas.jpg" alt="" />
            </div>

            <div className="-rotate-90 font-bold mt-2 mb-8 gap-2 h-16 text-2xl leading-7 text-[#145068]">
              <span>Sabores <br /> Tradicionales</span>
            </div>


          </div>

          {/* Columna derecha con contenido */}
          <div>
            <div className="pl-0 md:pl-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#145068]">
                La Rica Gastronomía de Nicaragua
              </h1>
              <h2 className="text-2xl font-medium mb-6 text-yellow-600 italic">
                Sabores auténticos que cuentan historias
              </h2>
              <p className="mb-6 text-[#145068] leading-relaxed">
                Nicaragua ofrece una fusión única de sabores indígenas, españoles y criollos.
                Desde las costas del Pacífico y Caribe hasta las tierras altas del norte,
                cada región tiene su propia identidad culinaria basada en ingredientes frescos
                como maíz, frijoles, plátanos, yuca y frutas tropicales.
              </p>




            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
