export default function Contact() {
    return (
        <section className="min-h-screen bg-slate-950 px-6 py-20 text-white">
            <div className="mx-auto max-w-4xl">
                {/* Heading */}
                <div className="mb-14 text-center">
                    <h1 className="mb-4 text-5xl font-bold">Contact Me</h1>

                    <p className="text-lg text-slate-400">
                        Feel free to connect with me through GitHub, LinkedIn, or email.
                    </p>
                </div>

                {/* Social Links */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* GitHub */}
                    <a
                        href="https://github.com/AstonAaron"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-white/10 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800">
                        <h2 className="mb-3 text-2xl font-semibold text-cyan-400">GitHub</h2>

                        <p className="text-slate-400">
                            View my repositories, coding projects, and ongoing development work.
                        </p>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-white/10 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800">
                        <h2 className="mb-3 text-2xl font-semibold text-cyan-400">LinkedIn</h2>

                        <p className="text-slate-400">
                            Connect with me professionally and view my experience and skills.
                        </p>
                    </a>
                </div>

                {/* Contact Form */}
                <div className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-10">
                    <h2 className="mb-4 text-center text-3xl font-bold text-cyan-400">
                        Send Me a Message
                    </h2>

                    <p className="mb-8 text-center text-slate-400">
                        Have a project opportunity or want to collaborate?
                    </p>

                    <form
                        action="https://formsubmit.co/astonkid08@gmail.com"
                        method="POST"
                        className="space-y-6">
                        {/* Subject */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Subject
                            </label>

                            <input
                                type="text"
                                name="subject"
                                placeholder="Enter subject..."
                                required
                                className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Message
                            </label>

                            <textarea
                                name="message"
                                rows="6"
                                placeholder="Write your message..."
                                required
                                className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400"></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-cyan-400 px-6 py-4 text-lg font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
