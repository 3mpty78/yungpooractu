import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = "AIzaSyBmmdwkm6MP9Kg1qBgKvEsoKJfib0wCeAk";
const CHANNEL_ID = "UCDKHo7SmfE0ZmwHGKlSK_aQ";

const FetchLastClip = async () => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          key: API_KEY,
          channelId: CHANNEL_ID,
          order: "date",
          maxResults: 1,
          part: "snippet",
        },
      }
    );
    if (response.data.items.length > 0) {
      return response.data.items[0];
    }
  } catch (error) {
    console.error("Error fetching latest video", error);
  }
  return null;
};
export function DisplayClip() {
  const [lastClip, setLastClip] = useState(null);

  useEffect(() => {
    const fetchClip = async () => {
      const clip = await FetchLastClip();
      setLastClip(clip);
    };
    fetchClip();
  }, []);
  return (
    <>
      <div id="clips">
        <h2>Dernier clip</h2>
        {lastClip && (
          <iframe
            src={`https://www.youtube.com/embed/${lastClip.id.videoId}`}
            title={lastClip.snippet.title}
            allow="autoplay; encrypted-media"
            allowFullScreen></iframe>
        )}
      </div>
    </>
  );
}
