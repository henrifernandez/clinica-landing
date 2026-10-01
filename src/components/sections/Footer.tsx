import { site } from "@/content/site";
import { Container } from "@/components/Container";

const { clinic, footer, a11y } = site;

function FooterButton({
  href,
  label,
  hint,
}: {
  href: string;
  label: string;
  hint: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-ghost btn-lg w-full justify-between"
    >
      <span className="text-left">
        <span className="block">{label}</span>
        <span className="block text-xs font-normal text-muted">{hint}</span>
      </span>
      <span aria-hidden="true" className="text-lg text-clay-strong">
        ↗
      </span>
      <span className="sr-only"> ({a11y.newTab})</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line pb-24 pt-12 text-sm text-muted">
      <Container className="grid gap-10 md:grid-cols-[1fr_1fr_1.1fr]">
        <div>
          <p className="font-serif text-logo text-accent">{clinic.legalName}</p>
          <p className="mt-2">{clinic.cro}</p>
          <p>Responsável técnico: {clinic.responsible}</p>
        </div>
        <div>
          <p>{clinic.address}</p>
          <p>
            {clinic.city}, {clinic.state}
          </p>
          <p className="mt-2">{clinic.hours}</p>
        </div>
        <div className="grid gap-3">
          <FooterButton
            href={clinic.mapUrl}
            label={footer.mapLabel}
            hint={footer.mapHint}
          />
          <FooterButton
            href={clinic.instagramUrl}
            label={`${footer.instagramLabel} ${clinic.instagramHandle}`}
            hint={footer.instagramHint}
          />
        </div>
      </Container>
      <Container className="mt-10">
        <p className="text-xs">{footer.placeholderNote}</p>
      </Container>
    </footer>
  );
}
