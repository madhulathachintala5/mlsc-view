# Coding Contest 2K26 – TechRitz update

## Scope
- Keep the existing MLSC visual system, page structure, past events, and navigation unchanged.
- Expand the single existing TechRitz 2K26 upcoming-event record rather than creating a duplicate.

## Implementation
- Make the upcoming-event data the single source for the title, tagline, full description, dates, organizer, CodeChef collaboration, ₹50 fee, coming-soon status, prizes, participant benefit, and registration state.
- Enhance the homepage featured card with the date, collaboration, fee, concise prize highlights, branded graphic treatment, and a direct details link without overcrowding it.
- Reuse that same featured card in the Events page’s Upcoming Events area.
- Add a dedicated TechRitz 2K26 details route containing overview, event facts, CodeChef collaboration, separate first/second/third-place prize cards, participant discount, registration-opening-soon state, and a live countdown to October 15, 2026.
- Ensure the countdown stops cleanly once the event begins and remains stable during initial page rendering.
- Preserve the existing TechRitz 2K25 past-event entry and all other event records.

## Verification
- Check the homepage, Events page, and TechRitz details page on desktop and mobile.
- Confirm title, dates, fee, collaboration, prizes, 50% participant discount, countdown behavior, links, and absence of duplicate 2K26 entries.
- Confirm the latest project build is clean.
