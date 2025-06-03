// src/components/NicaraguaTourism.tsx
"use client";
import React from "react";
import { StickyScroll } from "./ui/ScrollReveal";

const tourismContent = [
  {
    title: "Granada Colonial",
    description: "La ciudad colonial mejor preservada de Nicaragua, famosa por su arquitectura colorida y su ubicación junto al Lago Cocibolca. Explora sus calles empedradas y disfruta de un paseo en coche de caballos.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="text-center p-4">
          <h3 className="text-xl font-bold mb-2">Granada</h3>
          <p className="text-sm">Ciudad colonial a orillas del lago</p>
        </div>
      </div>
    ),
  },
  {
    title: "Isla de Ometepe",
    description: "Una isla formada por dos volcanes en medio del Lago Cocibolca. Ideal para ecoturismo, con senderos hacia cascadas, petroglifos precolombinos y playas de arena volcánica.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="text-center p-4">
          <h3 className="text-xl font-bold mb-2">Ometepe</h3>
          <p className="text-sm">Isla volcánica en el lago más grande</p>
        </div>
      </div>
    ),
  },
  {
    title: "San Juan del Sur",
    description: "El destino playero más popular de Nicaragua, conocido por sus impresionantes puestas de sol y ambiente vibrante. Perfecto para surf, relajación y vida nocturna.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="text-center p-4">
          <h3 className="text-xl font-bold mb-2">San Juan del Sur</h3>
          <p className="text-sm">Paraíso de surfistas y viajeros</p>
        </div>
      </div>
    ),
  },
  {
    title: "León y sus Volcanes",
    description: "Centro cultural e histórico con la catedral más grande de Centroamérica y acceso a impresionantes volcanes activos. Ideal para el sandboarding en el Cerro Negro.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="text-center p-4">
          <h3 className="text-xl font-bold mb-2">León</h3>
          <p className="text-sm">Ciudad universitaria entre volcanes</p>
        </div>
      </div>
    ),
  },
  {
    title: "Corn Island",
    description: "Dos islas caribeñas con playas de arena blanca y aguas turquesas. Un paraíso para el buceo, snorkel y disfrute de la cultura caribeña nicaragüense.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="text-center p-4">
          <h3 className="text-xl font-bold mb-2">Corn Island</h3>
          <p className="text-sm">Caribe nicaragüense en estado puro</p>
        </div>
      </div>
    ),
  },
];

export default function ParallaxTurismo() {
  return (
    <div className="w-full py-12 ">
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
        Tesoros Turísticos de Nicaragua
      </h2>
      <StickyScroll 
        content={tourismContent} 
        
      />
    </div>
  );
}