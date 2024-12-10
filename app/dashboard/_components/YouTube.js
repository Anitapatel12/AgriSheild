const fetchYouTubeVideos = async ({ state, language, yojna, apiKey }) => {
  // Construct the query using state, language, and yojna
  const query = `${state} ${language} ${yojna}`;
  apiKey = process.env.YOUTUBE_API_KEY;
  // Construct the YouTube API endpoint
  const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&key=${apiKey}&maxResults=10`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.statusText}`);
    }
    const data = await response.json();

    // Return the video results
    return data.items || [];
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    throw error;
  }
};

export default fetchYouTubeVideos;
