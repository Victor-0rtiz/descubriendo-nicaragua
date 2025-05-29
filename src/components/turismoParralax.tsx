import React, { useRef } from 'react';
import { Scroll } from 'scrollex';

const ParallaxTurismo = () => {
  const containerRef = useRef(null);

  // Datos de destinos turísticos de Nicaragua con imágenes
  const destinations = [
    {
      id: 1,
      name: "Isla de Ometepe",
      description: "Formada por dos majestuosos volcanes en el Lago de Nicaragua, Ometepe ofrece paisajes espectaculares y ecoturismo. Conoce sus comunidades indígenas y disfruta de sus playas de arena volcánica.",
      image: "https://images.unsplash.com/photo-1614861897560-1d0c0f9a0a0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    },
    {
      id: 2,
      name: "Granada",
      description: "La ciudad colonial mejor preservada de Nicaragua, con arquitectura colorida y calles empedradas. Explora la Catedral de Granada, el lago Cocibolca y las cercanas Isletas de Granada.",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    },
    {
      id: 3,
      name: "Volcán Masaya",
      description: "Uno de los pocos volcanes activos accesibles en el mundo. Visita nocturna para ver el resplandor de la lava. Experimenta su impacto cultural en las comunidades locales.",
      image: "https://images.unsplash.com/photo-1614861897560-1d0c0f9a0a0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    },
    {
      id: 4,
      name: "León",
      description: "Centro cultural e histórico con la majestuosa Catedral de León, declarada Patrimonio de la Humanidad. Conoce su rica historia revolucionaria y vibrante vida universitaria.",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    },
    {
      id: 5,
      name: "Corn Islands",
      description: "Paraíso caribeño con playas de arena blanca y aguas turquesas. Sumérgete en la cultura afrocaribeña y disfruta de la gastronomía local con mariscos frescos.",
      image: "https://images.unsplash.com/photo-1614861897560-1d0c0f9a0a0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    },
    {
      id: 6,
      name: "San Juan del Sur",
      description: "Famoso destino de playa en el Pacífico, conocido por su ambiente relajado y vibrante vida nocturna. Ideal para surfistas y amantes del atardecer sobre el océano.",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    }
  ];

  // Keyframes para las animaciones de desplazamiento
  const keyframes = {
    imageContainer: ({ section }: any) => ({
      [section.topAt("container-bottom")]: {
        translateY: 125,
        translateX: -250,
        opacity: 0,
        rotateX: -25,
        rotateY: -50,
        scale: 0.4
      },
      [section.topAt("container-top")]: {
        translateY: 0,
        translateX: 0,
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        scale: 1
      },
      [section.bottomAt("container-top")]: {
        translateY: -125,
        translateX: 250,
        opacity: 0,
        rotateX: 25,
        rotateY: 50,
        scale: 0.4
      }
    }),
    textContainer: ({ section }: any) => ({
      [section.topAt("container-bottom")]: {
        translateY: 125,
        translateX: 250,
        opacity: 0,
        rotateX: 25,
        rotateY: 50,
        scale: 0.4
      },
      [section.topAt("container-top")]: {
        translateY: 0,
        translateX: 0,
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        scale: 1
      },
      [section.bottomAt("container-top")]: {
        translateY: -125,
        translateX: -250,
        opacity: 0,
        rotateX: -25,
        rotateY: -50,
        scale: 0.4
      }
    }),
    background: ({ section }: any) => ({
      [section.topAt("container-bottom")]: {
        opacity: 0.2
      },
      [section.topAt("container-top")]: {
        opacity: 1
      },
      [section.bottomAt("container-top")]: {
        opacity: 0.2
      }
    })
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b overflow-hidden">
      {/* Encabezado flotante */}
      <div className="absolute top-0 left-0 right-0 z-30 py-4 px-6 text-center  backdrop-blur-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Descubre Nicaragua</h1>
        <p className="text-blue-200 text-sm md:text-base">Tierra de Lagos y Volcanes</p>
      </div>
      
      {/* Galería con Scrollex */}
      <Scroll.Container
        ref={containerRef}
        scrollAxis="y"
        className="h-screen"
        
      >
        {destinations.map((destination) => (
          <Scroll.Section
            key={destination.id}
            className="h-screen relative"
          >
            {/* Fondo de la sección con efecto parallax */}
            <Scroll.Item
              keyframes={keyframes.background}
              className="absolute inset-0 z-0"
            >
              <div className="w-full h-full opacity-30">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
              </div>
            </Scroll.Item>
            
            {/* Contenido principal */}
            <div
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 p-4 md:p-8"
              style={{ perspective: '600px', transformStyle: 'preserve-3d' }}
            >
              {/* Contenedor de texto */}
              <Scroll.Item
                keyframes={keyframes.textContainer}
                className="md:w-1/2 max-w-2xl z-10"
              >
                <div className="bg-[#145068] backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="h-1 w-12 bg-amber-400 mr-3"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {destination.name}
                    </h2>
                  </div>
                  <p className="text-blue-100 text-base md:text-lg">
                    {destination.description}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Naturaleza", "Cultura", "Aventura"].map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-blue-600/50 text-blue-100 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Scroll.Item>

              {/* Contenedor de imagen */}
              <Scroll.Item
                keyframes={keyframes.imageContainer}
                className="md:w-2/5 z-10 max-w-md"
              >
                <div className="relative h-64 w-full md:h-80 rounded-xl overflow-hidden shadow-2xl transform rotate-3 border-4 border-white">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-bold text-xl">{destination.name}</div>
                    <div className="text-blue-100 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Nicaragua
                    </div>
                  </div>
                  
                  
                </div>
              </Scroll.Item>
            </div>

            {/* Indicador de desplazamiento */}
            <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
              <div className="text-white animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </Scroll.Section>
        ))}
      </Scroll.Container>
      
      
    </div>
  );
};

export default ParallaxTurismo;