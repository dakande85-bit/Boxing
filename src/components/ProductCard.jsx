export default function ProductCard({ name, price, image, href }) {
  return (
    <a className="piece-card" href={href}>
      <img src={image} alt={name} loading="lazy" />
      <span>{name}</span>
      <strong>{price}</strong>
      <em>VIEW PIECE</em>
    </a>
  );
}
