import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./not-found";
import AddJobPage from "../Pages/addJobsPage";
import Layout from "../layouts/mainlayout";
import HomePage from "../Pages/homePage";
import JobPage from "../Pages/jobsPage";
import RecentJob from "../Pages/RecentJobs";
import BrowseJobLayout from "../layouts/BrowseJobLayout";
import EditJob from "../Pages/editJobs";
import FetchData, { FullData } from "./dataFetcher";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          loader: FullData,
        },

        // {
        //   path: "/add_jobs",
        //   element: <HomePage />,
        // },
      ],
    },
    {
      path: "/",
      element: <BrowseJobLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/jobs",
          element: <RecentJob />,
          loader: FullData,
        },
        {
          path: "/job/:id",
          element: <JobPage />,
          loader: FetchData,
        },
        {
          path: "/add_job",
          element: <AddJobPage />,
        },
        {
          path: "/job/edit/:id",
          element: <EditJob />,
          loader: FetchData,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
