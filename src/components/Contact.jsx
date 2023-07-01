import discord from "../assets/icons/social/discord.svg";
import instagram from "../assets/icons/social/instagram.svg";
import twitter from "../assets/icons/social/twitter.svg";

const links = [
  {
    image: twitter,
    link: "https://twitter.com/YungPoorALO",
    title: "Twitter",
  },
  {
    image: instagram,
    link: "https://z-p42.www.instagram.com/yungpooralo/?hl=fb-ha",
    title: "Instagram",
  },
  {
    image: discord,
    link: "https://discord.gg/jEHZ2UUE",
    title: "Discord",
  },
];

export function Contact() {
  return (
    <>
      <div id="contact">
        <h2>Contact</h2>
        <div className="links_container">
          <div className="links">
            {links.map((val, key) => {
              return (
                <span key={key}>
                  <a href={val.link} target="_blank" rel="noreferrer">
                    <img src={val.image} alt="twitter icon" />
                  </a>
                  <a href={val.link} target="_blank" rel="noreferrer">
                    {val.title}
                  </a>
                </span>
              );
            })}
          </div>
          <div className="links">
            <h3>Site officiel :</h3>
            <a
              href="https://www.jeunepauvre.fr/"
              target="_blank"
              rel="noreferrer">
              jeunepauvre.fr
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
