"use client";
import { FormEvent, useState } from "react";
import { services } from "@/lib/data";

const field = "w-full rounded-lg border border-white/15 bg-navy px-4 py-3 text-sm focus:border-cyan focus:outline-none";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      form.reset();
      setState("ok");
    } catch (err) {
      setMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setState("error");
    }
  }

  if (state === "ok")
    return <div role="status" className="rounded-xl border border-cyan/40 bg-cyan/10 p-6">Thanks. Your message has been sent and we will reply by email.</div>;

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm">Full name<input required name="name" className={field} autoComplete="name" /></label>
        <label className="text-sm">Email address<input required type="email" name="email" className={field} autoComplete="email" /></label>
        <label className="text-sm">Phone number<input name="phone" type="tel" className={field} autoComplete="tel" /></label>
        <label className="text-sm">Company (optional)<input name="company" className={field} autoComplete="organization" /></label>
        <label className="text-sm">Service required
          <select required name="service" className={field} defaultValue="">
            <option value="" disabled>Choose a service</option>
            {services.map((s) => <option key={s.title}>{s.title}</option>)}
            <option>Something else</option>
          </select>
        </label>
        <label className="text-sm">Budget (optional)<input name="budget" className={field} placeholder="e.g. ₦500,000 or $1,000" /></label>
      </div>
      <label className="block text-sm">Project description
        <textarea required minLength={10} name="message" rows={6} className={field} placeholder="What do you want to build, and who is it for?" />
      </label>
      {state === "error" && <p role="alert" className="text-sm text-red-300">{msg}</p>}
      <button disabled={state === "loading"} className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold transition hover:bg-cyan hover:text-navy disabled:opacity-60">
        {state === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
