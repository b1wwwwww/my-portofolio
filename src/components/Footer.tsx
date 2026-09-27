"use client";

import { useState } from "react";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-slate-800/50 px-6 py-20 md:py-28 text-slate-100"
    >
      <div className="relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="pt-6">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-slate-700" />
            <span className="text-sm font-medium uppercase tracking-widest text-teal-400">Contact</span>
          </div>

          <h2 className="max-w-[420px] text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white font-bold">
            Let&apos;s build something amazing together.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-400">
            I create meaningful experiences at the intersection of design and code.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            Whether you have a question or a project in mind, feel free to reach out!
          </p>

          <div className="mt-8 text-base text-slate-400">
            <span className="font-semibold text-slate-300 uppercase tracking-widest">Email: </span>
            <a href="mailto:hello@example.com" className="text-teal-400 hover:text-teal-300 transition-colors">
              hello@example.com
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-[640px] overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/30 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 border-b border-slate-800/50 bg-slate-900/50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/60" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <span className="h-3 w-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-[11px] uppercase tracking-wider text-slate-500 font-mono">contact.sh</span>
          </div>

          <div className="bg-slate-950/40 px-6 py-6 font-mono text-[13px] leading-7 text-slate-300">
            <div className="mb-4">
              <span className="text-teal-400">user@nabil</span>
              <span className="text-slate-700">:~</span>
              <span className="text-slate-700">$</span>{" "}
              <span className="text-slate-400">sudo contact --init</span>
            </div>

            <div className="space-y-4 text-slate-300">
              <label className="flex items-center gap-3">
                <span className="min-w-[70px] text-slate-500 font-mono">name</span>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="your name"
                  className="flex-1 border-l border-slate-700/50 bg-transparent pl-3 text-slate-300 placeholder:text-slate-700 focus:outline-none"
                />
              </label>

              <label className="flex items-center gap-3">
                <span className="min-w-[70px] text-slate-500 font-mono">email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="flex-1 border-l border-slate-700/50 bg-transparent pl-3 text-slate-300 placeholder:text-slate-700 focus:outline-none"
                />
              </label>

              <label className="flex items-start gap-3">
                <span className="mt-1 min-w-[70px] text-slate-500 font-mono">message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="your message..."
                  rows={5}
                  className="min-h-[120px] flex-1 resize-y border-l border-slate-700/50 bg-transparent pl-3 pt-1 text-slate-300 placeholder:text-slate-700 focus:outline-none"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-lg border border-teal-500/50 bg-teal-500/10 px-4 py-3 text-center text-sm font-semibold tracking-wider text-teal-400 transition-colors hover:bg-teal-500/20 hover:border-teal-500/70 font-mono"
            >
              $ sudo send
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
}
