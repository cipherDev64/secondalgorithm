# Link inventory

Audited before the v2 redesign.

| Type | Destination | Preserved use |
| --- | --- | --- |
| Booking | `https://cal.com/secondalgorithm` | Header, hero, selected work, Studio, contact, footer |
| Email and form action | `mailto:atulyamanikandan@gmail.com` | Contact section and legal contact details |
| External images | `images.unsplash.com` URLs in `src/App.tsx` | Selected work imagery |
| Font provider | Google Fonts Geist stylesheet | Primary and mono typography |
| Draft & Deploy | `https://draftanddeploy.vercel.app/` | Centralized in `src/config.ts`; all links use that one constant |

Internal page routes added by the redesign: `/about`, `/privacy`, and `/terms`. Vercel rewrites these routes to the client application.
