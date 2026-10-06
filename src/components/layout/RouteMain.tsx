"use client";

import { usePathname } from "next/navigation";

interface RouteMainProps {
  children: React.ReactNode;
}

export default function RouteMain({ children }: RouteMainProps) {
  const pathname = usePathname();
  const isMedanRoute =
    pathname === "/medan" || pathname?.startsWith("/medan/");
  const isSemarangRoute =
    pathname === "/semarang" || pathname?.startsWith("/semarang/");

  if (isMedanRoute || isSemarangRoute) {
    return <div className="flex-grow">{children}</div>;
  }

  return <main className="flex-grow">{children}</main>;
}
