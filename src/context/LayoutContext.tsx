"use client";

import React, { createContext, useContext, useState, useLayoutEffect } from "react";

type LayoutMode = "top" | "side";

interface LayoutContextType {
  mode: LayoutMode;
  toggleMode: () => void;
  isExpanded: boolean;
  toggleExpanded: () => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<LayoutMode>("side");
  const [isExpanded, setIsExpanded] = useState(true);

  useLayoutEffect(() => {
    const saved = localStorage.getItem("layout-mode") as LayoutMode | null;
    if (saved === "top" || saved === "side") setMode(saved);
    else setMode("side");

    const savedExpanded = localStorage.getItem("sidebar-expanded");
    if (savedExpanded === "false") setIsExpanded(false);
  }, []);

  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === "top" ? "side" : "top";
      localStorage.setItem("layout-mode", newMode);
      return newMode;
    });
  };

  const toggleExpanded = () => {
    setIsExpanded((prev) => {
      localStorage.setItem("sidebar-expanded", String(!prev));
      return !prev;
    });
  };

  return (
    <LayoutContext.Provider value={{ mode, toggleMode, isExpanded, toggleExpanded }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) throw new Error("useLayout must be used within LayoutProvider");
  return context;
}
