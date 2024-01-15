"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { config } from "../config";

const getIndex = (pathname: string) => {
  return config.findIndex(item => item.href === pathname) || 0;
};

const getWidthAndPosition = (index: number, total: number) => {
  switch (total) {
    case 2: {
      if (index < 0 || index > 1) break;
      return `w-[50%] ${index === 0 ? "translate-x-0" : "translate-x-full"}`;
    }
    default: {
      console.warn("Could not determine `Underline` width and position");
      return "hidden";
    }
  }
};

/**
 * Places an animated, themed line under an item in a horizontal list.
 * The items in the list should take up equal horizontal space
 */
const Underline = () => {
  const pathname = usePathname();

  return (
    <span
      className={`h-0.5 bg-amber-600 absolute -bottom-1 transition-all ${getWidthAndPosition(
        getIndex(pathname),
        2
      )}`}
    />
  );
};

export default React.memo(Underline);
