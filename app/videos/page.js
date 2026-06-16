import { getLatestVideos } from '../../lib/youtube';

export default async function VideosPage() {
  const videos = await getLatestVideos();

  return (
    <main className="section">
      <h1>Latest Videos</h1>
      <p className="muted">New uploads from the AI Workflow Laboratory YouTube channel appear here automatically.</p>

      <div className="grid">
        {videos.length === 0 && (
          <div className="card">
            <h2>No videos loaded yet</h2>
            <p>Add your YouTube API key and channel ID in `.env.local`.</p>
          </div>
        )}

        {videos.map((video) => (
          <article className="card" key={video.id}>
            <img src={video.thumbnail} alt={video.title} />
            <h2>{video.title}</h2>
            <p className="muted">{new Date(video.publishedAt).toLocaleDateString('en-GB')}</p>
            <p>{video.description}</p>
            <a className="button" href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank">
              Watch video
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
