"use client"

import ContributionSkyline from "@/components/ui/contribution-skyline";

export function ContributionSkylineWrapper({ data }: { data: { date: string; count: number }[] }) {
  return (
    <div className="w-full">
      <ContributionSkyline
        data={data}
        palette={{
          light: ["#c6e48b", "#7bc96f", "#239a3b", "#196127"],
          dark: ["#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
        unit="contribution"
        unitPlural="contributions"
        showStats={true}
        showLegend={true}
        showToggle={true}
        defaultView="3d"
        className="border-0 bg-transparent p-0 sm:p-0"
        title={null}
      />
    </div>
  );
}
