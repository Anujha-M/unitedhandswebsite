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
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex problems.',
    color: '#2563eb',
  },
  {
    icon: <Speed />,
    title: 'Efficiency',
    description: 'Delivering high-quality solutions with optimal performance and quick turnaround times.',
    color: '#059669',
  },
  {
    icon: <Security />,
    title: 'Security',
    description: 'Implementing robust security measures to protect your data and applications.',
    color: '#dc2626',
  },
  {
    icon: <Support />,
    title: 'Support',
    description: 'Providing comprehensive support and maintenance for long-term success.',
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

export const AboutUs = () => {
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
              }}
            >
              Transforming businesses through innovative software solutions since 2021. 
              We are passionate about creating technology that makes a difference.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Company Story */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}>
                Founded in 2021, Unitedhands Technologies emerged from a simple yet powerful vision: 
                to bridge the gap between innovative technology and business success. What started as 
                a small team of passionate developers has grown into a trusted partner for businesses 
                across various industries.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}>
                Our journey has been marked by continuous learning, adaptation, and a relentless 
                pursuit of excellence. We believe that great software is not just about code – 
                it's about understanding our clients' needs and delivering solutions that drive 
                real business value.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Today, we're proud to have delivered 20+ successful projects, built lasting 
                relationships with 10+ clients, and assembled a team of 25+ skilled professionals 
                who share our passion for innovation and quality.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
              >
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Team collaboration"
                  style={{
                    width: '100%',
                    height: 400,
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Values Section */}
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
              Our Values
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
              The principles that guide our work and define our culture
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
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
                            bgcolor: value.color,
                            width: 56,
                            height: 56,
                            mr: 2,
                          }}
                        >
                          {value.icon}
                        </Avatar>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          {value.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{ color: 'text.secondary', lineHeight: 1.7 }}
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
      <Container maxWidth="lg" sx={{ py: 8 }}>
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
            Meet Our Team
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
            The talented individuals behind our success
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
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
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Avatar
                      sx={{
                        bgcolor: member.color,
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 2,
                        fontSize: '2rem',
                        fontWeight: 700,
                      }}
                    >
                      {member.avatar}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: member.color, fontWeight: 500, mb: 2 }}
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', lineHeight: 1.6 }}
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
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            {/* Skills */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'text.primary' }}>
                  Our Expertise
                </Typography>
                <Box>
                  {skills.map((skill, index) => (
                    <Box key={skill.name} sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
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
                </Box>
              </motion.div>
            </Grid>

            {/* Timeline */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'text.primary' }}>
                  Our Journey
                </Typography>
                <Box>
                  {milestones.map((milestone, index) => (
                    <Box key={milestone.year} sx={{ display: 'flex', mb: 4 }}>
                      <Box
                        sx={{
                          bgcolor: 'primary.main',
                          color: 'white',
                          borderRadius: '50%',
                          width: 48,
                          height: 48,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          mr: 3,
                          flexShrink: 0,
                        }}
                      >
                        {milestone.year.slice(-2)}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {milestone.event}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {milestone.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {[
            { number: '25+', label: 'Technical Professionals', icon: <Group /> },
            { number: '10+', label: 'Happy Clients', icon: <Star /> },
            { number: '20+', label: 'Accomplished Projects', icon: <CheckCircle /> },
            { number: '4+', label: 'Years Experience', icon: <TrendingUp /> },
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={stat.label}>
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
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderRadius: 3,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ mb: 2 }}>{stat.icon}</Box>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};