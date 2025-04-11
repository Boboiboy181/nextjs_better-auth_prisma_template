"use client";
import { useEffect } from "react";
import { scan } from "react-scan";
// react-scan must be imported before react

export function ReactScan() {
  useEffect(() => {
    scan({
      enabled: true,
    });
  }, []);

  return <></>;
}
