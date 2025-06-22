

export default function Turismo() {
  return (
    <section
      id="turismo"
      className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-8 max-w-6xl mx-auto"
    >
      {/* Imagenes al lado derecho */}
      <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-48 md:h-56 overflow-hidden rounded-lg shadow-lg">
            <img
              src="volcanmasaya.avif"
              alt="Volcán Masaya"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative h-64 md:h-72 overflow-hidden rounded-lg shadow-lg -mt-6">
            <img
              src="ometepe.jpg"
              alt="Isla de Ometepe"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative h-64 md:h-72 overflow-hidden rounded-lg shadow-lg -mt-6">
            <img
              src="granada.jpg"
              alt="Granada colonial"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative h-48 md:h-56 overflow-hidden rounded-lg shadow-lg">
            <img
              src="cornisland.jpg"
              alt="Corn Islands"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Texto introductorio a Turismo */}
      <div className="md:w-1/2 pr-0 md:pr-12">
        <span className="text-sm uppercase tracking-wide text-[#145068] mb-2 block">
          Explora Nicaragua
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#145068]  mb-4">
          Turismo que conecta con la tierra y la historia
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-4">
          Nicaragua ofrece paisajes tan diversos como sorprendentes: volcanes activos, lagos milenarios, islas paradisíacas y ciudades coloniales llenas de historia. 
        </p>
        <p className="text-sm md:text-base text-gray-600">
          Esta sección te invita a descubrir lugares únicos, donde la naturaleza se une con la tradición para brindarte experiencias auténticas que enriquecen el alma.
        </p>
      </div>
    </section>
  );
}
