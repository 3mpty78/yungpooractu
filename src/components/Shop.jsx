import tshirt from "../assets/tshirt.webp";
import pull from "../assets/pull.webp";
import cagoule from "../assets/cagoule.webp";

const items = [
  {
    image: tshirt,
    description: `T-shirt noir "Jeune Pauvre"`,
    price: 25 + "," + 0 + 0,
    link: "https://www.jeunepauvre.fr/products/t-shirt-noir",
  },
  {
    image: pull,
    description: `Hoodie noir "Jeune Pauvre`,
    price: 40 + "," + 0 + 0,
    link: "https://www.jeunepauvre.fr/products/hoodie-noir",
  },
  {
    image: cagoule,
    description: `Cagoule noire "Jeune Pauvre"`,
    price: 19 + "," + 0 + 0,
    link: "https://www.jeunepauvre.fr/products/cagoule-noire",
  },
];

export function Shop() {
  return (
    <>
      <h2>Merch</h2>
      <div id="shop">
        {items.map((val, key) => {
          return (
            <div className="item" key={key}>
              <a href={val.link}>
                <img src={val.image} alt="photo du produit" />
              </a>
              <h3>{val.description}</h3>
              <p>{val.price} €</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
