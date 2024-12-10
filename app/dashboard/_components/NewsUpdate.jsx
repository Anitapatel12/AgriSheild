import React, { useState, useEffect } from 'react';

function NewsUpdates() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch news updates using the API
  const fetchNews = async () => {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;  // Fetch the API key from environment variables
    try {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q="crop insurance" OR "agriculture insurance" OR "farmers insurance" OR "farm insurance" OR "insurance for farmers"&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
          );
          
          
      
      // Parse the response to JSON
      const data = await response.json();
      
      // Log the API response to check its structure
      console.log(data);

      // Check if articles exist and update state, otherwise set an empty array
      if (data && data.articles) {
        setNews(data.articles);
      } else {
        setNews([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setNews([]);  // If there's an error, set an empty array
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(() => {
      fetchNews();
    }, 60000); // Refresh every 60 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Agriculture news around the world</h2>
      <div className="space-y-4">
        {/* Ensure news is an array before calling .map */}
        {Array.isArray(news) && news.length > 0 ? (
          news.map((article, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800">{article.title}</h3>
              <p className="text-md text-gray-600">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Read more
              </a>
            </div>
          ))
        ) : (
          <div>No news available at the moment</div>
        )}
      </div>
    </div>
  );
}

export default NewsUpdates;
