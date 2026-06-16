export default function manifest() {
  return {
    name: 'AI Workflow Laboratory',
    short_name: 'AI Workflow Lab',
    description: 'AI tutorials, tools, workflows and transcripts.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/app-icon.png',
        sizes: '1024x1024',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  };
}
