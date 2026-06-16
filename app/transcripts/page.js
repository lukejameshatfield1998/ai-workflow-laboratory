import { getMarkdownCollection } from '../../lib/content';

export default async function TranscriptsPage() {
  const transcripts = await getMarkdownCollection('transcripts');

  return (
    <main className="section">
      <h1>Video Transcripts</h1>
      <p className="muted">A readable library of your video transcripts.</p>

      <div className="grid">
        {transcripts.map((item) => (
          <a className="card" href={`/transcripts/${item.slug}`} key={item.slug}>
            <h2>{item.title}</h2>
            <p className="muted">{item.date}</p>
            <p>{item.excerpt}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
