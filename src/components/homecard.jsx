import Card from "./card";

function HomeCard() {
  return (
    <section className="homecards">
      <div className="homecards__grid">
        <Card
          colour="card--gray"
          heading="For Job Seekers"
          paragraph="Browse listings from Nigerian employers and start your career today"
          btn="Browse Jobs"
          href="/jobs"
        />
        <Card
          colour="card--gold"
          heading="For Employers"
          paragraph="List your vacancy and find the perfect candidate for your role"
          btn="Post a Job"
          href="/add_job"
        />
      </div>
    </section>
  );
}

export default HomeCard;
