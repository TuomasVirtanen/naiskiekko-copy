import * as React from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import "./Navbar.css";

const pages = [
  { name: "Uutiset", path: "/" },
  {
    name: "Kotimainen sarjatoiminta",
    path: "/kotimainen-sarjatoiminta",
    subpages: [
      {
        name: "Naisten Liiga",
        path: "/kotimainen-sarjatoiminta/naisten-liiga",
      },
      {
        name: "Naisten Mestis",
        path: "/kotimainen-sarjatoiminta/naisten-mestis",
      },
      {
        name: "Naisten Suomi-Sarja",
        path: "/kotimainen-sarjatoiminta/naisten-suomi-sarja",
      },
      {
        name: "Seurajoukkueet",
        path: "/kotimainen-sarjatoiminta/seurajoukkueet",
      },
      { name: "Tyttökiekko", path: "/kotimainen-sarjatoiminta/tyttokiekko" },
    ],
  },
  {
    name: "Maajoukkueet",
    path: "/maajoukkueet",
    subpages: [
      { name: "Naisleijonat", path: "/maajoukkueet/naisleijonat" },
      {
        name: "Tyttöjen maajoukkue U-18",
        path: "/maajoukkueet/u18-maajoukkue",
      },
    ],
  },
  { name: "Naiskiekko ulkomailla", path: "/naiskiekko-ulkomailla" },
  { name: "Jääkiekon sanastoa", path: "/jaakiekon-sanastoa" },
  { name: "Tue naisten jääkiekkoa", path: "/tue-naisten-jaakiekkoa" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [activeMenu, setActiveMenu] = React.useState<null | string>(null);
  const location = useLocation(); // Get the current location object

  const handleOpenNavMenu = (
    event: React.MouseEvent<any, MouseEvent>,
    menuName: string
  ) => {
    setAnchorElNav(event.currentTarget);
    setActiveMenu(menuName);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setActiveMenu(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center", // Align content vertically in the center
              justifyContent: "space-between", // Spread elements evenly
              gap: "8px", // Adjust the gap size as needed
            }}
          >
            {pages.map((page) => (
              <React.Fragment key={page.name}>
                {page.subpages ? (
                  page.subpages.find((subpage) =>
                    location.pathname.includes(subpage.path)
                  ) ? (
                    <Typography variant="h6" sx={{ color: "black" }}>
                      {page.name}
                    </Typography>
                  ) : null
                ) : location.pathname === page.path ? (
                  <Typography variant="h6" sx={{ color: "black" }}>
                    {page.name}
                  </Typography>
                ) : null}
              </React.Fragment>
            ))}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => handleOpenNavMenu(event, "menu-appbar")}
              sx={{
                color: "black",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <React.Fragment key={page.name}>
                  {page.subpages ? (
                    <MenuItem
                      onClick={(
                        e: React.MouseEvent<HTMLLIElement, MouseEvent>
                      ) => handleOpenNavMenu(e, page.name)}
                    >
                      <Typography textAlign="center">{page.name}</Typography>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                    </MenuItem>
                  ) : (
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        to={page.path}
                      >
                        {page.name}
                      </Link>
                    </MenuItem>
                  )}
                  {page.subpages && (
                    <Menu
                      id={`dropdown-menu-${page.name}`}
                      anchorEl={anchorElNav}
                      open={activeMenu === page.name}
                      onClose={handleCloseNavMenu}
                    >
                      {page.subpages.map((subpage) => (
                        <MenuItem
                          key={subpage.name}
                          onClick={handleCloseNavMenu}
                        >
                          <Link
                            style={{
                              color: "inherit",
                              textDecoration: "none",
                            }}
                            to={subpage.path}
                          >
                            {subpage.name}
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </React.Fragment>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "stretch",
              gap: "8px", // Adjust the gap size as needed
              height: "100%", // Make the container fill the height of the navbar
            }}
          >
            {pages.map((page) => (
              <React.Fragment key={page.name}>
                {page.subpages ? (
                  <Button
                    aria-controls={`dropdown-menu-${page.name}`}
                    aria-haspopup="true"
                    onClick={(e) => handleOpenNavMenu(e, page.name)}
                    color="inherit"
                    sx={{
                      flexGrow: 1,
                      color: "white",
                      backgroundColor: "#0D47A1",
                      display: "flex",
                      "&:hover": {
                        backgroundColor: "#1565C0",
                      },
                    }}
                  >
                    {page.name}
                    <ChevronRightIcon />
                  </Button>
                ) : (
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      flexGrow: 1,
                      color: "white",
                      backgroundColor: "#0D47A1",
                      display: "flex",
                      "&:hover": {
                        backgroundColor: "#1565C0",
                      },
                    }}
                    component={Link}
                    to={page.path}
                  >
                    {page.name}
                  </Button>
                )}
                {page.subpages && (
                  <Menu
                    id={`dropdown-menu-${page.name}`}
                    anchorEl={anchorElNav}
                    open={activeMenu === page.name}
                    onClose={handleCloseNavMenu}
                  >
                    {page.subpages.map((subpage) => (
                      <MenuItem key={subpage.name} onClick={handleCloseNavMenu}>
                        <Link
                          style={{
                            color: "inherit",
                            textDecoration: "none",
                          }}
                          to={subpage.path}
                        >
                          {subpage.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
