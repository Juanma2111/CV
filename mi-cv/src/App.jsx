import Navbar from "./components/Navbar";
import { TypeAnimation } from "react-type-animation";

import userImage from "./assets/user.jpg";

function App() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col h-screen pt-16">
                <div
                    id="introduction"
                    className="flex flex-col md:flex-row justify-center items-center my-3 px-2 md:px-8"
                >
                    {/*Imagen*/}
                    <div className="flex flex-col m-8 px-10 text-purple-950 text-center items-center">
                        <img
                            src={userImage}
                            alt="Juanma Molins"
                            className="mb-2 w-40 h-40 md:w-60 md:h-60 object-cover rounded-full shadow-lg"
                        />
                        <h3 className="my-4 font-spacemono md:text-lg">
                            jmmolinsdiaz@gmail.com
                        </h3>
                        <button className="m-2 btn bg-purple-950 hover:bg-purple-800 text-white">
                            {/* HACERLO FUNCIONAR ---------------------------------------------------------------------------------------- */}
                            Descargar CV
                        </button>
                    </div>

                    <div
                        id="title"
                        className="flex flex-col m-2 md:m-6 md:px-10 text-purple-950 items-center text-center"
                    >
                        <h1 className="flex flex-col gap-4 font-game text-2xl md:text-4xl whitespace-pre-line">
                            <span>
                                {" "}
                                {/** Añadir tamaño minimo para normal y md: - para que no se mueva la foto */}
                                <TypeAnimation
                                    sequence={[
                                        500,
                                        "Hi, mi name is\n\nJUAN MANUEL MOLINS",
                                    ]}
                                    speed={10}
                                    wrapper="span"
                                    repeat={0}
                                    cursor={true}
                                />
                            </span>
                        </h1>
                        <h2 className="mt-10 font-spacemono text-xl md:text-2xl">
                            <TypeAnimation
                                sequence={[4100, "I am a Junior Web Developer"]}
                                speed={10}
                                wrapper="span"
                                repeat={0}
                                cursor={0}
                            />
                        </h2>
                    </div>
                </div>

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
                    <p className="mt-4 font-bold">venga a trabaja</p>
                </div>
            </div>
        </>
    );
}

export default App;
