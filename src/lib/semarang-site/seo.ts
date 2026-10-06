import type { Metadata } from "next";

interface SemarangMetadataInput {
  title: string;
  description: string;
  path: string;
}

export function createSemarangMetadata({
  title,
  description,
  path,
}: SemarangMetadataInput): Metadata {
  const image = "/semarang/hero-section.webp";

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | PT.VRN Semarang`,
      description,
      url: path,
      siteName: "PT.VRN Semarang",
      locale: "id_ID",
      type: "website",
      images: [{ url: image, width: 1640, height: 944, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | PT.VRN Semarang`,
      description,
      images: [image],
    },
  };
}