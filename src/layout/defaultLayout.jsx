import { NavLink, Outlet } from "react-router";
import { useMainContext } from "../context/MainContext";

export default function DefaultLayout() {
  const { isLoading } = useMainContext();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"}>
            Homepage
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={"/Filmpage"}
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isLoading && (
        <div className="containerLoader">
          <div className="loader">Loading.....</div>
        </div>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
}
