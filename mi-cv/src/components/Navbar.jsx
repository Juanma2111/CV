import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Inicio", href: "#home" },
        { name: "Sobre mi", href: "#about" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-purple-950 shadow-md z-50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a
                    href="#home"
                    className="text-3xl font-bogle text-slate-200 tracking-wide"
                >
                    Juanma
                </a>

                {/* Botón móvil */}
                <button
                    className="md:hidden text-slate-200"
                    onClick={() => setIsOpen(!isOpen)}
                ></button>

                {/* Links */}
                <ul
                    className={`md:flex md:space-x-6 ${isOpen ? "block" : "hidden"} md:block`}
                >
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="block py-2 md:py-0 text-slate-200 hover:text-slate-50 transition"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
