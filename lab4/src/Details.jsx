import { data } from "./data";
import { useParams, Link } from "react-router-dom";

export function Details() {
  const { id } = useParams();
  const item = data.find((item) => item.id === parseInt(id));

  if (!item) return <div>Item not found</div>;

  return (
    <div className="details">
      <h1>{item.title}</h1>
      <img src={item.img} alt={item.title} />
      <p>{item.longDesc}</p>
      <Link to="/" className="details-back-link">Назад к списку новостей</Link>
    </div>
  );
}