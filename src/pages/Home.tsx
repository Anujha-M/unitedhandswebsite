import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Paper,
} from '@mui/material';
import {
  Code,
  PhoneIphone,
  Web,
  Cloud,
  Support,
  Group,
  TrendingUp,
  CheckCircle,
  Star,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <PhoneIphone />,
    title: 'Mobile App Development',
    description: 'Native iOS and Android applications with cutting-edge technology',
    color: '#2563eb',
  },
  {
    icon: <Web />,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with latest frameworks',
    color: '#7c3aed',
  },
  {
    icon: <Cloud />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud applications and infrastructure management',
    color: '#059669',
  },
  {
    icon: <Support />,
    title: 'IT Support',
    description: 'Comprehensive maintenance and technical support services',
    color: '#dc2626',
  },
];

const stats = [
  { number: '25+', label: 'Technical Professionals', icon: <Group /> },
  { number: '10+', label: 'Happy Clients', icon: <Star /> },
  { number: '20+', label: 'Accomplished Projects', icon: <CheckCircle /> },
  { number: '4+', label: 'Years Experience', icon: <TrendingUp /> },
];

const projects = [
  { name: 'E-Commerce Platform', tech: 'React, Node.js', status: 'Completed' },
  { name: 'Healthcare Management System', tech: 'Flutter, Firebase', status: 'Completed' },
  { name: 'Financial Dashboard', tech: 'Vue.js, Python', status: 'Completed' },
  { name: 'Logistics Tracking App', tech: 'React Native, AWS', status: 'Completed' },
  { name: 'Educational Platform', tech: 'Angular, .NET', status: 'Completed' },
  { name: 'Real Estate Portal', tech: 'Next.js, MongoDB', status: 'Completed' },
  { name: 'Restaurant Management', tech: 'React, Express', status: 'Completed' },
  { name: 'Inventory System', tech: 'Flutter, PostgreSQL', status: 'Completed' },
  { name: 'Social Media App', tech: 'React Native, GraphQL', status: 'Completed' },
  { name: 'CRM Solution', tech: 'Angular, Spring Boot', status: 'Completed' },
  { name: 'Booking Platform', tech: 'Vue.js, Laravel', status: 'Completed' },
  { name: 'Analytics Dashboard', tech: 'React, Python', status: 'Completed' },
  { name: 'IoT Monitoring System', tech: 'React, Node.js', status: 'Completed' },
  { name: 'Content Management', tech: 'Next.js, Strapi', status: 'Completed' },
  { name: 'Video Streaming App', tech: 'Flutter, AWS', status: 'Completed' },
  { name: 'Task Management Tool', tech: 'React, Express', status: 'Completed' },
  { name: 'Payment Gateway', tech: 'Node.js, Stripe', status: 'Completed' },
  { name: 'HR Management System', tech: 'Angular, .NET', status: 'Completed' },
  { name: 'Delivery Tracking App', tech: 'React Native, Firebase', status: 'Completed' },
  { name: 'Portfolio Website', tech: 'Next.js, Tailwind', status: 'Completed' },
];

export const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 3,
                    lineHeight: 1.2,
                  }}
                >
                  Transform Your Ideas Into
                  <Box component="span" sx={{ color: '#60a5fa', display: 'block' }}>
                    Digital Reality
                  </Box>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  Leading software development company delivering innovative solutions 
                  since 2021. We specialize in mobile apps, web development, and cloud solutions.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        bgcolor: 'grey.100',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'white',
                      },
                    }}
                  >
                    View Our Work
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 400,
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Software Development"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 16,
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={stat.label}>
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
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 56,
                      height: 56,
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                  <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Services Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 2,
                fontWeight: 700,
                color: 'text.primary',
              }}
            >
              Our Services
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
              We offer comprehensive software development services to help your business thrive in the digital world
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                      },
                      transition: 'all 0.3s ease',
                      border: '1px solid',
                      borderColor: 'grey.200',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Avatar
                        sx={{
                          bgcolor: service.color,
                          width: 64,
                          height: 64,
                          mb: 3,
                        }}
                      >
                        {service.icon}
                      </Avatar>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            Our Projects
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
            Showcasing our expertise through successful project deliveries across various industries
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      {project.tech}
                    </Typography>
                    <Chip
                      label={project.status}
                      color="success"
                      size="small"
                      sx={{ fontWeight: 500 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
              Ready to Start Your Project?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Let's discuss how we can help transform your ideas into reality
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  bgcolor: 'grey.100',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Contact Us Today
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};