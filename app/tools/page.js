import { tools } from '../../data/tools';

export default function ToolsPage() {
  const categories = [...new Set(tools.map((tool) => tool.category))];

  return (
    <main className="section">
      <h1>AI Tools Directory</h1>
      <p className="muted">A simple list of AI tools worth testing, with plain-English explanations.</p>

      {categories.map((category) => (
        <section key={category} style={{ marginTop: '34px' }}>
          <h2>{category}</h2>
          <div className="grid">
            {tools.filter((tool) => tool.category === category).map((tool) => (
              <article className="card" key={tool.name}>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <a className="button" href={tool.link} target="_blank">Visit tool</a>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
