import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Paper,
  Chip,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

const clients = [
  {
    name: 'TechCorp Solutions',
    industry: 'Technology',
    project: 'E-Commerce Platform',
    description: 'Complete e-commerce solution with mobile app and admin dashboard for seamless online shopping experience',
    testimonial: 'Exceptional work quality and timely delivery. The team understood our requirements perfectly and delivered beyond expectations.',
    rating: 5,
    avatar: 'T',
    color: '#2563eb',
  },
  {
    name: 'HealthCare Plus',
    industry: 'Healthcare',
    project: 'Patient Management System',
    description: 'Comprehensive healthcare management system with appointment scheduling and patient records management',
    testimonial: 'Professional team with great attention to detail. Highly recommended for healthcare projects with complex requirements.',
    rating: 5,
    avatar: 'H',
    color: '#059669',
  },
  {
    name: 'FinanceFlow',
    industry: 'Finance',
    project: 'Financial Dashboard',
    description: 'Real-time financial analytics and reporting dashboard with advanced data visualization capabilities',
    testimonial: 'Outstanding technical expertise and excellent communication throughout the project. Delivered a robust financial solution.',
    rating: 5,
    avatar: 'F',
    color: '#7c3aed',
  },
  {
    name: 'EduTech Academy',
    industry: 'Education',
    project: 'Learning Management System',
    description: 'Online learning platform with video streaming, interactive assessments, and progress tracking tools',
    testimonial: 'Innovative solutions and user-friendly design. Students and teachers love the intuitive platform interface!',
    rating: 5,
    avatar: 'E',
    color: '#dc2626',
  },
  {
    name: 'RetailMax',
    industry: 'Retail',
    project: 'Inventory Management',
    description: 'Advanced inventory tracking and management system with real-time stock monitoring and automated alerts',
    testimonial: 'Streamlined our operations significantly. Great ROI on our investment with improved efficiency and reduced costs.',
    rating: 5,
    avatar: 'R',
    color: '#ea580c',
  },
  {
    name: 'LogiTrack',
    industry: 'Logistics',
    project: 'Fleet Management App',
    description: 'Real-time fleet tracking and route optimization system with GPS integration and driver management',
    testimonial: 'Reduced our operational costs by 30%. Excellent project management and technical implementation throughout.',
    rating: 5,
    avatar: 'L',
    color: '#0891b2',
  },
  {
    name: 'FoodieHub',
    industry: 'Food & Beverage',
    project: 'Restaurant Management',
    description: 'Complete restaurant management system with online ordering, table reservations, and kitchen management',
    testimonial: 'Boosted our online orders by 150%. Amazing user experience design that customers absolutely love using.',
    rating: 5,
    avatar: 'F',
    color: '#65a30d',
  },
  {
    name: 'PropertyPro',
    industry: 'Real Estate',
    project: 'Property Portal',
    description: 'Real estate listing and management platform with virtual tours, mortgage calculator, and agent tools',
    testimonial: 'Modern design and powerful features. Our agents are very satisfied with the comprehensive functionality provided.',
    rating: 5,
    avatar: 'P',
    color: '#9333ea',
  },
  {
    name: 'MediaStream',
    industry: 'Entertainment',
    project: 'Video Streaming App',
    description: 'High-quality video streaming platform with social features, content management, and analytics dashboard',
    testimonial: 'Scalable architecture that handles thousands of concurrent users seamlessly. Outstanding performance optimization.',
    rating: 5,
    avatar: 'M',
    color: '#be185d',
  },
  {
    name: 'AutoCare',
    industry: 'Automotive',
    project: 'Service Booking System',
    description: 'Automotive service booking and management platform with appointment scheduling and service history tracking',
    testimonial: 'Simplified our booking process and improved customer satisfaction significantly. Excellent technical support provided.',
    rating: 5,
    avatar: 'A',
    color: '#0369a1',
  },
];

const industries = [
  { name: 'Technology', count: 3, color: '#2563eb' },
  { name: 'Healthcare', count: 2, color: '#059669' },
  { name: 'Finance', count: 2, color: '#7c3aed' },
  { name: 'Education', count: 1, color: '#dc2626' },
  { name: 'Retail', count: 1, color: '#ea580c' },
  { name: 'Logistics', count: 1, color: '#0891b2' },
];

