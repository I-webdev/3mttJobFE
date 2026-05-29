import HomeCard from "../components/homecard";
import JobListing from "../components/job-listing";
import ViewAllJobs from "../components/viewAllJobsBtn";
function HomePage() {
    return <>
    <HomeCard />
    <JobListing isHome={true} />
    <ViewAllJobs />
    </>
}

export default HomePage;