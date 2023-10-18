import spotify from "../assets/icons/streaming/spotify.png";
import deezer from "../assets/icons/streaming/deezer.png";
import appleMusic from "../assets/icons/streaming/apple.png";
import amazonMusic from "../assets/icons/streaming/amazon.png";
import youtubeMusic from "../assets/icons/streaming/youtube.png";

const last_release = [
      {
            imgURL: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/14/da/4c/14da4c30-049d-5b6e-6713-35a4d95a44f7/cover.jpg/1200x1200bf-60.jpg",
            titre: "CHAT NOIR",
            author: "YUNG POOR ALO, PUSH & GIO",
            link: "https://t.co/y0MCTCf62j",
      },
];

export function Stream() {
      return (
            <>
                  <h2>Stream</h2>
                  <div id="stream">
                        {last_release.map((release, index) => (
                              <div key={index} className="last_release">
                                    <h3>Dernière sortie</h3>
                                    <img src={release.imgURL} alt="" />
                                    <h3>{release.titre}</h3>
                                    <p>{release.author}</p>
                                    <a
                                          href={release.link}
                                          target="_blank"
                                          rel="noreferrer">
                                          Écouter
                                    </a>
                              </div>
                        ))}
                        <ul className="links">
                              <li>
                                    <img src={spotify} alt="spotify logo" />
                                    <a
                                          href="https://open.spotify.com/intl-fr/artist/4n9g9O44xmv7k4ET9NLvds"
                                          target="_blank"
                                          rel="noreferrer">
                                          Écouter
                                    </a>
                              </li>
                              <li>
                                    <img src={deezer} alt="deezer logo" />
                                    <a
                                          href="https://www.deezer.com/fr/artist/71388132"
                                          target="_blank"
                                          rel="noreferrer">
                                          Écouter
                                    </a>
                              </li>
                              <li>
                                    <img
                                          src={appleMusic}
                                          alt="apple music logo"
                                    />
                                    <a
                                          href="https://music.apple.com/fr/artist/yung-poor-alo/1476108100"
                                          target="_blank"
                                          rel="noreferrer">
                                          Écouter
                                    </a>
                              </li>
                              <li>
                                    <img
                                          src={amazonMusic}
                                          alt="amazon music logo"
                                    />
                                    <a
                                          href="https://music.amazon.fr/artists/B07W83GQNW/yung-poor-alo"
                                          target="_blank"
                                          rel="noreferrer">
                                          Écouter
                                    </a>
                              </li>
                              <li>
                                    <img
                                          src={youtubeMusic}
                                          alt="youtube music logo"
                                    />
                                    <a
                                          href="https://music.youtube.com/channel/UCfRNBkmxtFmQmlW9dLDVWfg"
                                          target="_blank"
                                          rel="noreferrer">
                                          Écouter
                                    </a>
                              </li>
                        </ul>
                  </div>
            </>
      );
}
