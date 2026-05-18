import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Topbar({ toggleTheme, handleDrawerToggle }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1201,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: { sm: "none" },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>

        <IconButton color="inherit" onClick={toggleTheme}>
          <DarkModeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
