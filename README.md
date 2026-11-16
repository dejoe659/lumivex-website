# Lumivex Digital Solutions Ltd website

Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide icons. Deploy on Vercel.

## Run
```
npm install
cp .env.example .env.local   # fill in values
npm run dev
```

## Edit content
All services, projects, products, process steps and FAQs live in `lib/data.ts`.
Project statuses and tech lists there are placeholders: confirm them before launch.

## Contact form
`/api/contact` validates input and sends email through Resend. Set `RESEND_API_KEY`,
`CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` in Vercel. Without them the form shows an error instead of faking success.

## Not included yet
Supabase admin dashboard, case-study pages, analytics, testimonials (add real ones only).
