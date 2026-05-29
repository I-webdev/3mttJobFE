import { useMemo, useState } from "react";
import JobSingular from "./job-singular";
import { useLoaderData } from "react-router-dom";
const CATEGORIES = ["All", "Tech", "Design", "Marketing", "Finance", "Legal"];

function JobListing({ isHome }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const data = useLoaderData();
  const displayData = isHome ? data.slice(-3) : data;

  const filtered = useMemo(() => {
    let jobs = isHome ? data.slice(-3) : data;
    if (!isHome) {
      if (category !== "All")
        jobs = jobs.filter((j) => j.category === category);
      if (search.trim()) {
        const q = search.toLowerCase();
        jobs = jobs.filter(
          (j) =>
            j.title.toLowerCase().includes(q) ||
            (j.company?.name || j.company || "").toLowerCase().includes(q),
        );
      }
    }
    return jobs;
  }, [isHome, search, category]);

  return (
    <section className="job-listing">
      <h2 className="job-listing__title">
        {isHome ? "Recent Listings" : "Browse All Jobs"}
      </h2>
      {!isHome && (
        <div className="job-listing__controls">
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="category-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${category === cat ? "filter-btn--active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      <div
        className={`job-listing__grid ${isHome ? "job-listing__grid--home" : "job-listing__grid--all"}`}
      >
        {filtered.length === 0 ? (
          <p className="no-results">
            No jobs found. Try a different search or filter.
          </p>
        ) : (
          filtered.map((dat) => <JobSingular job={dat} key={dat.id} />)
        )}
      </div>
    </section>
  );
}

export default JobListing;
