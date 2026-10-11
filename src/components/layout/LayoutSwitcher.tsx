"use client";

import { useLayout } from "@/context/LayoutContext";
import TopNavbar from "@/components/layout/TopNavbar";
import Sidebar from "@/components/layout/Sidebar";

export default function LayoutSwitcher() {
  const { mode } = useLayout();

  return (
    <>
      {mode === "top" ? <TopNavbar /> : <Sidebar />}
    </>
  );
}
