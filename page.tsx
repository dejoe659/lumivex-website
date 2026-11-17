import Peak from "@/components/Peak";
import { ProjectCard } from "@/components/ProjectGrid";
import { Btn, Section, Steps, CTA, card } from "@/components/ui";
import { services, projects, faqs } from "@/lib/data";

const why = [
  ["Built around your goals", "We start with what you need to achieve, then choose the technology."],
  ["Clear communication", "You know what is being built, when, and why."],
  ["Modern, maintainable code", "Products that are fast today and easy to change tomorrow."],
  ["Support after launch", "We stay available to fix, update and improve."],
];
const tech = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "Supabase", "PostgreSQL", "Vercel", "AI and LLM APIs"];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">We Build Digital Solutions That Move Businesses Forward.</h1>
            <p className="mt-6 max-w-lg text-lg text-mute">From innovative ideas to intelligent digital products, Lumivex transforms businesses through software engineering, artificial intelligence, and modern technology.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href="/contact">Start a Project</Btn>
              <Btn href="/portfolio" ghost>Explore Our Work</Btn>
            </div>
          </div>
          <Peak />
        </div>
      </section>

      <Section alt title="Technology that serves your business" sub="Lumivex Digital Solutions Ltd helps individuals, startups and established businesses turn ideas into working digital products: websites, software, mobile apps and AI tools, built from Nigeria for clients worldwide." >
        <div className="grid gap-5 md:grid-cols-4">
          {why.map(([t, d]) => <div key={t} className={card}><h3 className="font-display font-semibold">{t}</h3><p className="mt-2 text-sm text-mute">{d}</p></div>)}
        </div>
      </Section>

      <Section title="What we do" sub="Six service areas, one team.">
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className={`${card} transition hover:border-cyan/40`}>
              <s.icon className="h-7 w-7 text-cyan" aria-hidden />
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-mute">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8"><Btn href="/services" ghost>See all services</Btn></div>
      </Section>

      <Section alt title="Featured projects" sub="Examples of what we are building. Status is shown on every card.">
        <div className="grid gap-6 md:grid-cols-3">{projects.slice(0, 3).map((p) => <ProjectCard key={p.name} p={p} />)}</div>
        <div className="mt-8"><Btn href="/portfolio" ghost>View all work</Btn></div>
      </Section>

      <Section title="Technologies we work with">
        <div className="flex flex-wrap gap-3">{tech.map((t) => <span key={t} className="rounded-lg border border-white/15 px-4 py-2 text-sm">{t}</span>)}</div>
      </Section>

      <Section alt title="How we work" sub="A clear path from first call to ongoing support."><Steps /></Section>

      <Section title="Frequently asked questions">
        <div className="max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className={`${card} group`}>
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-3 text-sm text-mute">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
