"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
    imageUrl,
    children1,
    children2,
    children3,
    childrenClassName,
    imageClassName,
    className,
}: {
    imageUrl: string;
    children1: React.ReactNode | string;
    children2: React.ReactNode | string;
    children3: React.ReactNode | string;
    childrenClassName?: string;
    imageClassName?: string;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const [direction, setDirection] = useState<
        "top" | "bottom" | "left" | "right" | string
    >("left");

    return (
        <div
            ref={ref}
            className={cn(
                "w-[230px] h-[325px] bg-transparent rounded-lg overflow-hidden group/card relative",
                className
            )}
        >
            <AnimatePresence mode="wait">
                <div className="relative h-full w-full group/bento hover:shadow-xl transition duration-200 shadow-input">
                    <div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10" />
                    <div className="h-full w-full relative bg-gray-50">
                        <img
                            alt="image"
                            className={cn(
                                "h-full w-full object-cover",
                                imageClassName
                            )}
                            width="1000"
                            height="1000"
                            src={imageUrl}
                        />
                    </div>

                    <div className="group-hover/bento:translate-x-2 transition duration-200">
                        {/* Child 1 */}
                        <div
                            className={cn(
                                "dark-purple absolute bottom-[72px] left-4 z-40 font-bold",
                                childrenClassName
                            )}
                        >
                            {children1}
                        </div>

                        {/* Child 2 */}
                        <div
                            className={cn(
                                "text-slate-700 text-sm absolute bottom-[56px] left-4 z-40",
                                childrenClassName
                            )}
                        >
                            {children2}
                        </div>

                        {/* Child 3 */}
                        <div
                            className={cn(
                                "dark-purple absolute bottom-[28px] left-4 z-40 font-bold ",
                                childrenClassName
                            )}
                        >
                            {children3}
                        </div>
                    </div>
                </div>
            </AnimatePresence>
        </div>
    );
};
