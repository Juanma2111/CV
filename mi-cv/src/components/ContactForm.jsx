import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        {
            /** VALIDACIÓN SIMPLE */
        }
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("error");
            return;
        }

        console.log("Formulario enviado: ", formData);
        setStatus("success");

        {
            /** RESET */
        }
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="w-full max-w-xl mx-auto mt-20 px-6">
            <h2 className="text-3xl font-game text-purple-950 text-center mb-8">
                Contact Me
            </h2>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl shadow-lg space-y-6"
            >
                {/* Nombre */}
                <div>
                    <label
                        className="block text-sm font-semibold mb-2"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                        placeholder="Your name"
                    />
                </div>

                {/* Email */}
                <div>
                    <label
                        className="block text-sm font-semibold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                        placeholder="you@example.com"
                    />
                </div>

                {/* Mensaje */}
                <div>
                    <label
                        className="block text-sm font-semibold mb-2"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                        placeholder="Write your message…"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white p-3 rounded-xl font-semibold transition"
                >
                    Send Message
                </button>

                {status === "success" && (
                    <p className="text-green-600 text-center mt-2 font-semibold">
                        Message sent successfully!
                    </p>
                )}

                {status === "error" && (
                    <p className="text-red-600 text-center mt-2 font-semibold">
                        Please fill all fields.
                    </p>
                )}
            </form>
        </div>
    );
}
