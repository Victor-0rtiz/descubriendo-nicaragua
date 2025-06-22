import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Cerrar menú al cambiar tamaño de pantalla (responsive)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Efecto de scroll para la barra de navegación
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { label: "Turismo", href: "#turismo" },
    { label: "Gastronomía", href: "#gastronomia" },
    { label: "Cultura", href: "#" },
    { label: "Tradiciones", href: "#" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#145068] shadow-lg py-4' : 'bg-transparent py-4'}`}>
      <nav className="mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between">
        <a href="#" aria-label="Inicio">
          <img 
            src="logo.png" 
            alt="Logo" 
            className={`transition-all duration-300 ${isScrolled ? 'w-32' : 'w-40'}`}
          />
        </a>

        {/* Menú para escritorio */}
        <ul className="hidden md:flex space-x-8 lg:space-x-10 text-white font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className="hover:text-gray-200 transition-colors duration-200 py-2 block"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón móvil */}
        <button 
          id="menu-toggle"
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-1"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menú móvil con transiciones */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
        
        <ul 
          id="menu"
          className={`fixed top-0 right-0 h-full w-3/4 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-20 px-6 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="border-b border-gray-100 last:border-b-0">
              <a 
                href={item.href} 
                className="block py-4 text-gray-800 hover:text-[#145068] transition-colors duration-200 font-medium"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}