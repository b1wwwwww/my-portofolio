"use client";

import { useLayout } from "@/context/LayoutContext";

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const { mode, isExpanded } = useLayout();
  return <div className={`${mode === "side" ? (isExpanded ? "lg:pl-64" : "lg:pl-20") : ""} min-h-screen flex flex-col transition-all duration-300`}>{children}</div>;
}
