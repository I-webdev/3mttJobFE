import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="error-page">
      <h1 className="error-page__code">404</h1>
      <p className="error-page__msg">Oops — this page does not exist</p>
      <Link to="/" className="btn btn--green">Go Back Home</Link>
    </section>
  );
}

export default ErrorPage;
