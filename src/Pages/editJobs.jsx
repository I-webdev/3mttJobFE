import { useNavigate, useParams, useLoaderData } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function EditJob() {
  const navigate = useNavigate();
  const job = useLoaderData();
  const { id } = useParams();
  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(job.company.description);
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

  function onEdit(e) {
    e.preventDefault();
    const newJob = { title, type, location, description, salary,
      company: { name: companyName, description: companyDescription, contactEmail, contactPhone }
    };
    (async () => {
      try {
        await axios.patch(
          `https://threemttapi-ryoj.onrender.com/${id}`,
          newJob,
        );
      } catch (error) { console.log(error); }
    })();
    return navigate(`/job/${id}`);
  }

  return (
    <section className="form-page">
      <div className="form-page__wrap">
        <div className="form-card">
          <form onSubmit={onEdit}>
            <h2 className="form-title">Edit Job</h2>

            <div className="form-group">
              <label className="form-label">Job Type</label>
              <select className="form-control" value={type} onChange={(e) => setType(e.target.value)}>
                <option>Full-Time</option><option>Part-Time</option>
                <option>Remote</option><option>Internship</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Job Title</label>
              <input type="text" className="form-control" value={title}
                onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="4" value={description}
                onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">Salary Range</label>
              <select className="form-control" value={salary} onChange={(e) => setSalary(e.target.value)}>
                {["Under ₦50K","₦50K–₦100K","₦100K–₦150K","₦150K–₦200K","₦200K–₦300K","Over ₦300K"].map(s =>
                  <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Location</label>
              <input type="text" className="form-control" value={location}
                onChange={(e) => setLocation(e.target.value)} />
            </div>

            <h3 className="form-section-title">Company Info</h3>

            <div className="form-group">
              <label className="form-label">Company Name</label>
              <input type="text" className="form-control" value={companyName}
                onChange={(e) => setCompanyName(e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">Company Description</label>
              <textarea className="form-control" rows="3" value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">Contact Email</label>
              <input type="email" className="form-control" value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">Contact Phone</label>
              <input type="tel" className="form-control" value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)} />
            </div>

            <button type="submit" className="btn btn--green btn--full btn--pill" style={{marginTop:"0.5rem",padding:"0.75rem"}}>
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
