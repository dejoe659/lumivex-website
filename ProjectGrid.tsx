"use client";
import { useState } from "react";
import { Item } from "@/lib/data";
import { StatusBadge, card } from "@/components/ui";

export function ProjectCard({ p }: { p: Item & { features?: string[] } }) {
  return (
    <article className={`${card} flex flex-col transition hover:border-cyan/40`}>
      <div className="mb-4 flex h-32 items-end rounded-lg bg-gradient-to-br from-brand/30 to-navy p-4">
        <span className="font-display text-xl font-semibold">{p.name}</span>
      </div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs text-mute">{p.category}</span>
        <StatusBadge status={p.status} />
      </div>
      <p className="text-sm text-mute">{p.desc}</p>
      {p.features && <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-mute">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>}
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => <span key={t} className="rounded bg-white/5 px-2 py-1 text-xs">{t}</span>)}
      </div>
      <div className="mt-5 pt-2 text-sm">
        {p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan hover:underline">View project</a> : <span className="text-mute">Case study coming soon</span>}
      </div>
    </article>
  );
}

export default function ProjectGrid({ items }: { items: Item[] }) {
  const cats = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? items : items.filter((i) => i.category === cat);
  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${cat === c ? "border-brand bg-brand" : "border-white/20 text-mute hover:text-white"}`}>{c}</button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">{shown.map((p) => <ProjectCard key={p.name} p={p} />)}</div>
    </>
  );
}
