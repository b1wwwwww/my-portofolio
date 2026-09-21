"use client";

import { useLayout } from "@/context/LayoutContext";

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const { mode } = useLayout();
  return <div className={`${mode === "side" ? "lg:pl-64" : ""} min-h-screen flex flex-col transition-all duration-300`}>{children}</div>;
}
