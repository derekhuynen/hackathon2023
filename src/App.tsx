import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { selectConfig } from './store/slice/configSlice';
import { useAppSelector } from './store/hooks';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './shared/Layout';
import Home from './pages/home/Home';
import { useMemo } from 'react';
import { initialTheme } from './constants/initialTheme';
import ProjectPage from 'pages/project/ProjectPage';


const App = () => {
  const { theme } = useAppSelector(selectConfig);

  const customTheme = useMemo(
    () =>
      createTheme({
        ...initialTheme, palette: { ...initialTheme.palette, mode: theme === "LIGHT" ? "light" : "dark" }
      }),
    [theme]
  );

  customTheme.palette.mode = "dark"

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <main data-testid="main">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectPage />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </Layout >
        </BrowserRouter>
      </main>
    </ThemeProvider>
  );
}

export default App;