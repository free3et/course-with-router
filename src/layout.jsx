import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "./routes";

export const Layout = () => {
  return (
    <main>
      <nav>
        <NavLink to={ROUTES.lessons} style={{ background: "#447ec4" }}>
          Back
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </main>
  );
};
