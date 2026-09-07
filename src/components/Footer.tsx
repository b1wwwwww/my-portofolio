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
      className="relative overflow-hidden bg-[#020b1d] px-6 py-20 text-slate-100 md:py-28"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.14) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="pt-6">
          <div className="mb-6 flex items-center gap-3 text-slate-200">
            <span className="h-px w-10 bg-slate-500" />
            <span className="text-sm font-medium uppercase tracking-[0.12em] text-slate-300">Contact</span>
          </div>

          <h2 className="max-w-[420px] font-display text-[2.7rem] leading-[0.92] tracking-[-0.08em] text-white sm:text-[3.6rem] lg:text-[4.5rem]">
            Let&apos;s build something
            <span className="block">amazing together.</span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">
            I create meaningful experiences at the intersection of design and code.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
            Whether you have a question or a project in mind, feel free to deploy a message via the terminal below!
          </p>

          <div className="mt-8 text-lg text-slate-300">
            <span className="font-semibold uppercase tracking-[0.12em] text-slate-200">Email:</span>{" "}
            <a href="mailto:hello@example.com" className="text-cyan-400 transition-colors hover:text-cyan-300">
              hello@example.com
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-[640px] overflow-hidden rounded-xl border border-cyan-400/40 bg-[#020c18]/90 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 border-b border-slate-700/80 bg-slate-900/80 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 text-[11px] uppercase tracking-[0.14em] text-slate-400">message_payload.sh</span>
          </div>

          <div className="bg-[#02070d] px-6 py-5 font-mono text-[13px] leading-7 text-slate-200 sm:text-[15px]">
            <div className="mb-4 text-slate-200">
              <span className="text-cyan-300">guest@b1wwwwww</span>
              <span className="text-slate-400">:~$</span>{" "}
              <span className="text-slate-200">sudo init contact --form</span>
            </div>

            <div className="space-y-4 text-slate-200">
              <label className="flex items-center gap-3">
                <span className="min-w-[78px] text-cyan-300">NAME:</span>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name..."
                  className="flex-1 border-l border-cyan-400/80 bg-transparent pl-3 text-slate-200 placeholder:text-slate-500 focus:outline-none"
                />
              </label>

              <label className="flex items-center gap-3">
                <span className="min-w-[78px] text-cyan-300">EMAIL:</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="flex-1 border-l border-cyan-400/80 bg-transparent pl-3 text-slate-200 placeholder:text-slate-500 focus:outline-none"
                />
              </label>

              <label className="flex items-start gap-3">
                <span className="mt-1 min-w-[78px] text-cyan-300">MESSAGE:</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows={5}
                  className="min-h-[120px] flex-1 resize-y border-l border-cyan-400/80 bg-transparent pl-3 pt-1 text-slate-200 placeholder:text-slate-500 focus:outline-none"
                />
              </label>
            </div>

            <div className="mt-7 text-sm text-slate-300">
              <span className="text-cyan-300">/*</span>{" "}
              <span className="text-slate-300">Ready to deploy your message.</span>{" "}
              <span className="text-cyan-300">*/</span>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-md border border-cyan-400/80 bg-transparent px-4 py-3 text-center text-[13px] font-medium tracking-[0.18em] text-cyan-300 transition-colors hover:bg-cyan-500/5"
            >
              [ COMMIT &amp; PUSH ]
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
}
