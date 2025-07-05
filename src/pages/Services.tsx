import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Chip,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  PhoneIphone,
  Android,
  Web,
  Cloud,
  Build,
  Group,
  Code,
  Extension,
  CheckCircle,
  ArrowForward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <PhoneIphone />,
    title: 'iOS App Development',
    description: 'Native iOS applications built with Swift and cutting-edge Apple technologies for exceptional user experiences',
    features: [
      'Native iOS Development',
      'SwiftUI & UIKit',
      'App Store Optimization',
      'iOS Design Guidelines',
      'Performance Optimization',
    ],
    technologies: ['Swift', 'Xcode', 'Core Data', 'CloudKit', 'ARKit'],
    color: '#007AFF',
  },
  {
    icon: <Android />,
    title: 'Android App Development',
    description: 'High-performance Android applications using modern development practices and Material Design principles',
    features: [
      'Native Android Development',
      'Kotlin & Java',
      'Material Design',
      'Google Play Store',
      'Cross-device Compatibility',
    ],
    technologies: ['Kotlin', 'Android Studio', 'Jetpack Compose', 'Firebase', 'Room'],
    color: '#3DDC84',
  },
  {
    icon: <Web />,
    title: 'Web Development',
    description: 'Modern, responsive web applications with exceptional user experiences and optimal performance',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'SEO Optimization',
      'Performance Optimization',
      'Cross-browser Compatibility',
    ],
    technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'TypeScript'],
    color: '#61DAFB',
  },
  {
    icon: <Cloud />,
    title: 'Cloud App Development',
    description: 'Scalable cloud-native applications with modern architecture patterns and enterprise-grade security',
    features: [
      'Microservices Architecture',
      'Serverless Computing',
      'Auto-scaling Solutions',
      'Cloud Security',
      'DevOps Integration',
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    color: '#FF9900',
  },
  {
    icon: <Build />,
    title: 'Maintenance and Support',
    description: 'Comprehensive maintenance and technical support for your applications with 24/7 monitoring',
    features: [
      '24/7 Technical Support',
      'Bug Fixes & Updates',
      'Performance Monitoring',
      'Security Updates',
      'Feature Enhancements',
    ],
    technologies: ['Monitoring Tools', 'CI/CD', 'Testing Frameworks', 'Analytics', 'Security Tools'],
    color: '#FF6B6B',
  },
  {
    icon: <Group />,
    title: 'IT Staffing Solutions',
    description: 'Skilled IT professionals to augment your development team with flexible engagement models',
    features: [
      'Dedicated Developers',
      'Team Augmentation',
      'Project-based Hiring',
      'Flexible Engagement',
      'Quality Assurance',
    ],
    technologies: ['Full-stack Developers', 'Mobile Developers', 'DevOps Engineers', 'QA Engineers', 'UI/UX Designers'],
    color: '#9C27B0',
  },
  {
    icon: <Code />,
    title: 'Core Technologies',
    description: 'Expertise in cutting-edge technologies and frameworks for building robust software solutions',
    features: [
      'Modern Frameworks',
      'Database Design',
      'API Development',
      'System Architecture',
      'Code Quality',
    ],
    technologies: ['React', 'Node.js', 'Python', 'Java', 'PostgreSQL'],
    color: '#4CAF50',
  },
  {
    icon: <Extension />,
    title: 'Other Services',
    description: 'Additional services to support your digital transformation journey and business growth',
    features: [
      'Digital Consulting',
      'UI/UX Design',
      'Quality Assurance',
      'Project Management',
      'Technical Training',
    ],
    technologies: ['Figma', 'Adobe XD', 'Selenium', 'Jest', 'Agile Methodologies'],
    color: '#FF5722',
  },
];

const whyChooseUs = [
  {
    title: 'Expert Team',
    description: '25+ skilled professionals with deep technical expertise and industry experience',
    icon: '👥',
    color: '#2563eb',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes to ensure bug-free deliverables',
    icon: '✅',
    color: '#059669',
  },
  {
    title: 'Timely Delivery',
    description: 'On-time project delivery with agile methodologies and transparent communication',
    icon: '⏰',
    color: '#7c3aed',
  },
  {
    title: 'Ongoing Support',
    description: '24/7 technical support and maintenance services for long-term success',
    icon: '🛠️',
    color: '#dc2626',
  },
];

export const Services = () => {
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
              Our Services
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
              Comprehensive software development services to transform your business 
              with cutting-edge technology solutions
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} lg={6} key={service.title}>
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
                      '& .service-header': {
                        bgcolor: `${service.color}08`,
                      },
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box
                    className="service-header"
                    sx={{
                      p: { xs: 3, md: 4 },
                      pb: 0,
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          bgcolor: service.color,
                          color: 'white',
                          p: 1.5,
                          borderRadius: 2,
                          mr: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 600,
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{ 
                        color: 'text.secondary', 
                        mb: 3, 
                        lineHeight: 1.7,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>

                  <CardContent sx={{ p: { xs: 3, md: 4 }, pt: 0 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      Key Features
                    </Typography>
                    <List dense sx={{ mb: 3 }}>
                      {service.features.map((feature) => (
                        <ListItem key={feature} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle sx={{ fontSize: 20, color: service.color }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            sx={{ 
                              '& .MuiListItemText-primary': { 
                                fontSize: { xs: '0.875rem', md: '0.9rem' },
                                fontWeight: 500,
                              } 
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      Technologies
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {service.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: `${service.color}15`,
                            color: service.color,
                            fontWeight: 500,
                            fontSize: '0.75rem',
                            '&:hover': {
                              bgcolor: `${service.color}25`,
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
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
              Why Choose Us?
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
              We deliver exceptional results through our proven expertise and commitment to excellence
            </Typography>
          </motion.div>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {whyChooseUs.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
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
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'grey.200',
                      borderRadius: 3,
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                        borderColor: item.color,
                        '& .why-icon': {
                          transform: 'scale(1.1)',
                        },
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Typography 
                      variant="h2" 
                      className="why-icon"
                      sx={{ 
                        mb: 2,
                        fontSize: { xs: '2.5rem', md: '3rem' },
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      {item.icon}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        mb: 2,
                        color: item.color,
                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        fontSize: { xs: '0.875rem', md: '0.9rem' },
                      }}
                    >
                      {item.description}
                    </Typography>
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
              Get Started Today
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};