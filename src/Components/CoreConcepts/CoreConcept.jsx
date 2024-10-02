import "./CoreConcept.css";
import { data } from "../../data";
export default function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {data.map(({ image, title, description }) => (
          <li key={title}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
