import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Clients } from './pages/Clients';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;