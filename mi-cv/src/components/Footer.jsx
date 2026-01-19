export default function Footer() {
    return (
        <footer className="bg-purple-950 text-purple-300 w-full py-8 mt-20 border-t border-purple-800 shadow-[0_-2px_15px_#6b21a8]">
            <div className="mx-5 px-6 flex flex-col md:flex-row justify-between items-center gap-4 font-mono">
                {/* Nombre / Marca */}
                <p className="text-base opacity-80 my-2">
                    © {new Date().getFullYear()} Juanma Molins
                </p>

                {/* Enlaces */}
                <nav className="flex gap-6 text-xl my-4">
                    <a
                        href="https://github.com/Juanma2111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/juan-manuel-molins-díaz-115952205"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition"
                    >
                        LinkedIn
                    </a>
                </nav>

                {/* Built with React */}
                <p className="text-sm opacity-60 my-2">
                    Built with <span className="text-purple-400">React</span> ⚛️
                    & TailwindCSS
                </p>
            </div>
        </footer>
    );
}
