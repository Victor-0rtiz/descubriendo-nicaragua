import React from 'react';

const CulturaNicaragua = () => {
   return (
    <div className="w-full lg:h-screen h-full m-auto flex items-center justify-center py-20">
      <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
        <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center">
          <div className="relative">
            {/* Imagen lateral 1 - Baile folklórico */}
            <div className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full overflow-hidden ">
              <img src='costacaribe.jpg'  className="object-cover w-full h-full" />
            </div>

            {/* Imagen lateral 2 - Artesanía */}
            <div className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full overflow-hidden ">
              <img src='artesania.webp'  className="object-cover w-full h-full" />
            </div>

            {/* Imagen lateral 3 - Volcán */}
            <div className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full overflow-hidden ">
              <img src='volcan.avif'  className="object-cover w-full h-full" />
            </div>

            {/* Imagen principal - Cultura Nicaragüense */}
            <div className="rounded-full relative overflow-hidden right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-[#145068]">
              <img src='cultura.jpg'  className="object-cover w-full h-full" />
            </div>
          </div>
          
          {/* Contenido sobre la cultura */}
          <div className="lg:w-[60%] p-4 w-full h-full flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl bg-white">
            <div className="inline-block bg-[#145068] px-4 py-1 rounded-full mb-4">
              <span className="text-white text-sm font-semibold tracking-wider">PATRIMONIO CULTURAL</span>
            </div>
            
            <h2 className="text-4xl text-center font-bold text-[#145068] px-4 py-1 md:mt-0 mt-10">
              La Rica Cultura de Nicaragua
            </h2>
            
            <p className="md:text-2xl text-xl text-center text-yellow-600 font-bold my-5">
              Tradiciones que cuentan nuestra historia
            </p>
            
            <div className="space-y-4 mt-4 text-justify sm:px-2 text-gray-700">
              <p>
                Nicaragua, la tierra de lagos y volcanes, posee una cultura vibrante que fusiona influencias indígenas, españolas y africanas. Nuestras tradiciones se expresan en coloridos bailes folklóricos, artesanías únicas y festividades llenas de alegría.
              </p>
              
              <p>
                Desde las procesiones de Semana Santa en León hasta el Güegüense, Patrimonio Oral e Inmaterial de la Humanidad, cada rincón del país ofrece una expresión única de nuestra identidad nacional.
              </p>
              
              
            </div>

          
          </div>
        </div>
        
        {/* Elementos decorativos */}
        <div className="absolute bottom-10 left-5 w-16 h-16 rounded-full bg-yellow-600 opacity-20"></div>
        <div className="absolute top-20 right-10 w-24 h-24 rounded-full bg-[#145068] opacity-10"></div>
        <div className="absolute top-1/3 left-1/4 w-12 h-12 rounded-full bg-yellow-600 opacity-30"></div>
      </div>
    </div>
  );
};

export default CulturaNicaragua; 