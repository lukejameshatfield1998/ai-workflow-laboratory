import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'AI Workflow Laboratory',
  description: 'AI tutorials, tools, workflows and transcripts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (
                window.matchMedia('(display-mode: standalone)').matches ||
                window.matchMedia('(display-mode: window-controls-overlay)').matches ||
                window.navigator.standalone === true
              ) {
                document.body.classList.add('installed-app');
              }
            `,
          }}
        />

        <nav className="nav">
          <a className="brand" href="/">
            <img src="/logo.png" alt="AI Workflow Laboratory logo" />
            <span>AI Workflow Laboratory</span>
          </a>

          <div className="nav-links">
            <a href="/videos">Videos</a>
            <a href="/transcripts">Transcripts</a>
            <a href="/tutorials">Tutorials</a>
            <a href="/tools">AI Tools</a>
            <a className="app-install-link" href="/app">App</a>
            <a href="/search">Search</a>
            <a href="/about">About</a>
          </div>
        </nav>

        {children}

        <footer className="footer">
          <img src="/logo.png" alt="AI Workflow Laboratory logo" />
          <p>AI Workflow Laboratory — Automate. Save Time. Grow.</p>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
