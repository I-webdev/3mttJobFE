import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import Nav from "../components/nav";
function Layout() {
  return (
    <>
      <Nav />
      
      <Hero />
      <Outlet />
    </>
  );
}

export default Layout;
