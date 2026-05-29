import { Link } from "react-router-dom";

function ViewAllJobs() {
  return (
    <section className="view-all">
      <Link to="/jobs" className="btn btn--green btn--full">
        View All Jobs
      </Link>
    </section>
  );
}

export default ViewAllJobs;
