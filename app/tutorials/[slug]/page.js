import { getMarkdownItem } from '../../../lib/content';

export default async function TutorialPage({ params }) {
  const item = await getMarkdownItem('tutorials', params.slug);

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
