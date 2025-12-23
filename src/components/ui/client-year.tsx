"use client";

import React from "react";

export function ClientYear() {
  const [year, setYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Show current year on client, fallback to 2024 for SSR
  return <>{year || 2024}</>;
}
