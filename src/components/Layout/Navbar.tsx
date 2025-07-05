import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Collapse,
} from '@mui/material';
import { Menu as MenuIcon, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  'iOS App Development',
  'Android App Development',
  'Web Development',
  'Cloud App Development',
  'Maintenance and Support',
  'IT Staffing Solutions',
  'Core Technologies',
  'Other Services',
];

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasSubmenu: true },
    { name: 'Clients', path: '/clients' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Typography variant="h6" sx={{ px: 2, mb: 2, fontWeight: 700, color: 'primary.main' }}>
        Unitedhands Technologies
      </Typography>
      <List>
        {navItems.map((item) => (
          <div key={item.name}>
            <ListItem
              component={item.hasSubmenu ? 'div' : Link}
              to={!item.hasSubmenu ? item.path : undefined}
              onClick={item.hasSubmenu ? () => setServicesOpen(!servicesOpen) : handleDrawerToggle}
              sx={{
                backgroundColor: isActive(item.path) ? 'primary.light' : 'transparent',
                '&:hover': { backgroundColor: 'grey.100' },
                cursor: 'pointer',
              }}
            >
              <ListItemText primary={item.name} />
              {item.hasSubmenu && (servicesOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {item.hasSubmenu && (
              <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {services.map((service) => (
                    <ListItem
                      key={service}
                      component={Link}
                      to="/services"
                      onClick={handleDrawerToggle}
                      sx={{ pl: 4, cursor: 'pointer' }}
                    >
                      <ListItemText primary={service} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: 'primary.main',
                fontWeight: 700,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
              }}
            >
              Unitedhands Technologies
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1 }} />

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    color="inherit"
                    component={item.hasSubmenu ? 'button' : Link}
                    to={!item.hasSubmenu ? item.path : undefined}
                    onClick={item.hasSubmenu ? handleServicesClick : undefined}
                    sx={{
                      color: isActive(item.path) ? 'primary.main' : 'text.primary',
                      fontWeight: isActive(item.path) ? 600 : 500,
                      position: 'relative',
                      '&::after': isActive(item.path) ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%',
                        height: 2,
                        backgroundColor: 'primary.main',
                        borderRadius: 1,
                      } : {},
                    }}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
            borderRadius: 2,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        {services.map((service) => (
          <MenuItem
            key={service}
            component={Link}
            to="/services"
            onClick={handleClose}
            sx={{
              py: 1.5,
              '&:hover': {
                backgroundColor: 'primary.light',
                color: 'white',
              },
            }}
          >
            {service}
          </MenuItem>
        ))}
      </Menu>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};