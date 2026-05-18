import { useState } from "react";

import { Box, CssBaseline, Toolbar, ThemeProvider } from "@mui/material";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import OverviewCards from "./components/overviewCards/OverviewCards";
import DataTable from "./components/dataTable/DataTable";

import { lightTheme, darkTheme } from "./theme";

const drawerWidth = 240;

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />

      <Topbar
        toggleTheme={toggleTheme}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,

          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
          },

          ml: {
            sm: `${drawerWidth}px`,
          },
        }}
      >
        <Toolbar />

        <OverviewCards />

        <DataTable />
      </Box>
    </ThemeProvider>
  );
}
