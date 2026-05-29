import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";

function JobSingular({ job }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="job-card">
      <div className="job-card__inner">
        <div className="job-card__meta">{job.type}</div>
        <h3 className="job-card__title">{job.title}</h3>

        <p className="job-card__desc">
          {expanded ? job.description : job.description.substr(0, 110) + "..."}
        </p>
        <span className="job-card__more" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show less" : "Read more"}
        </span>

        <p className="job-card__salary">{job.salary} / Year</p>

        <hr className="job-card__divider" />

        <div className="job-card__footer">
          <span className="job-card__location">
            <FaMapMarker className="job-card__location-icon" />
            {job.location}
          </span>
          <Link to={`/job/${job.id}`} className="btn btn--green btn--sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobSingular;
