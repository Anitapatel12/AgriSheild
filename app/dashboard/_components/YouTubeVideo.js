// _components/YouTubeVideo.js
const YouTubeVideo = ({ video }) => {
    return (
      <div>
        <h3>{video.snippet.title}</h3>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default YouTubeVideo;
  