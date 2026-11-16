"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const link = (href: string) => `text-sm transition hover:text-cyan ${path === href ? "text-cyan" : "text-mute"}`;
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-xl font-bold tracking-tight" onClick={() => setOpen(false)}>
          Lumi<span className="text-cyan">vex</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {nav.map((n) => <Link key={n.href} href={n.href} className={link(n.href)}>{n.label}</Link>)}
          <Link href="/contact" className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold hover:bg-cyan hover:text-navy">Contact us</Link>
        </nav>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/10 bg-navy px-5 py-5 md:hidden" aria-label="Mobile">
          {[...nav, { href: "/contact", label: "Contact us" }].map((n) => (
            <Link key={n.href} href={n.href} className={link(n.href)} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const socials = [
    site.email && { label: "Email", href: `mailto:${site.email}` },
    site.whatsapp && { label: "WhatsApp", href: `https://wa.me/${site.whatsapp}` },
    site.linkedin && { label: "LinkedIn", href: site.linkedin },
    site.instagram && { label: "Instagram", href: site.instagram },
  ].filter(Boolean) as { label: string; href: string }[];
  return (
    <footer className="border-t border-white/10 bg-navy2">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">{site.name}</p>
          <p className="mt-2 text-sm text-mute">{site.tagline}</p>
          <p className="mt-2 text-sm text-mute">Nigeria. Working with clients worldwide.</p>
        </div>
        <ul className="space-y-2 text-sm text-mute">
          {nav.map((n) => <li key={n.href}><Link className="hover:text-cyan" href={n.href}>{n.label}</Link></li>)}
          <li><Link className="hover:text-cyan" href="/contact">Contact</Link></li>
        </ul>
        <ul className="space-y-2 text-sm text-mute">
          {socials.map((s) => <li key={s.label}><a className="hover:text-cyan" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
        </ul>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-mute">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
