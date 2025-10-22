import Navbar from "./components/Navbar";

import userImage from "./assets/user.jpg";

function App() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col h-screen pt-16">
                <div className="introduction flex flex-col md:flex-row justify-center items-center my-3 px-2 md:px-8">
                    {/*Imagen*/}
                    <div className="m-8 px-10">
                        <img
                            src={userImage}
                            alt="Juanma Molins"
                            className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full shadow-lg"
                        />
                    </div>

                    <div
                        id="title"
                        className="text-purple-950 flex flex-col items-center text-center m-2 md:m-6 md:px-10"
                    >
                        <h1 className="font-game text-2xl md:text-4xl flex flex-col gap-4">
                            <span>Hi, mi name is</span>
                            <span className="font-bold">
                                JUAN MANUEL MOLINS
                            </span>
                        </h1>
                        <h2 className="mt-8 font-spacemono text-xl md:text-2xl">
                            I am a Junior Web Developer
                        </h2>
                    </div>
                </div>

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
