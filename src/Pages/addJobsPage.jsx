import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddJobPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under ₦50K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  function submitForm(e) {
    e.preventDefault();
    const newJob = { title, type, location, description, salary,
      company: { name: companyName, description: companyDescription, contactEmail, contactPhone }
    };
    (async () => {
      try {
        await axios.post(`https://threemttapi-ryoj.onrender.com/`, newJob);
      } catch (error) { console.log(error); }
    })();
    return navigate("/");
  }

  return (
    <section className="form-page">
      <div className="form-page__wrap">
        <div className="form-card">
          <form onSubmit={submitForm}>
            <h2 className="form-title">Post a Job</h2>

            <div className="form-group">
              <label className="form-label">Job Type</label>
              <select className="form-control" required value={type} onChange={(e) => setType(e.target.value)}>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Remote</option>
                <option>Internship</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Job Title</label>
              <input type="text" className="form-control" placeholder="e.g. Senior React Developer"
                required value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="4"
                placeholder="Job duties, expectations, requirements..."
                value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">Salary Range</label>
              <select className="form-control" required value={salary} onChange={(e) => setSalary(e.target.value)}>
                {["Under ₦50K","₦50K–₦100K","₦100K–₦150K","₦150K–₦200K","₦200K–₦300K","Over ₦300K"].map(s =>
                  <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Location</label>
              <input type="text" className="form-control" placeholder="e.g. Lagos, Nigeria"
                required value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>

            <h3 className="form-section-title">Company Info</h3>

            <div className="form-group">
              <label className="form-label">Company Name</label>
              <input type="text" className="form-control" placeholder="Your company name"
                value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">Company Description</label>
              <textarea className="form-control" rows="3"
                placeholder="What does your company do?"
                value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">Contact Email</label>
              <input type="email" className="form-control" placeholder="hr@company.com"
                required value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">Contact Phone <span style={{fontWeight:400,color:'var(--muted)'}}>(optional)</span></label>
              <input type="tel" className="form-control" placeholder="+234 800 000 0000"
                value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} />
            </div>

            <button type="submit" className="btn btn--green btn--full btn--pill" style={{marginTop:"0.5rem",padding:"0.75rem"}}>
              Post Job
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
