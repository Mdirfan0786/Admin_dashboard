import { useState } from "react";

import { Box, CssBaseline, Toolbar, ThemeProvider } from "@mui/material";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import OverviewCards from "./components/overviewCards/OverviewCards";
import DataTable from "./components/dataTable/DataTable";

import { lightTheme, darkTheme } from "./theme";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />

      <Topbar toggleTheme={toggleTheme} />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          ml: "240px",
        }}
      >
        <Toolbar />

        <OverviewCards />

        <DataTable />
      </Box>
    </ThemeProvider>
  );
}
