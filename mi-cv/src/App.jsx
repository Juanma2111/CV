import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col h-screen pt-16">
                <div id="title" className="m-5 font-game text-purple-950">
                    <h1 className="text-4xl">Hi, mi name is: </h1>
                    <h1 className="pt-3 text-4xl">JUAN MANUEL MOLINS</h1>
                </div>
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
