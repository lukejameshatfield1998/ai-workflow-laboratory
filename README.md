# AI Workflow Laboratory Website - Version 2

This version has been personalised for AI Workflow Laboratory.

## Included

- Transparent logo from your uploaded image
- Dark mode design matching the blue/black AI laboratory style
- Homepage with latest YouTube video
- Auto-updating videos page using the YouTube Data API
- Search page
- Transcript library
- AI tutorial library
- AI tools directory with starter tools added
- About section mentioning recovery from arthroscopic shoulder surgery without personal-life details

## Run locally

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Environment setup

Copy `.env.example` to `.env.local` and add:

```bash
YOUTUBE_API_KEY=your_key
YOUTUBE_CHANNEL_ID=your_channel_id
```

## Deploy free

Deploy on Vercel. Upload this project, add the same environment variables, then publish.
