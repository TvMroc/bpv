import { Button, List } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <List sx={{ display: "flex", width: "100%", justifyContent: "center", gap: "10px"}}>
        <Button href="/" variant="contained">Home</Button>
        <Button href="/map" variant="contained">Map</Button>
        <Button href="/test" variant="contained">Test</Button>
      </List>
      <Outlet />
    </>
  )
};

export default Layout;