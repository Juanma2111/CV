import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { TypeAnimation } from "react-type-animation";

import userImage from "./assets/user.jpg";
import gitIcon from "./assets/logos/github_icon.png";

function App() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col pt-16 h-screen">
                <div
                    id="introduction"
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 my-28 md:my-60 px-2 md:px-8 justify-center items-center"
                >
                    {/*Imagen*/}
                    <div className="md:col-span-1 flex flex-col px-10 text-center items-center text-sm md:text-base lg:text-lg">
                        <img
                            src={userImage}
                            alt="Juanma Molins"
                            className="mb-2 w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 object-cover rounded-full shadow-lg"
                        />
                        <h3 className="my-4 font-spacemono text-lg lg:text-xl">
                            jmmolinsdiaz@gmail.com
                        </h3>
                        <button className="m-2 btn bg-purple-950 hover:bg-purple-800 text-white flex items-center">
                            {/* HACERLO FUNCIONAR ---------------------------------------------------------------------------------------- */}
                            Ver código fuente
                            <img
                                src={gitIcon}
                                alt="GitHub"
                                width={25}
                                height={25}
                                className="ml-3"
                            />
                        </button>
                        <button className="m-2 btn bg-purple-950 hover:bg-purple-800 text-white">
                            {/* HACERLO FUNCIONAR ---------------------------------------------------------------------------------------- */}
                            Descargar CV
                        </button>
                    </div>

                    {/*Texto animado */}
                    <div
                        id="title"
                        className="md:col-span-2 flex flex-col m-2 md:m-6 md:px-10 items-center text-center min-h-40"
                    >
                        <h1 className="flex flex-col gap-4 font-game text-2xl md:text-3xl lg:text-5xl whitespace-pre-line">
                            <span>
                                <TypeAnimation
                                    sequence={[
                                        500,
                                        "Hi, mi name is\n\nJUAN MANUEL MOLINS",
                                    ]}
                                    speed={10}
                                    wrapper="span"
                                    repeat={0}
                                    cursor={0}
                                />
                            </span>
                        </h1>
                        <h2 className="mt-10 font-spacemono text-xl md:text-2xl">
                            <TypeAnimation
                                sequence={[4100, "I am a Web Developer"]}
                                speed={10}
                                wrapper="span"
                                repeat={0}
                                cursor={0}
                            />
                        </h2>
                    </div>
                </div>

                <Skills />

                {/* PRUEBAS -------------------------------------------- */}
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="mt-5">
                        Esto es POR LA CARA pa probar el texto compi
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Tailwind está funcionando 🎨
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-purple-600 to-indigo-500 h-full transition-all duration-700"
                            style={{ width: "80%" }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
