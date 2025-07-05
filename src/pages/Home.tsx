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
  Stack,
  useTheme,
  useMediaQuery,
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
  ArrowForward,
  Launch,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <PhoneIphone />,
    title: 'Mobile App Development',
    description: 'Native iOS and Android applications with cutting-edge technology and seamless user experiences',
    color: '#2563eb',
    features: ['iOS Development', 'Android Development', 'Cross-platform'],
  },
  {
    icon: <Web />,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with latest frameworks and best practices',
    color: '#7c3aed',
    features: ['React/Vue/Angular', 'Responsive Design', 'PWA'],
  },
  {
    icon: <Cloud />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud applications and infrastructure management for modern businesses',
    color: '#059669',
    features: ['AWS/Azure/GCP', 'Microservices', 'DevOps'],
  },
  {
    icon: <Support />,
    title: 'IT Support',
    description: 'Comprehensive maintenance and technical support services for your applications',
    color: '#dc2626',
    features: ['24/7 Support', 'Maintenance', 'Updates'],
  },
];

const stats = [
  { number: '25+', label: 'Technical Professionals', icon: <Group />, color: '#2563eb' },
  { number: '10+', label: 'Happy Clients', icon: <Star />, color: '#059669' },
  { number: '20+', label: 'Accomplished Projects', icon: <CheckCircle />, color: '#7c3aed' },
  { number: '4+', label: 'Years Experience', icon: <TrendingUp />, color: '#dc2626' },
];

const projects = [
  { name: 'E-Commerce Platform', tech: 'React, Node.js', status: 'Completed', category: 'Web' },
  { name: 'Healthcare Management System', tech: 'Flutter, Firebase', status: 'Completed', category: 'Mobile' },
  { name: 'Financial Dashboard', tech: 'Vue.js, Python', status: 'Completed', category: 'Web' },
  { name: 'Logistics Tracking App', tech: 'React Native, AWS', status: 'Completed', category: 'Mobile' },
  { name: 'Educational Platform', tech: 'Angular, .NET', status: 'Completed', category: 'Web' },
  { name: 'Real Estate Portal', tech: 'Next.js, MongoDB', status: 'Completed', category: 'Web' },
  { name: 'Restaurant Management', tech: 'React, Express', status: 'Completed', category: 'Web' },
  { name: 'Inventory System', tech: 'Flutter, PostgreSQL', status: 'Completed', category: 'Mobile' },
  { name: 'Social Media App', tech: 'React Native, GraphQL', status: 'Completed', category: 'Mobile' },
  { name: 'CRM Solution', tech: 'Angular, Spring Boot', status: 'Completed', category: 'Web' },
  { name: 'Booking Platform', tech: 'Vue.js, Laravel', status: 'Completed', category: 'Web' },
  { name: 'Analytics Dashboard', tech: 'React, Python', status: 'Completed', category: 'Web' },
  { name: 'IoT Monitoring System', tech: 'React, Node.js', status: 'Completed', category: 'Web' },
  { name: 'Content Management', tech: 'Next.js, Strapi', status: 'Completed', category: 'Web' },
  { name: 'Video Streaming App', tech: 'Flutter, AWS', status: 'Completed', category: 'Mobile' },
  { name: 'Task Management Tool', tech: 'React, Express', status: 'Completed', category: 'Web' },
  { name: 'Payment Gateway', tech: 'Node.js, Stripe', status: 'Completed', category: 'Web' },
  { name: 'HR Management System', tech: 'Angular, .NET', status: 'Completed', category: 'Web' },
  { name: 'Delivery Tracking App', tech: 'React Native, Firebase', status: 'Completed', category: 'Mobile' },
  { name: 'Portfolio Website', tech: 'Next.js, Tailwind', status: 'Completed', category: 'Web' },
];

