export default function About() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-5 place-items-center text-center text-white text-base md:text-lg lg:text-xl">
            {/**  ANIMACIÓN */}
            <div
                id="past"
                className="p-6 w-full md:w-5/6 rounded-lg shadow-2xl bg-purple-950 h-full"
            >
                <h1 className="text-3xl font-spacemono mb-4">PAST</h1>
                <p>
                    I first became interested in web development when I realised
                    how much impact a well-designed digital experience can have.
                    This curiosity led me to study the fundamentals of frontend
                    development ( HTML, CSS and JavaScript ) before moving on to
                    modern tools, frameworks and best practices. What motivated
                    me most was the balance between creativity and
                    problem-solving, and the opportunity to build something both
                    functional and visually engaging.
                </p>
            </div>
            <div
                id="present"
                className="p-6 w-full md:w-5/6 rounded-lg shadow-2xl bg-purple-950 h-full"
            >
                <h1 className="text-3xl font-spacemono mb-4">PRESENT</h1>
                <p>
                    I am currently focused on expanding my skills through
                    personal projects while actively seeking my first
                    professional opportunity in the industry. My work focuses on
                    strengthening my understanding of modern web development
                    principles, clean coding practices and efficient
                    problem-solving. I recently obtained my C1 English
                    certificate, which allows me to work comfortably with
                    technical documentation and communicate effectively in
                    international environments.
                </p>
            </div>
            <div
                id="future"
                className="md:col-span-2 lg:col-span-1 p-6 w-full md:w-2/5 lg:w-5/6 rounded-lg shadow-2xl bg-purple-950 h-full"
            >
                <h1 className="text-3xl font-spacemono mb-4">FUTURE</h1>
                <p>
                    Looking ahead, my goal is to join a team where I can
                    contribute to real projects, continue developing my
                    technical expertise, and grow as a professional. I am
                    particularly motivated by roles that combine thoughtful UI
                    development with solid technical foundations, and that offer
                    room for continuous learning. Ultimately, I aim to become a
                    versatile and reliable developer capable of delivering
                    high-quality, user-centred solutions.
                </p>
            </div>
        </div>
    );
}
