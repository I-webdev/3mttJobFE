import { useParams, Link, useNavigate, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const CATEGORIES = ["All", "Tech", "Design", "Marketing", "Finance", "Legal"];

function JobPage() {
  let { id } = useParams();
  const navigate = useNavigate();
  const data = useLoaderData();
  const company = data.company;

  function handleDelete() {
    (async () => {
      try {
        await axios.delete(`https://threemttapi-ryoj.onrender.com/${id}`);
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    })();
    return navigate("/jobs");
  }


  
  return (
    <>
      <div className="job-detail-back">
        <Link to="/jobs">
          <FaArrowLeft /> Back to Job Listings
        </Link>
      </div>

      <section className="job-detail">
        <div className="job-detail__grid">
          {/* Main */}
          <main>
            <div className="job-detail__box">
              <div className="job-detail__type">{data.type}</div>
              <h1 className="job-detail__title">{data.title}</h1>
              <div className="job-detail__location">
                <i className="fa-solid fa-location-dot"></i>
                <span>{data.location}</span>
              </div>
            </div>

            <div className="job-detail__box">
              <h3 className="job-detail__section-title">Job Description</h3>
              <p className="job-detail__text">{data.description}</p>
              <h3 className="job-detail__section-title">Salary</h3>
              <p className="job-detail__text">{data.salary} / Year</p>

              <Link
                to={`/`}
                className="btn btn--gold"
                style={{ marginRight: "0.75rem" }}
              >
                Apply Now
              </Link>
            </div>
          </main>

          {/* Sidebar */}
          <aside>
            <div className="job-detail__box">
              <h3 className="job-detail__section-title">Company Info</h3>
              <p className="sidebar__company-name">{company?.name}</p>
              <p className="sidebar__company-desc">{company?.description}</p>
              <hr className="sidebar__hr" />
              <p className="sidebar__label">Contact Email</p>
              <p className="sidebar__value">{company?.contactEmail}</p>
              <p className="sidebar__label">Contact Phone</p>
              <p className="sidebar__value">{company?.contactPhone}</p>
            </div>

            <div className="job-detail__box" style={{ marginTop: "1.5rem" }}>
              <h3 className="job-detail__section-title">Manage Job</h3>
              <Link
                to={`/job/edit/${id}`}
                className="btn btn--green btn--full btn--pill"
                style={{
                  marginBottom: "0.75rem",
                  display: "block",
                  textAlign: "center",
                  padding: "0.625rem 1rem",
                }}
              >
                Edit Job
              </Link>
              <button
                onClick={handleDelete}
                className="btn btn--full btn--pill"
                style={{
                  background: "#dc2626",
                  color: "white",
                  marginTop: "0.75rem",
                }}
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default JobPage;
