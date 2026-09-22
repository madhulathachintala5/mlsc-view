# Add the TechRitz 2K26 poster and registration QR

## Scope
- Keep the existing Upcoming Event section, TechRitz record, text, dates, layout, styling, and navigation unchanged.
- Add the uploaded poster to the existing shared TechRitz featured card so it appears consistently on the homepage and Events page.
- Use the same poster on the existing TechRitz details page and add its QR code to the current registration area.

## Implementation
- Store the exact uploaded poster as a local project image under `public/assets/events`; do not upload it to Lovable hosting.
- Extract only the QR region into a separate local image for the registration area while leaving the original poster pixels unchanged.
- Add local poster and QR paths plus the supplied Google Forms URL to the existing TechRitz data record.
- Render the poster with its original 3:2 aspect ratio and `object-contain`, preventing cropping or stretching at every screen size.
- Replace the existing illustrative event artwork with the poster without changing the surrounding card structure.
- Show the registration QR alongside an enabled “Register Now” button that opens the supplied form in a new tab.

## Verification
- Confirm the homepage, Events page, and TechRitz details page each use the same existing event record with no duplicate sections.
- Check poster proportions, QR clarity, registration links, and layout on desktop, tablet, and mobile.
- Confirm both images are present in the production output and the latest build is clean.
