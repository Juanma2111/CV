import { useState, useRef, useEffect } from "react";

export default function SkillItem({ icon, alt, level }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset =
        circumference - ((isVisible ? level : 0) / 100) * circumference;

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.7 }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    });

    return (
        <div ref={ref} className="flex flex-col items-center">
            {/* AÑADIR ANIMACIÓN Y COLORES -------------------------------------------------------------------------------------------------- */}
            <svg
                className=" w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 transform -rotate-90"
                viewBox="0 0 100 100"
            >
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="#d1d5dc"
                    strokeWidth="7"
                    fill="transparent"
                />
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="url(#grad)"
                    strokeWidth="7"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-[2000ms] ease-in-out"
                />
                <defs>
                    <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#3c0366" />
                        <stop offset="100%" stopColor="#ad46ff" />
                    </linearGradient>
                </defs>
            </svg>

            <img
                src={icon}
                alt={alt}
                className="w-12 h-12 mt-6 md:w-20 md:h-20 md:mt-10 lg:w-24 lg:h-24 lg:mt-12 absolute"
            />
        </div>
    );
}
