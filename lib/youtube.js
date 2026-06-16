export async function getLatestVideos(maxResults = 12) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    console.error('Missing YouTube environment variables');
    return [];
  }

  const url = new URL('https://www.googleapis.com/youtube/v3/search');
  url.searchParams.set('key', apiKey);
  url.searchParams.set('channelId', channelId);
  url.searchParams.set('part', 'snippet,id');
  url.searchParams.set('order', 'date');
  url.searchParams.set('maxResults', String(maxResults));
  url.searchParams.set('type', 'video');

  const response = await fetch(url, {
    cache: 'no-store',
  });

  const text = await response.text();

  if (!response.ok) {
    console.error('YouTube API error:', text);
    return [];
  }

  const data = JSON.parse(text);

  return data.items.map((item) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    publishedAt: item.snippet.publishedAt,
    thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
  }));
}
