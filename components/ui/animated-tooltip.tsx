"use client";
import React, { useState } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";

export const AnimatedTooltip = ({
    items,
}: {
    items: {
        id: number;
        name: string;
        designation: string;
        href: string;
    }[];
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 10, damping: 5 };
    const x = useMotionValue(0); // going to set this value on mouse move
    // rotate the tooltip
    const rotate = useSpring(useTransform(x, [0, 0], [-0, 0]), springConfig);
    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [0, 0], [-0, 0]),
        springConfig
    );
    const handleMouseMove = (event: any) => {
        const halfWidth = event.target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
    };

    return (
        <>
            {items.map((item, idx) => (
                <div
                    className=" relative group"
                    key={item.name}
                    onMouseEnter={() => {
                        setHoveredIndex(null);
                        setHoveredIndex(item.id);
                    }}
                    // onMouseLeave={() => setHoveredIndex(null)}
                >
                    {hoveredIndex === item.id && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.6 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 10,
                                },
                            }}
                            exit={{ opacity: 0, y: 20, scale: 0.6 }}
                            style={{
                                translateX: translateX,
                                rotate: rotate,
                                whiteSpace: "nowrap",
                            }}
                            className="absolute -bottom-12 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                        >
                            <div className="font-bold text-white relative z-30 text-base">
                                {item.name}
                            </div>
                        </motion.div>
                    )}
                    <a
                        href={item.href}
                        className="contact-btn flex text-xl font-bold justify-center gap-2 w-36 h-14 items-center rounded-full group"
                    >
                        <div
                            onMouseMove={handleMouseMove}
                            className="object-cover !m-0 !p-0 object-top rounded-full w-36 h-14 content-center text-center group-hover:scale-105 group-hover:z-30 relative transition duration-500"
                        >
                            {item.designation}
                        </div>
                    </a>
                </div>
            ))}
        </>
    );
};
