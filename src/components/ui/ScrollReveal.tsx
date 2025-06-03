import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    // Configuramos useScroll para que observe el scroll dentro del contenedor ref
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end end"], // de inicio a fin exacto del scroll del contenedor
    });

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (cardLength <= 1) return;

        // Dividimos el scroll en breakpoints uniformes desde 0 a 1, uno por cada card
        const cardsBreakpoints = content.map((_, index) => index / (cardLength - 1));

        // Buscamos el índice del breakpoint más cercano al progreso actual
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (closestIndex, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                return distance < Math.abs(latest - cardsBreakpoints[closestIndex])
                    ? index
                    : closestIndex;
            },
            0
        );

        setActiveCard(closestBreakpointIndex);
    });

    // Backgrounds de ejemplo, puedes cambiar por imágenes si quieres
    const backgroundImages = [
        "url('granada1.jpg')",
        "url('ometepe1.jpg')",
        "url('sanjuandelsur1.jpg')",
        "url('leon1.jpg')",
        "url('cornisland1.jpg')",
    ];



    // Asegurar que tenemos suficientes imágenes
    const safeActiveIndex = Math.min(activeCard, backgroundImages.length - 1);
    const backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), ${backgroundImages[safeActiveIndex]
        }`;

    return (
        <motion.div
            ref={ref}
            animate={{
                backgroundImage,
            }}
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="relative flex h-[35rem] justify-start space-x-10 overflow-y-auto rounded-md p-10"
        >
            {/* Texto scrollable */}
            <div className="relative flex items-start ml-5 px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0 }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0 }}
                                className="text-lg mt-4 max-w-sm text-slate-300"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    {/* Espacio al final para scroll */}
                    <div className="h-40" />
                </div>
            </div>

       
        </motion.div>
    );
};
