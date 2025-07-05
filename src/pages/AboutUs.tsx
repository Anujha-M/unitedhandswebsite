import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Lightbulb,
  Speed,
  Security,
  Support,
  CheckCircle,
  TrendingUp,
  Group,
  Star,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const values = [
  {
    icon: <Lightbulb />,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex business problems with modern approaches.',
    color: '#2563eb',
  },
  {
    icon: <Speed />,
    title: 'Efficiency',
    description: 'Delivering high-quality solutions with optimal performance and quick turnaround times without compromising quality.',
    color: '#059669',
  },
  {
    icon: <Security />,
    title: 'Security',
    description: 'Implementing robust security measures and best practices to protect your data and applications from threats.',
    color: '#dc2626',
  },
  {
    icon: <Support />,
    title: 'Support',
    description: 'Providing comprehensive support and maintenance services for long-term success and continuous improvement.',
    color: '#7c3aed',
  },
];

const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    description: 'Visionary leader with 10+ years of experience in software development and business strategy.',
    avatar: 'R',
    color: '#2563eb',
  },
  {
    name: 'Priya Sharma',
    role: 'CTO',
    description: 'Technical expert specializing in cloud architecture and modern development practices.',
    avatar: 'P',
    color: '#059669',
  },
  {
    name: 'Amit Patel',
    role: 'Lead Developer',
    description: 'Full-stack developer with expertise in React, Node.js, and mobile app development.',
    avatar: 'A',
    color: '#7c3aed',
  },
  {
    name: 'Sneha Reddy',
    role: 'UI/UX Designer',
    description: 'Creative designer focused on creating intuitive and engaging user experiences.',
    avatar: 'S',
    color: '#dc2626',
  },
];

const skills = [
  { name: 'Mobile App Development', level: 95 },
  { name: 'Web Development', level: 90 },
  { name: 'Cloud Solutions', level: 85 },
  { name: 'UI/UX Design', level: 88 },
  { name: 'DevOps & Deployment', level: 82 },
  { name: 'Quality Assurance', level: 92 },
];

const milestones = [
  { year: '2021', event: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
  { year: '2022', event: 'First Major Client', description: 'Delivered our first enterprise-level solution' },
  { year: '2023', event: 'Team Expansion', description: 'Grew to 15+ skilled professionals' },
  { year: '2024', event: '20+ Projects', description: 'Successfully completed 20+ projects across various industries' },
  { year: '2025', event: 'Global Reach', description: 'Expanding services to international markets' },
];

const stats = [
  { number: '25+', label: 'Technical Professionals', icon: <Group />, color: '#2563eb' },
  { number: '10+', label: 'Happy Clients', icon: <Star />, color: '#059669' },
  { number: '20+', label: 'Accomplished Projects', icon: <CheckCircle />, color: '#7c3aed' },
  { number: '4+', label: 'Years Experience', icon: <TrendingUp />, color: '#dc2626' },
];

export const AboutUs = () => {
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
              About Unitedhands Technologies
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
              Transforming businesses through innovative software solutions since 2021. 
              We are passionate about creating technology that makes a difference.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Company Story */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 3, 
                  color: 'text.primary',
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                }}
              >
                Our Story
              </Typography>
              <Stack spacing={3}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.8, 
                    color: 'text.secondary',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  Founded in 2021, Unitedhands Technologies emerged from a simple yet powerful vision: 
                  to bridge the gap between innovative technology and business success. What started as 
                  a small team of passionate developers has grown into a trusted partner for businesses 
                  across various industries.
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.8, 
                    color: 'text.secondary',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  Our journey has been marked by continuous learning, adaptation, and a relentless 
                  pursuit of excellence. We believe that great software is not just about code – 
                  it's about understanding our clients' needs and delivering solutions that drive 
                  real business value.
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.8, 
                    color: 'text.secondary',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  Today, we're proud to have delivered 20+ successful projects, built lasting 
                  relationships with 10+ clients, and assembled a team of 25+ skilled professionals 
                  who share our passion for innovation and quality.
                </Typography>
              </Stack>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Team collaboration"
                  style={{
                    width: '100%',
                    height: isMobile ? 250 : 400,
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Values Section */}
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
              Our Values
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
              The principles that guide our work and define our culture
            </Typography>
          </motion.div>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {values.map((value, index) => (
              <Grid item xs={12} md={6} key={value.title}>
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
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                        borderColor: value.color,
                        '& .value-icon': {
                          transform: 'scale(1.1)',
                        },
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar
                          className="value-icon"
                          sx={{
                            bgcolor: value.color,
                            width: { xs: 48, md: 56 },
                            height: { xs: 48, md: 56 },
                            mr: 2,
                            transition: 'transform 0.3s ease',
                          }}
                        >
                          {value.icon}
                        </Avatar>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            fontWeight: 600,
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                          }}
                        >
                          {value.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{ 
                          color: 'text.secondary', 
                          lineHeight: 1.7,
                          fontSize: { xs: '0.9rem', md: '1rem' },
                        }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
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
            Meet Our Team
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
            The talented individuals behind our success
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={member.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: 3,
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                      borderColor: member.color,
                      '& .team-avatar': {
                        transform: 'scale(1.1)',
                      },
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Avatar
                      className="team-avatar"
                      sx={{
                        bgcolor: member.color,
                        width: { xs: 64, md: 80 },
                        height: { xs: 64, md: 80 },
                        mx: 'auto',
                        mb: 2,
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 700,
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      {member.avatar}
                    </Avatar>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        mb: 1,
                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ 
                        color: member.color, 
                        fontWeight: 500, 
                        mb: 2,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: 'text.secondary', 
                        lineHeight: 1.6,
                        fontSize: { xs: '0.875rem', md: '0.9rem' },
                      }}
                    >
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Skills & Timeline */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 8 }}>
            {/* Skills */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 4, 
                    color: 'text.primary',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  Our Expertise
                </Typography>
                <Stack spacing={3}>
                  {skills.map((skill, index) => (
                    <Box key={skill.name}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            fontWeight: 500,
                            fontSize: { xs: '0.9rem', md: '1rem' },
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'text.secondary',
                            fontSize: { xs: '0.875rem', md: '0.9rem' },
                          }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          bgcolor: 'grey.200',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            bgcolor: 'primary.main',
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Timeline */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 4, 
                    color: 'text.primary',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  Our Journey
                </Typography>
                <Stack spacing={4}>
                  {milestones.map((milestone, index) => (
                    <Box key={milestone.year} sx={{ display: 'flex' }}>
                      <Box
                        sx={{
                          bgcolor: 'primary.main',
                          color: 'white',
                          borderRadius: '50%',
                          width: { xs: 40, md: 48 },
                          height: { xs: 40, md: 48 },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          mr: 3,
                          flexShrink: 0,
                          fontSize: { xs: '0.875rem', md: '1rem' },
                        }}
                      >
                        {milestone.year.slice(-2)}
                      </Box>
                      <Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 600, 
                            mb: 1,
                            fontSize: { xs: '1.125rem', md: '1.25rem' },
                          }}
                        >
                          {milestone.event}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'text.secondary',
                            fontSize: { xs: '0.875rem', md: '0.9rem' },
                          }}
                        >
                          {milestone.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
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
                    p: { xs: 3, md: 4 },
                    textAlign: 'center',
                    bgcolor: stat.color,
                    color: 'white',
                    borderRadius: 3,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 8px 25px ${stat.color}30`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ mb: 2 }}>{stat.icon}</Box>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 700, 
                      mb: 1,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
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
    </Box>
  );
};