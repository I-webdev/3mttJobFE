import { Link } from "react-router-dom";

function Card({ colour = "card--gray", heading, paragraph, href, btn }) {
  return (
    <div className={`card ${colour}`}>
      <h2 className="card__heading">{heading}</h2>
      <p className="card__para">{paragraph}</p>
      <Link to={href} className="btn btn--dark">
        {btn}
      </Link>
    </div>
  );
}

export default Card;
