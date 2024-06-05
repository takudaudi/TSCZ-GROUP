"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface LogoProps {
    className?: string;
}

export const Logo = ({
    className
}: LogoProps) => {
    return (
        <div className={cn("cursor-pointer font-bold text-5xl" && className)}>
            <span className="text-red-500"> T</span>
            <span className="text-blue-500">S</span>
            <span className="text-green-500">C</span>
            <span className="text-yellow-500">Z</span>
            
        </div>
    );
}