"use client";

import { MonitorIcon, MoonStarIcon, SunIcon } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import type { JSX } from "react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

function ThemeOption({
  icon,
  value,
  isActive,
  onClick,
}: {
  icon: JSX.Element;
  value: string;
  isActive?: boolean;
  onClick: (value: string) => void;
}) {
  return (
    <button
      className={cn(
        "relative flex size-8 cursor-pointer items-center justify-center rounded-full transition-all [&_svg]:size-4",
        isActive
          ? "text-teal-400 dark:text-teal-300"
          : "text-teal-100/40 hover:text-teal-300 dark:text-teal-100/30 dark:hover:text-teal-400"
      )}
      role="radio"
      aria-checked={isActive}
      aria-label={`Switch to ${value} theme`}
      onClick={() => onClick(value)}
      type="button"
    >
      {icon}

      {isActive && (
        <motion.div
          layoutId="theme-option"
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className="absolute inset-0 rounded-full border border-teal-500/50 dark:border-teal-400/50"
        />
      )}
    </button>
  );
}

const THEME_OPTIONS = [
  {
    icon: <MonitorIcon />,
    value: "system",
  },
  {
    icon: <SunIcon />,
    value: "light",
  },
  {
    icon: <MoonStarIcon />,
    value: "dark",
  },
];

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="flex h-8 w-24" />;
  }

  return (
    <motion.div
      key={String(isMounted)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="inline-flex items-center overflow-hidden rounded-full bg-teal-950/20 ring-1 ring-teal-500/30 ring-inset dark:bg-teal-900/20 dark:ring-teal-500/40"
      role="radiogroup"
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={setTheme}
        />
      ))}
    </motion.div>
  );
}

export { ThemeSwitcher };
