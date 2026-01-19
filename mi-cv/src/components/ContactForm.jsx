import { useState } from "react";
import emailjs from "@emailjs/browser";

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

        /** VALIDACIÓN SIMPLE */
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("error1");
            return;
        }

        setStatus("loading");

        emailjs
            .send(
                "service_g7t0qow",
                "template_7kk9uqb",
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                "w1d0NZKUNbLfI78Aw"
            )
            .then(() => {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => {
                setStatus("error2");
            });
    };

    return (
        <div className="w-full flex justify-center mt-20">
            <div className="max-w-7xl w-full border border-purple-950 rounded-xl p-8 shadow-[0_0_20px_#9333ea] relative overflow-hidden">
                {/* Scanlines cyberpunk */}
                <div className="pointer-events-none absolute inset-0 opacity-10 bg-[repeating-linear-gradient(0deg,#8b5cf6_0px,#8b5cf6_1px,transparent_2px,transparent_4px)]"></div>

                {/* Título estilo terminal */}
                <h2 className="font-game text-purple-950 text-2xl md:text-3xl text-center mb-12 md:mb-28">
                    CONTACT INTERFACE
                    <span className="animate-pulse transition-all duration-100">
                        _
                    </span>
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="font-spacemono space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 mb-10">
                        {/* Nombre */}
                        <div className="md:col-span-1 mb-10 md:mb-0">
                            <label className="text-purple-950 block mb-1">
                                &gt; full_name:
                            </label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-purple-600 focus:border-purple-400 text-purple-600 text-base md:text-lg p-2 outline-none transition"
                                placeholder="Juanma Molins"
                                autoComplete="off"
                            />
                        </div>

                        {/* Email */}
                        <div className="md:col-span-1">
                            <label className="text-purple-950 block mb-1">
                                &gt; email_addr:
                            </label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-purple-600 focus:border-purple-400 text-purple-600 text-base md:text-lg p-2 outline-none transition"
                                placeholder="you@example.com"
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    {/* Mensaje */}
                    <div>
                        <label className="text-purple-950 block mb-1">
                            &gt; message:
                        </label>
                        <textarea
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-transparent border border-purple-600 focus:border-purple-400 text-purple-600 text-base md:text-lg p-3 outline-none transition"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-purple-950 hover:bg-purple-800 text-white text-base md:text-lg px-6 py-3 rounded-2xl shadow-[0_0_10px_#9333ea] hover:shadow-[0_0_10px_#a855f7] transition font-bold tracking-widest"
                    >
                        SEND_MESSAGE()
                    </button>

                    {/* Mensajes */}
                    {status === "success" && (
                        <p className="text-green-600 mt-4">
                            &gt; Message delivered ✓
                        </p>
                    )}

                    {status === "error1" && (
                        <p className="text-red-600 mt-4">
                            &gt; ERROR: Missing fields
                        </p>
                    )}

                    {status === "error2" && (
                        <p className="text-red-600 mt-4">
                            &gt; ERROR: Transmission failed
                        </p>
                    )}

                    {status === "loading" && (
                        <p className="text-purple-600 mt-4">
                            &gt; Transmitting message...
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
