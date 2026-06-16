import { getAllSearchItems } from '../../lib/content';
import { tools } from '../../data/tools';

export default async function SearchPage({ searchParams }) {
  const query = (searchParams.q || '').toLowerCase();
  const contentItems = await getAllSearchItems();

  const items = [
    ...contentItems.map((item) => ({
      title: item.title,
      description: item.excerpt,
      url: `/${item.type}/${item.slug}`,
      type: item.type
    })),
    ...tools.map((tool) => ({
      title: tool.name,
      description: tool.description,
      url: tool.link,
      type: 'tool'
    }))
  ];

  const results = query
    ? items.filter((item) =>
        `${item.title} ${item.description} ${item.type}`.toLowerCase().includes(query)
      )
    : [];

  return (
    <main className="section">
      <h1>Search</h1>
      <p className="muted">Search for tutorials, transcripts or AI tools.</p>

      <form>
        <input
          className="search-box"
          type="search"
          name="q"
          placeholder="Search for ChatGPT, automation, email, tutorials..."
          defaultValue={searchParams.q || ''}
        />
        <button type="submit">Search</button>
      </form>

      <div className="grid" style={{ marginTop: '32px' }}>
        {results.map((item) => (
          <a className="card" href={item.url} key={`${item.type}-${item.title}`}>
            <span className="badge">{item.type}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
