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
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <PhoneIphone />,
    title: 'iOS App Development',
    description: 'Native iOS applications built with Swift and cutting-edge Apple technologies',
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
    description: 'High-performance Android applications using modern development practices',
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
    description: 'Modern, responsive web applications with exceptional user experiences',
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
    description: 'Scalable cloud-native applications with modern architecture patterns',
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
    description: 'Comprehensive maintenance and technical support for your applications',
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
    description: 'Skilled IT professionals to augment your development team',
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
    description: 'Expertise in cutting-edge technologies and frameworks',
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
    description: 'Additional services to support your digital transformation journey',
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

export const Services = () => {
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
              }}
            >
              Comprehensive software development services to transform your business 
              with cutting-edge technology solutions
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
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
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          bgcolor: service.color,
                          color: 'white',
                          p: 1.5,
                          borderRadius: 2,
                          mr: 2,
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        {service.title}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}
                    >
                      {service.description}
                    </Typography>

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
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      Technologies
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {service.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: `${service.color}15`,
                            color: service.color,
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
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
              Why Choose Us?
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
              We deliver exceptional results through our proven expertise and commitment to excellence
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {[
              {
                title: 'Expert Team',
                description: '25+ skilled professionals with deep technical expertise',
                icon: '👥',
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous testing and quality control processes',
                icon: '✅',
              },
              {
                title: 'Timely Delivery',
                description: 'On-time project delivery with agile methodologies',
                icon: '⏰',
              },
              {
                title: 'Ongoing Support',
                description: '24/7 technical support and maintenance services',
                icon: '🛠️',
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      height: '100%',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Typography variant="h2" sx={{ mb: 2 }}>
                      {item.icon}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};