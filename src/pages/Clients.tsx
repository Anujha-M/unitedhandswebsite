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
} from '@mui/material';
import { motion } from 'framer-motion';

const clients = [
  {
    name: 'TechCorp Solutions',
    industry: 'Technology',
    project: 'E-Commerce Platform',
    description: 'Complete e-commerce solution with mobile app and admin dashboard',
    testimonial: 'Exceptional work quality and timely delivery. The team understood our requirements perfectly.',
    rating: 5,
    avatar: 'T',
    color: '#2563eb',
  },
  {
    name: 'HealthCare Plus',
    industry: 'Healthcare',
    project: 'Patient Management System',
    description: 'Comprehensive healthcare management system with appointment scheduling',
    testimonial: 'Professional team with great attention to detail. Highly recommended for healthcare projects.',
    rating: 5,
    avatar: 'H',
    color: '#059669',
  },
  {
    name: 'FinanceFlow',
    industry: 'Finance',
    project: 'Financial Dashboard',
    description: 'Real-time financial analytics and reporting dashboard',
    testimonial: 'Outstanding technical expertise and excellent communication throughout the project.',
    rating: 5,
    avatar: 'F',
    color: '#7c3aed',
  },
  {
    name: 'EduTech Academy',
    industry: 'Education',
    project: 'Learning Management System',
    description: 'Online learning platform with video streaming and assessment tools',
    testimonial: 'Innovative solutions and user-friendly design. Students love the platform!',
    rating: 5,
    avatar: 'E',
    color: '#dc2626',
  },
  {
    name: 'RetailMax',
    industry: 'Retail',
    project: 'Inventory Management',
    description: 'Advanced inventory tracking and management system',
    testimonial: 'Streamlined our operations significantly. Great ROI on our investment.',
    rating: 5,
    avatar: 'R',
    color: '#ea580c',
  },
  {
    name: 'LogiTrack',
    industry: 'Logistics',
    project: 'Fleet Management App',
    description: 'Real-time fleet tracking and route optimization system',
    testimonial: 'Reduced our operational costs by 30%. Excellent project management.',
    rating: 5,
    avatar: 'L',
    color: '#0891b2',
  },
  {
    name: 'FoodieHub',
    industry: 'Food & Beverage',
    project: 'Restaurant Management',
    description: 'Complete restaurant management system with online ordering',
    testimonial: 'Boosted our online orders by 150%. Amazing user experience design.',
    rating: 5,
    avatar: 'F',
    color: '#65a30d',
  },
  {
    name: 'PropertyPro',
    industry: 'Real Estate',
    project: 'Property Portal',
    description: 'Real estate listing and management platform',
    testimonial: 'Modern design and powerful features. Our agents are very satisfied.',
    rating: 5,
    avatar: 'P',
    color: '#9333ea',
  },
  {
    name: 'MediaStream',
    industry: 'Entertainment',
    project: 'Video Streaming App',
    description: 'High-quality video streaming platform with social features',
    testimonial: 'Scalable architecture that handles thousands of concurrent users seamlessly.',
    rating: 5,
    avatar: 'M',
    color: '#be185d',
  },
  {
    name: 'AutoCare',
    industry: 'Automotive',
    project: 'Service Booking System',
    description: 'Automotive service booking and management platform',
    testimonial: 'Simplified our booking process and improved customer satisfaction significantly.',
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

export const Clients = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
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
                fontSize: { xs: '2.5rem', md: '3.5rem' },
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
              }}
            >
              Trusted by businesses across various industries to deliver exceptional 
              software solutions that drive growth and success
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                  10+
                </Typography>
                <Typography variant="h6">Happy Clients</Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  bgcolor: 'secondary.main',
                  color: 'white',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                  20+
                </Typography>
                <Typography variant="h6">Projects Delivered</Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  bgcolor: 'success.main',
                  color: 'white',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                  100%
                </Typography>
                <Typography variant="h6">Client Satisfaction</Typography>
              </Paper>
            </motion.div>
          </Grid>
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
            }}
          >
            Industries We Serve
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            We have experience working across diverse industries, understanding unique challenges and requirements
          </Typography>
        </motion.div>

        <Grid container spacing={3} sx={{ mb: 8 }}>
          {industries.map((industry, index) => (
            <Grid item xs={12} sm={6} md={4} key={industry.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    bgcolor: 'grey.50',
                    borderRadius: 3,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: industry.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 700 }}>
                      {industry.count}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {industry.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {industry.count} Project{industry.count > 1 ? 's' : ''}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Client Testimonials */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
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
              }}
            >
              Client Success Stories
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                mb: 6,
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Hear what our clients say about their experience working with us
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
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
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar
                          sx={{
                            bgcolor: client.color,
                            width: 56,
                            height: 56,
                            mr: 2,
                            fontSize: '1.5rem',
                            fontWeight: 700,
                          }}
                        >
                          {client.avatar}
                        </Avatar>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {client.name}
                          </Typography>
                          <Chip
                            label={client.industry}
                            size="small"
                            sx={{
                              bgcolor: `${client.color}15`,
                              color: client.color,
                              fontWeight: 500,
                            }}
                          />
                        </Box>
                      </Box>

                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {client.project}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}
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
                        }}
                      >
                        "{client.testimonial}"
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};