import { TypeAnimation } from "react-type-animation";

{
    /** Components */
}
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";

{
    /** Others */
}
import userImage from "./assets/user.jpg";
import gitIcon from "./assets/logos/github_icon.png";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col pt-16 h-screen" id="home">
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
                        <a
                            href="https://github.com/Juanma2111/CV"
                            target="_blank"
                            className="m-2 btn bg-purple-950 hover:bg-purple-800 text-white flex items-center"
                        >
                            Ver código fuente
                            <img
                                src={gitIcon}
                                alt="GitHub"
                                width={25}
                                height={25}
                                className="ml-3"
                            />
                        </a>

                        <a
                            href="/CV/mi-cv/public/" 
                            target="_blank"
                            className="m-2 btn bg-purple-950 hover:bg-purple-800 text-white flex items-center"
                        >
                            Ver CV
                        </a>
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
                                        "Hi, my name is\n\nJUAN MANUEL MOLINS",
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

                <div
                    id="skills"
                    className="flex flex-col m-10 my-14 text-start items-center"
                >
                    <h2 className="font-game text-3xl mb-10">SKILLS</h2>

                    <Skills />
                </div>

                <div
                    id="about"
                    className="flex flex-col m-10 my-14 text-start items-center"
                >
                    <h2 className="font-game text-3xl mb-10">ABOUT ME</h2>

                    <About />
                </div>

                <div
                    id="contact"
                    className="flex flex-col m-10 my-24 text-start items-center"
                >
                    <ContactForm />
                </div>

                {/* PRUEBAS -------------------------------------------- */}
                <div id="footer" className="flex flex-col">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
