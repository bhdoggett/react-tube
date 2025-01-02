"use client";
import { SearchBar } from "./components/searchBar";
import { useState } from "react";
import axios from "axios";
import VideoDetail from "./components/videoDetail";
import { VideoList } from "./components/videoList";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoSearch = async (term) => {
    const url = "https://www.googleapis.com/youtube/v3/search";

    const params = {
      part: "snippet",
      key: API_KEY,
      q: term,
      type: "video",
    };

    try {
      // const response = await axios.get("./data.json");
      const response = await axios.get(url, { params });

      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={videoSearch} />
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
    </div>
  );
}
