import { getLatestVideos } from '../lib/youtube';

export default async function Home() {
  const videos = await getLatestVideos(1);
  const latest = videos[0];

  return (
    <>
      <section className="hero">
        <div>
          <span className="badge">Automate. Save Time. Grow.</span>
          <h1>Simple AI workflows, tested properly.</h1>
          <p>
            AI Workflow Laboratory is a hobby project by Luke. The goal is simple: test AI tools, explain them clearly,
            and turn useful ideas into easy tutorials.
          </p>
          <a className="button" href="/videos">Watch videos</a>
          <a className="button secondary-button" href="/tools">Browse AI tools</a>
        </div>
        <img className="hero-logo" src="/logo.png" alt="AI Workflow Laboratory logo" />
      </section>

<section className="section">
  <h2>Featured Tutorials</h2>
  <ul>
    <li><a href="/tutorials/How-to-write-professional-emails-with-AI">How to write professional emails with AI</a></li>
    <li><a href="/tutorials/How-to-create-professional-quotations-with-AI">How to create professional quotations with AI</a></li>
    <li><a href="/tutorials/How-to-build-a-customer-FAQ-using-AI">How to build a customer FAQ using AI</a></li>
  </ul>
</section>
    
      <section className="section">
        <div className="section-header">
          <div>
            <h2>Latest Video</h2>
            <p className="muted">This section updates automatically when a new video is uploaded.</p>
          </div>
          <a href="/videos" className="muted">View all videos →</a>
        </div>

        {latest ? (
          <div className="card">
          <img 
          src={latest.thumbnail}
  alt={latest.title}
  style={{ maxWidth: '700px', width: '100%', margin: '0 auto', display: 'block' }}
/>
            <h2>{latest.title}</h2>
            <p className="muted">{new Date(latest.publishedAt).toLocaleDateString('en-GB')}</p>
            <p>{latest.description}</p>
            <a className="button" href={`https://www.youtube.com/watch?v=${latest.id}`} target="_blank">
              Watch on YouTube
            </a>
          </div>
        ) : (
          <div className="card">
            <h2>Your latest video will appear here</h2>
            <p className="muted">Add your YouTube API key and Channel ID in `.env.local`.</p>
          </div>
        )}
      </section>

      <section className="section grid">
        <div className="card">
          <h2>Video Transcripts</h2>
          <p className="muted">Readable versions of AI Workflow Laboratory YT videos, organised in one place.</p>
        </div>
        <div className="card">
          <h2>AI Tutorials</h2>
          <p className="muted">Text tutorials for practical AI help, workflows and business tasks.</p>
        </div>
        <div className="card">
          <h2>AI Tools Directory</h2>
          <p className="muted">A growing list of useful AI tools with simple explanations.</p>
        </div>
      </section>
    </>
  );
}
