import type { ReactNode } from "react";

interface SectionHeadProps {
  title: string;
  /** Introdução curta, alinhada ao pé do título em telas largas. */
  children?: ReactNode;
  className?: string;
}

export function SectionHead({
  title,
  children,
  className = "",
}: SectionHeadProps) {
  return (
    <div
      data-reveal
      className={`mb-12 grid gap-6 md:mb-16 ${
        children ? "lg:grid-cols-[7fr_4fr] lg:items-end lg:gap-[4.5rem]" : ""
      } ${className}`}
    >
      <h2 className="text-h2">{title}</h2>
      {children ? <p className="max-w-[40ch] text-muted">{children}</p> : null}
    </div>
  );
}
