import Link from "next/link";
import { ReactNode } from "react";
import { steps, Status } from "@/lib/data";

export function Btn({ href, children, ghost }: { href: string; children: ReactNode; ghost?: boolean }) {
  const base = "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition";
  return (
    <Link href={href} className={`${base} ${ghost ? "border border-white/20 text-white hover:border-cyan hover:text-cyan" : "bg-brand text-white hover:bg-cyan hover:text-navy"}`}>
      {children}
    </Link>
  );
}

export function Section({ title, sub, children, alt, id }: { title?: string; sub?: string; children: ReactNode; alt?: boolean; id?: string }) {
  return (
    <section id={id} className={alt ? "bg-navy2" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-20">
        {title && (
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">{title}</h2>
            {sub && <p className="mt-3 text-mute">{sub}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHead({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="border-b border-white/10 bg-navy2">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-mute">{sub}</p>
      </div>
    </div>
  );
}

const statusColor: Record<Status, string> = {
  Live: "text-emerald-300 border-emerald-300/40",
  "In Development": "text-cyan border-cyan/40",
  Prototype: "text-amber-300 border-amber-300/40",
  Concept: "text-mute border-white/20",
};
export function StatusBadge({ status }: { status: Status }) {
  return <span className={`rounded-full border px-3 py-1 text-xs ${statusColor[status]}`}>{status}</span>;
}

export const card = "rounded-xl border border-white/10 bg-navy2 p-6";

export function Steps() {
  return (
    <ol className="relative space-y-6 border-l border-brand/40 pl-8">
      {steps.map((s, i) => (
        <li key={s.title} className="relative">
          <span className="absolute -left-[45px] flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold">{i + 1}</span>
          <h3 className="font-display text-lg font-semibold">{s.title}</h3>
          <p className="text-mute">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function CTA() {
  return (
    <Section>
      <div className="rounded-2xl border border-brand/40 bg-gradient-to-br from-brand/20 to-cyan/10 p-10 text-center">
        <h2 className="font-display text-3xl font-semibold">Have an idea worth building?</h2>
        <p className="mx-auto mt-3 max-w-xl text-mute">Tell us what you need. We will reply with questions, a plan and a quote.</p>
        <div className="mt-6"><Btn href="/contact">Start a project</Btn></div>
      </div>
    </Section>
  );
}
