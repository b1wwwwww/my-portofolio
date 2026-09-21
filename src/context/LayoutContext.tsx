"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type LayoutMode = "top" | "side";

interface LayoutContextType {
  mode: LayoutMode;
  toggleMode: () => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<LayoutMode>("top");

  useEffect(() => {
    const saved = localStorage.getItem("layout-mode") as LayoutMode | null;
    if (saved === "top" || saved === "side") setMode(saved);
  }, []);

  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === "top" ? "side" : "top";
      localStorage.setItem("layout-mode", newMode);
      return newMode;
    });
  };

  return (
    <LayoutContext.Provider value={{ mode, toggleMode }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) throw new Error("useLayout must be used within LayoutProvider");
  return context;
}