export const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: { xs: 6, md: 10, lg: 12 },
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: '70vh', md: '80vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                    fontWeight: 700,
                    mb: { xs: 2, md: 3 },
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
                    mb: { xs: 3, md: 4 },
                    opacity: 0.9,
                    fontWeight: 400,
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}
                >
                  Leading software development company delivering innovative solutions 
                  since 2021. We specialize in mobile apps, web development, and cloud solutions.
                </Typography>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2} 
                  sx={{ alignItems: { xs: 'stretch', sm: 'center' } }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/contact"
                    endIcon={<ArrowForward />}
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      px: { xs: 3, md: 4 },
                      py: { xs: 1.5, md: 2 },
                      fontSize: { xs: '1rem', md: '1.1rem' },
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
                    component={Link}
                    to="/clients"
                    endIcon={<Launch />}
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: { xs: 3, md: 4 },
                      py: { xs: 1.5, md: 2 },
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'white',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    View Our Work
                  </Button>
                </Stack>
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
                    height: { xs: 250, sm: 350, md: 400 },
                    mt: { xs: 2, md: 0 },
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={stat.label}>
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
                      borderColor: stat.color,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: stat.color,
                      width: { xs: 48, md: 56 },
                      height: { xs: 48, md: 56 },
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 700, 
                      color: stat.color, 
                      mb: 1,
                      fontSize: { xs: '1.8rem', md: '2.5rem' },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.secondary', 
                      fontWeight: 500,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Services Section */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 6, md: 8 } }}>
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
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Our Services
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
              We offer comprehensive software development services to help your business thrive in the digital world
            </Typography>
          </motion.div>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} lg={6} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
                        borderColor: service.color,
                        '& .service-icon': {
                          transform: 'scale(1.1)',
                        },
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                        <Avatar
                          className="service-icon"
                          sx={{
                            bgcolor: service.color,
                            width: { xs: 56, md: 64 },
                            height: { xs: 56, md: 64 },
                            mr: 2,
                            transition: 'transform 0.3s ease',
                          }}
                        >
                          {service.icon}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              fontWeight: 600, 
                              mb: 1,
                              fontSize: { xs: '1.25rem', md: '1.5rem' },
                            }}
                          >
                            {service.title}
                          </Typography>
                          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {service.features.map((feature) => (
                              <Chip
                                key={feature}
                                label={feature}
                                size="small"
                                sx={{
                                  bgcolor: `${service.color}15`,
                                  color: service.color,
                                  fontWeight: 500,
                                  fontSize: '0.75rem',
                                }}
                              />
                            ))}
                          </Stack>
                        </Box>
                      </Box>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'text.secondary', 
                          lineHeight: 1.7,
                          fontSize: { xs: '0.9rem', md: '1rem' },
                        }}
                      >
                        {service.description}
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
              to="/services"
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
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Projects Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
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
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Our Projects
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
            Showcasing our expertise through successful project deliveries across various industries
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {projects.slice(0, isMobile ? 6 : isTablet ? 9 : 12).map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.name}>
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
                    borderRadius: 2,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: 'primary.main',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600, 
                          flex: 1,
                          fontSize: { xs: '1rem', md: '1.125rem' },
                          lineHeight: 1.3,
                        }}
                      >
                        {project.name}
                      </Typography>
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          bgcolor: project.category === 'Mobile' ? '#e3f2fd' : '#f3e5f5',
                          color: project.category === 'Mobile' ? '#1976d2' : '#7b1fa2',
                          fontWeight: 500,
                          ml: 1,
                        }}
                      />
                    </Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary', 
                        mb: 2,
                        fontSize: { xs: '0.875rem', md: '0.9rem' },
                      }}
                    >
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

        {projects.length > (isMobile ? 6 : isTablet ? 9 : 12) && (
          <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 6 } }}>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/clients"
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
              View All Projects
            </Button>
          </Box>
        )}
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
              }}
            >
              Ready to Start Your Project?
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 4, 
                opacity: 0.9,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                px: { xs: 2, md: 0 },
              }}
            >
              Let's discuss how we can help transform your ideas into reality
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/contact"
              endIcon={<ArrowForward />}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: { xs: 3, md: 4 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: '1rem', md: '1.1rem' },
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