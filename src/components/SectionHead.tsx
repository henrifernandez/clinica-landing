import type { ReactNode } from "react";

interface SectionHeadProps {
  eyebrow: string;
  title: string;
  emphasis?: string;
  children?: ReactNode;
  className?: string;
}

export function SectionHead({
  eyebrow,
  title,
  emphasis,
  children,
  className = "",
}: SectionHeadProps) {
  return (
    <div data-reveal className={`mb-12 max-w-[42rem] md:mb-16 ${className}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mb-4 mt-4 text-h2">
        {title} {emphasis ? <em>{emphasis}</em> : null}
      </h2>
      {children ? <p className="max-w-[46ch] text-muted">{children}</p> : null}
    </div>
  );
}
