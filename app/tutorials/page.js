import { getMarkdownCollection } from '../../lib/content';

export default async function TutorialsPage() {
  const tutorials = await getMarkdownCollection('tutorials');

  return (
    <main className="section">
      <h1>AI Tutorials</h1>
      <p className="muted">
  Text guides for simple AI help and workflow ideas.
</p>

<p className="muted">
  📚 New tutorials added frequently. Check back regularly for the latest AI workflows, automation ideas and practical business guides.
</p>

      <div className="grid">
        {tutorials.map((item) => (
          <a className="card" href={`/tutorials/${item.slug}`} key={item.slug}>
            <h2>{item.title}</h2>
            <p className="muted">{item.date}</p>
            <p>{item.excerpt}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
