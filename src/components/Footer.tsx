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
      className="relative overflow-hidden bg-[#010504] border-t border-emerald-900/20 px-6 py-20 text-emerald-50 md:py-28"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.14) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="pt-6">
          <div className="mb-6 flex items-center gap-3 text-emerald-200">
            <span className="h-px w-10 bg-emerald-800" />
            <span className="text-sm font-medium uppercase tracking-[0.12em] text-emerald-400">Contact</span>
          </div>

          <h2 className="max-w-[420px] text-[2.7rem] leading-[0.92] tracking-[-0.08em] text-white sm:text-[3.6rem] lg:text-[4.5rem]">
            Let&apos;s build something
            <span className="block">amazing together.</span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-emerald-100/60">
            I create meaningful experiences at the intersection of design and code.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-emerald-100/60">
            Whether you have a question or a project in mind, feel free to deploy a message via the terminal below!
          </p>

          <div className="mt-8 text-lg text-emerald-100/60">
            <span className="font-semibold uppercase tracking-[0.12em] text-emerald-200">Email:</span>{" "}
            <a href="mailto:hello@example.com" className="text-emerald-400 transition-colors hover:text-emerald-300">
              hello@example.com
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-[640px] overflow-hidden rounded-xl border border-emerald-500/20 bg-[#022c22]/50 shadow-[0_0_40px_rgba(16,185,129,0.08)] backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 border-b border-emerald-900/40 bg-emerald-950/50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 text-[11px] uppercase tracking-[0.14em] text-emerald-100/40">message_payload.sh</span>
          </div>

          <div className="bg-[#010504] px-6 py-5 font-mono text-[13px] leading-7 text-emerald-50 sm:text-[15px]">
            <div className="mb-4 text-emerald-50">
              <span className="text-emerald-400">guest@nabil</span>
              <span className="text-emerald-800">:~$</span>{" "}
              <span className="text-emerald-50">sudo init contact --form</span>
            </div>

            <div className="space-y-4 text-emerald-50">
              <label className="flex items-center gap-3">
                <span className="min-w-[78px] text-emerald-400">NAME:</span>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name..."
                  className="flex-1 border-l border-emerald-500/50 bg-transparent pl-3 text-emerald-50 placeholder:text-emerald-800 focus:outline-none"
                />
              </label>

              <label className="flex items-center gap-3">
                <span className="min-w-[78px] text-emerald-400">EMAIL:</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="flex-1 border-l border-emerald-500/50 bg-transparent pl-3 text-emerald-50 placeholder:text-emerald-800 focus:outline-none"
                />
              </label>

              <label className="flex items-start gap-3">
                <span className="mt-1 min-w-[78px] text-emerald-400">MESSAGE:</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows={5}
                  className="min-h-[120px] flex-1 resize-y border-l border-emerald-500/50 bg-transparent pl-3 pt-1 text-emerald-50 placeholder:text-emerald-800 focus:outline-none"
                />
              </label>
            </div>

            <div className="mt-7 text-sm text-emerald-100/50">
              <span className="text-emerald-400">/*</span>{" "}
              <span className="text-emerald-100/50">Ready to deploy your message.</span>{" "}
              <span className="text-emerald-400">*/</span>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-md border border-emerald-400/50 bg-transparent px-4 py-3 text-center text-[13px] font-medium tracking-[0.18em] text-emerald-300 transition-colors hover:bg-emerald-500/10"
            >
              [ COMMIT &amp; PUSH ]
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
}
