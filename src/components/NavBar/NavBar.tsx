import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly"
  }));

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    }
  }));

  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <RouterLink to="/" style={{ textDecoration: 'none' }}>
          <StyledMenuItem>Home</StyledMenuItem>
        </RouterLink>
        <ScrollLink
          activeClass="active"
          to="about-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ textDecoration: 'none', cursor: 'pointer' }}
        >
          <StyledMenuItem>About</StyledMenuItem>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="projects-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ textDecoration: 'none', cursor: 'pointer' }}
        >
          <StyledMenuItem>Projects</StyledMenuItem>
        </ScrollLink>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
