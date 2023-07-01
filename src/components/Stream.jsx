import spotify from "../assets/icons/streaming/spotify.png";
import deezer from "../assets/icons/streaming/deezer.png";
import appleMusic from "../assets/icons/streaming/apple.png";
import amazonMusic from "../assets/icons/streaming/amazon.png";
import youtubeMusic from "../assets/icons/streaming/youtube.png";

export function Stream() {
  return (
    <>
      <h2>Stream</h2>
      <div id="stream">
        <ul className="links">
          <li>
            <img src={spotify} alt="spotify logo" />
            <a
              href="https://open.spotify.com/intl-fr/artist/4n9g9O44xmv7k4ET9NLvds"
              target="_blank"
              rel="noreferrer">
              Ecouter
            </a>
          </li>
          <li>
            <img src={deezer} alt="deezer logo" />
            <a
              href="https://www.deezer.com/fr/artist/71388132"
              target="_blank"
              rel="noreferrer">
              Ecouter
            </a>
          </li>
          <li>
            <img src={appleMusic} alt="apple music logo" />
            <a
              href="https://music.apple.com/fr/artist/yung-poor-alo/1476108100"
              target="_blank"
              rel="noreferrer">
              Ecouter
            </a>
          </li>
          <li>
            <img src={amazonMusic} alt="amazon music logo" />
            <a
              href="https://music.amazon.fr/artists/B07W83GQNW/yung-poor-alo"
              target="_blank"
              rel="noreferrer">
              Ecouter
            </a>
          </li>
          <li>
            <img src={youtubeMusic} alt="youtube music logo" />
            <a
              href="https://music.youtube.com/channel/UCfRNBkmxtFmQmlW9dLDVWfg"
              target="_blank"
              rel="noreferrer">
              Ecouter
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