const stats = [
  { number: '10+', label: 'Happy Clients', color: '#2563eb' },
  { number: '20+', label: 'Projects Delivered', color: '#7c3aed' },
  { number: '100%', label: 'Client Satisfaction', color: '#059669' },
];

export const Clients = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: { xs: 6, md: 10, lg: 12 },
          textAlign: 'center',
          minHeight: { xs: '50vh', md: '60vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                fontWeight: 700,
                mb: 3,
              }}
            >
              Our Clients
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                px: { xs: 2, md: 0 },
              }}
            >
              Trusted by businesses across various industries to deliver exceptional 
              software solutions that drive growth and success
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 6, md: 8 } }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={stat.label}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    textAlign: 'center',
                    bgcolor: stat.color,
                    color: 'white',
                    borderRadius: 3,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontWeight: 700, 
                      mb: 1,
                      fontSize: { xs: '2.5rem', md: '3rem' },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography 
                    variant="h6"
                    sx={{
                      fontSize: { xs: '1.125rem', md: '1.25rem' },
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              color: 'text.primary',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
            }}
          >
            Industries We Serve
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: { xs: 4, md: 6 },
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.125rem' },
              px: { xs: 2, md: 0 },
            }}
          >
            We have experience working across diverse industries, understanding unique challenges and requirements
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 6, md: 8 } }}>
          {industries.map((industry, index) => (
            <Grid item xs={6} sm={4} md={2} key={industry.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    p: { xs: 2, md: 3 },
                    textAlign: 'center',
                    bgcolor: 'grey.50',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: industry.color,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 48, md: 60 },
                      height: { xs: 48, md: 60 },
                      borderRadius: '50%',
                      bgcolor: industry.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 700,
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                      }}
                    >
                      {industry.count}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      mb: 1,
                      fontSize: { xs: '1rem', md: '1.125rem' },
                    }}
                  >
                    {industry.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: { xs: '0.75rem', md: '0.875rem' },
                    }}
                  >
                    {industry.count} Project{industry.count > 1 ? 's' : ''}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Client Testimonials */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                mb: 2,
                fontWeight: 700,
                color: 'text.primary',
                fontSize: { xs: '1.8rem', md: '2.5rem' },
              }}
            >
              Client Success Stories
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                mb: { xs: 4, md: 6 },
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.125rem' },
                px: { xs: 2, md: 0 },
              }}
            >
              Hear what our clients say about their experience working with us
            </Typography>
          </motion.div>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {clients.map((client, index) => (
              <Grid item xs={12} md={6} lg={4} key={client.name}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'grey.200',
                      borderRadius: 3,
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                        borderColor: client.color,
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar
                          sx={{
                            bgcolor: client.color,
                            width: { xs: 48, md: 56 },
                            height: { xs: 48, md: 56 },
                            mr: 2,
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                            fontWeight: 700,
                          }}
                        >
                          {client.avatar}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontWeight: 600,
                              fontSize: { xs: '1.125rem', md: '1.25rem' },
                              mb: 0.5,
                            }}
                          >
                            {client.name}
                          </Typography>
                          <Chip
                            label={client.industry}
                            size="small"
                            sx={{
                              bgcolor: `${client.color}15`,
                              color: client.color,
                              fontWeight: 500,
                              fontSize: '0.75rem',
                            }}
                          />
                        </Box>
                      </Box>

                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600, 
                          mb: 1,
                          fontSize: { xs: '1rem', md: '1.125rem' },
                        }}
                      >
                        {client.project}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: 'text.secondary', 
                          mb: 3, 
                          lineHeight: 1.6,
                          fontSize: { xs: '0.875rem', md: '0.9rem' },
                        }}
                      >
                        {client.description}
                      </Typography>

                      <Box sx={{ mb: 2 }}>
                        <Rating value={client.rating} readOnly size="small" />
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          fontStyle: 'italic',
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          fontSize: { xs: '0.875rem', md: '0.9rem' },
                          position: 'relative',
                          pl: 2,
                          '&::before': {
                            content: '"',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            fontSize: '1.5rem',
                            color: client.color,
                            fontWeight: 700,
                          },
                        }}
                      >
                        {client.testimonial}"
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 6 } }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/contact"
              endIcon={<ArrowForward />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Start Your Project
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};