import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  Twitter,
  Facebook,
  Instagram,
  AccessTime,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'iOS App Development',
      'Android App Development',
      'Web Development',
      'Cloud App Development',
      'IT Staffing Solutions',
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'News & Updates',
    ],
    legal: [
      'Terms & Conditions',
      'Privacy Policy',
      'Cookie Policy',
      'Disclaimer',
    ],
  };

  const socialLinks = [
    { icon: <LinkedIn />, url: '#', name: 'LinkedIn' },
    { icon: <Twitter />, url: '#', name: 'Twitter' },
    { icon: <Facebook />, url: '#', name: 'Facebook' },
    { icon: <Instagram />, url: '#', name: 'Instagram' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'primary.light' }}>
                Unitedhands Technologies
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: 'grey.300', lineHeight: 1.8 }}>
                Leading software development company specializing in innovative solutions 
                since 2021. We transform ideas into powerful digital experiences.
              </Typography>
              
              {/* Contact Info */}
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
                  <LocationOn sx={{ mr: 1, mt: 0.5, color: 'primary.light', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: 'grey.300' }}>
                    No. 90, Sri Velavan Complex,<br />
                    Vaiyapuri Nagar(West), Karur,<br />
                    TamilNadu, India - 639002
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Email sx={{ mr: 1, color: 'primary.light', fontSize: 20 }} />
                  <Link href="mailto:rajeshkumar.c@unitedhands.cc" sx={{ color: 'grey.300', textDecoration: 'none' }}>
                    rajeshkumar.c@unitedhands.cc
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <Phone sx={{ mr: 1, color: 'primary.light', fontSize: 20 }} />
                  <Link href="tel:+917624919806" sx={{ color: 'grey.300', textDecoration: 'none' }}>
                    +91-7624919806
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTime sx={{ mr: 1, color: 'primary.light', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: 'grey.300' }}>
                    Monday - Friday: 9:00 AM - 6:00 PM IST
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.light' }}>
                Services
              </Typography>
              <Box>
                {footerLinks.services.map((service) => (
                  <Link
                    key={service}
                    href="/services"
                    sx={{
                      display: 'block',
                      color: 'grey.400',
                      textDecoration: 'none',
                      mb: 1,
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'primary.light',
                        transform: 'translateX(4px)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {service}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.light' }}>
                Company
              </Typography>
              <Box>
                {footerLinks.company.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    sx={{
                      display: 'block',
                      color: 'grey.400',
                      textDecoration: 'none',
                      mb: 1,
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'primary.light',
                        transform: 'translateX(4px)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.light' }}>
                Legal
              </Typography>
              <Box>
                {footerLinks.legal.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    sx={{
                      display: 'block',
                      color: 'grey.400',
                      textDecoration: 'none',
                      mb: 1,
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'primary.light',
                        transform: 'translateX(4px)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.light' }}>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.name}
                    href={social.url}
                    sx={{
                      color: 'grey.400',
                      '&:hover': {
                        color: 'primary.light',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'grey.700' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            © {currentYear} Unitedhands Technologies Pvt Ltd. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            Crafted with ❤️ in India
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};