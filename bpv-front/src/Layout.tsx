import { List } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <List>
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact</Link>
        </List>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;