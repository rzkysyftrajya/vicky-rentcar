import { cn } from "@/lib/utils";

interface MedanSectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function MedanSectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: MedanSectionHeadingProps) {
  return (
    <div
      className={cn(
        "medan-section-heading",
        align === "center" && "text-center mx-auto",
        className,
      )}
    >
      {eyebrow ? <p className="medan-eyebrow">{eyebrow}</p> : null}
      <h2 className="medan-heading-2">{title}</h2>
      {description ? (
        <p className="medan-body-muted mt-3 max-w-3xl">{description}</p>
      ) : null}
    </div>
  );
}
