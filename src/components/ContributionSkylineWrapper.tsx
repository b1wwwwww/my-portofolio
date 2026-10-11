"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ContributionSkyline from "@/components/ui/contribution-skyline";

export function ContributionSkylineWrapper({ data }: { data: { date: string; count: number }[] }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Dark mode palette - Charcoal/Dark Slate untuk kotak no-contribute
  const palette = {
    light: ["#2387ew", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#9be9a8", "#0d6d38", "#40c463", "#30a14e", "#216e39"],
  };

  if (!mounted) {
    return <div className="w-full h-96 bg-slate-900/50 rounded-lg animate-pulse" />;
  }

  return (
    <div className="w-full p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 transition-all duration-300">
      <ContributionSkyline
        data={data}
        palette={palette}
        unit="contribution"
        unitPlural="contributions"
        showStats={true}
        showLegend={true}
        showToggle={true}
        defaultView={theme === "light" ? "2d" : "3d"}
        className="border-0 bg-transparent p-0 sm:p-0"
        title={null}
      />
    </div>
  );
}
