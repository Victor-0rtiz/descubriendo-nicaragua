
export default function Footer() {
  return (
    <footer className="bg-[#145068] text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* Sección principal */}
        <div className="flex flex-wrap justify-between text-left">
          {/* Información del proyecto */}
          <div className="w-full md:w-6/12 mb-8 md:mb-0">
            <h4 className="text-2xl font-bold mb-2">Descubriendo Nicaragua</h4>
            <p className="text-sm leading-relaxed max-w-md">
              Un espacio para explorar la riqueza cultural, natural y gastronómica de nuestro país. Este proyecto busca inspirar, educar y conectar con nuestras raíces a través del conocimiento y la experiencia.
            </p>
          </div>

          {/* Enlaces útiles */}
          <div className="w-full md:w-5/12 flex flex-wrap gap-8">
            <div>
              <h5 className="uppercase text-sm font-semibold mb-2 text-orange-300">Secciones</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#turismo" className="hover:text-orange-300">Turismo</a></li>
                <li><a href="#gastronomia" className="hover:text-orange-300">Gastronomía</a></li>
                <li><a href="#cultura" className="hover:text-orange-300">Cultura y Arte</a></li>
                <li><a href="#tradiciones" className="hover:text-orange-300">Tradiciones</a></li>
              </ul>
            </div>
            <div>
              <h5 className="uppercase text-sm font-semibold mb-2 text-orange-300">Contacto</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:info@nicaragua.com" className="hover:text-orange-300">info@nicaragua.com</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300">Instagram</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-6 border-gray-500 opacity-30" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Descubriendo Nicaragua. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
