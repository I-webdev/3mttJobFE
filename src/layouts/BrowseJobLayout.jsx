import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
function BrowseJobLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default BrowseJobLayout;
