import React, { useState, useEffect } from 'react';

const videos = {
  kannada: [
    "7ckAx22KzMo",
    "TbxQeUVf6FE",
    "cnbGkaVXypw",
  ],
  hindi: [
    "0KtBEg4d2A4",
    "1LeLJC9oGyc",
  ],
  english: [
    "1Bhh7umajLE",
  ],
  marathi: [
    "nmAWWOHlSKA",
    "pWpHOy6gsH8",
  ]
};

const YouTubeEmbed = ({ videoId }) => (
  <iframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${videoId}`}
    title="YouTube video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

const VideoRecommendation = ({ initialLanguage }) => {
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [languageSubmitted, setLanguageSubmitted] = useState(false);

  useEffect(() => {
    if (languageSubmitted && initialLanguage) {
      setSelectedVideos(videos[initialLanguage] || []);
    }
  }, [initialLanguage, languageSubmitted]);

  const handleLanguageSubmit = () => {
    setLanguageSubmitted(true); // Allow videos to be displayed only after this is set
  };

  return (
    <div className="mt-6">
      {!languageSubmitted ? (
        <div>
          <p className="text-md text-gray-600 mb-4">
            Please submit a language to view video recommendations.
          </p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
            onClick={handleLanguageSubmit}
          >
            Submit Language
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Video Recommendations for "{initialLanguage.toUpperCase()}"
          </h3>
          {selectedVideos.length > 0 ? (
            selectedVideos.map((videoId) => (
              <div key={videoId} className="mb-6">
                <YouTubeEmbed videoId={videoId} />
              </div>
            ))
          ) : (
            <p className="text-md text-red-600">No videos found for "{initialLanguage}".</p>
          )}
        </>
      )}
    </div>
  );
};

export default VideoRecommendation;
