"use client";

import { useLayout } from "@/context/LayoutContext";

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const { mode } = useLayout();
  const isSidebar = mode === "side";
  
  return (
    <main className={`flex-1 transition-all duration-300 ${isSidebar ? "lg:ml-72" : ""}`}>
      {children}
    </main>
  );
}
