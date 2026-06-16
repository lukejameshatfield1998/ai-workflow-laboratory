export default function manifest() {
  return {
    name: 'AI Workflow Laboratory',
    short_name: 'AI Workflow Lab',
    description: 'AI tutorials, tools, workflows and transcripts.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0f17',
    theme_color: '#1677ff',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
