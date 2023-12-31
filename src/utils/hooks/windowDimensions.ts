/**
 * @Owner: Rishabh Anand
 * @Desc: Utils - Hooks - Window Dimensions
 **/

import { useState, useEffect } from "react";

/* Constants */
import { DesignBreakpoint } from "constants/designBreakpoints.constants";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function getBreakpoint(width: number) {
  const designBreakpoints = Object.entries(DesignBreakpoint);

  for (let i = 0; i < designBreakpoints.length; i++) {
    const designBreakpoint = designBreakpoints[i];
    const [_key, breakPoint] = designBreakpoint;

    if (typeof breakPoint === "number" && breakPoint < width) {
      return DesignBreakpoint[breakPoint];
    }
  }

  return undefined;
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    windowDimensions,
    breakpoint: getBreakpoint(windowDimensions.width),
  };
}
