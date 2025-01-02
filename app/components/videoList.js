import Image from "next/image";

export const VideoList = ({ videos, setSelectedVideo }) => {
  const videoList = videos.map((video, index) => (
    <li
      className="list-group-item"
      key={index}
      onClick={() => setSelectedVideo(video)}
    >
      <img src={video.snippet.thumbnails.default.url} alt="Video" />
    </li>
  ));

  return <ul className="col-md-4 list-group">{videoList}</ul>;
};
