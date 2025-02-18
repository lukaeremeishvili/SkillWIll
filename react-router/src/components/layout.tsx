import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </nav>
      </header>
      <main>
        <hr></hr>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
