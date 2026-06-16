import { getMarkdownItem } from '../../../lib/content';

export default async function TranscriptPage({ params }) {
  const { slug } = await params;
  const item = await getMarkdownItem('transcripts', slug);

  return (
    <main className="section">
      <article className="article">
        <h1>{item.title}</h1>
        <p className="muted">{item.date}</p>
        <div dangerouslySetInnerHTML={{ __html: item.contentHtml }} />
      </article>
    </main>
  );
}
