import type { Metadata } from "next";
import NavbarDemo from "@/components/resizable-navbar-demo";

export const metadata: Metadata = {
  title: "Resizable Navbar Demo",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResizableNavbarDemoPage() {
  return <NavbarDemo />;
}
