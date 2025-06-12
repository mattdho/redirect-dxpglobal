# Jakala Event Pages

This directory contains event landing pages for dxp.global/events with consistent tracking and branding.

## Quick Start

To create a new event page:

1. Copy the template: `cp shared/event-template.html {year}/{event-name}/index.html`
2. Replace placeholder variables (see below)
3. Update the build script in `package.json`
4. Build and deploy

## Template Variables

Replace these placeholders in your new event page:

### Meta & SEO
- `{{EVENT_TITLE}}` - Full event title for page title
- `{{EVENT_DESCRIPTION}}` - Meta description for SEO

### Hero Section
- `{{HERO_TITLE}}` - Main headline (e.g., "Join Jakala at EduWeb 2025")
- `{{HERO_SUBTITLE}}` - Supporting headline
- `{{HERO_CTA_TEXT}}` - Hero button text

### Event Details
- `{{BOOTH_NUMBER}}` - Booth/location info
- `{{EVENT_DATES}}` - Conference dates

### Session Information
- `{{SESSION_TITLE}}` - Session name
- `{{SESSION_DATE}}` - Session date
- `{{SESSION_TIME}}` - Session time
- `{{SESSION_LOCATION}}` - Session room/location
- `{{SPEAKERS_LIST}}` - HTML list of speakers
- `{{SESSION_DESCRIPTION}}` - Session summary
- `{{SLIDES_LINK}}` - Link to downloadable slides
- `{{QR_CODE_URL}}` - URL for QR code
- `{{QR_CODE_DESCRIPTION}}` - QR code caption

### Off-Site Event
- `{{EVENT_SECTION_TITLE}}` - Off-site event section title
- `{{EVENT_SECTION_SUBTITLE}}` - Off-site event subtitle
- `{{OFF_SITE_DATE}}` - Event date
- `{{OFF_SITE_TIME}}` - Event time
- `{{OFF_SITE_LOCATION}}` - Venue location
- `{{PANEL_TITLE}}` - Panel/discussion title
- `{{PANEL_DESCRIPTION}}` - Panel description
- `{{PANEL_PARTICIPANTS}}` - HTML for participant tags
- `{{RSVP_LINK}}` - RSVP/registration URL
- `{{RSVP_CTA_TEXT}}` - RSVP button text
- `{{EVENT_HIGHLIGHTS}}` - HTML for event highlights section

### Footer
- `{{FOOTER_DESCRIPTION}}` - Company description
- `{{FOOTER_CTA_LINK}}` - Footer CTA link
- `{{FOOTER_CTA_TEXT}}` - Footer CTA text
- `{{CURRENT_YEAR}}` - Current year for copyright

## Example Usage

```html
<!-- Replace this: -->
<h1>{{HERO_TITLE}}</h1>

<!-- With this: -->
<h1>Join Jakala at TechEd 2025</h1>
```

## Tracking & Analytics

All pages automatically include:
- ✅ Google Tag Manager (GTM-5XMJNMRF)
- ✅ Apollo.io tracking (App ID: 66325f824a67600570e36787)
- ✅ CTA click tracking
- ✅ Scroll depth tracking
- ✅ Custom event tracking for GTM

## Branding

All pages use:
- **Fonts**: Raleway (body), Merriweather (headings)
- **Colors**: Jakala brand palette (defined in CSS variables)
- **Buttons**: Consistent styling with hover effects
- **Layout**: Responsive, mobile-first design

## File Structure

```
events/
├── shared/
│   ├── event-styles.css     # Shared CSS for all events
│   └── event-template.html  # Base template
├── 2025/
│   └── eduweb/
│       └── index.html       # EduWeb 2025 page
└── README.md               # This file
```

## Build Process

Update `package.json` build script for new events:

```json
{
  "scripts": {
    "build": "mkdir -p dist && cp index.html dist/ && mkdir -p dist/events/{year}/{event} && cp src/events/{year}/{event}/index.html dist/events/{year}/{event}/"
  }
}
```

## Testing

1. **Local Development**: Run `npm run build && npm run dev`
2. **GTM Testing**: Use browser dev tools → Network tab to verify GTM requests
3. **Apollo Testing**: Check browser console for `trackingFunctions` object
4. **Mobile Testing**: Test responsive design on various screen sizes

## Deployment

1. Build the project: `npm run build`
2. Deploy the `dist/` directory to your web server
3. Verify tracking is working in production
4. Test all CTAs and links

## Future Scaling

- Each event gets its own directory: `/events/{year}/{event-name}/`
- Shared assets remain in `/events/shared/`
- Consistent tracking across all event pages
- Easy to maintain and update branding globally 