import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  LocationOn,
  Email,
  Phone,
  AccessTime,
  Send,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

const contactInfo = [
  {
    icon: <LocationOn />,
    title: 'Address',
    details: [
      'No. 90, Sri Velavan Complex,',
      'Vaiyapuri Nagar(West), Karur,',
      'TamilNadu, India - 639002'
    ],
    color: '#2563eb',
  },
  {
    icon: <Email />,
    title: 'Email',
    details: ['rajeshkumar.c@unitedhands.cc'],
    color: '#059669',
  },
  {
    icon: <Phone />,
    title: 'Phone',
    details: ['+91-7624919806'],
    color: '#7c3aed',
  },
  {
    icon: <AccessTime />,
    title: 'Working Hours',
    details: [
      'Monday - Friday:',
      '9:00 AM - 6:00 PM IST'
    ],
    color: '#dc2626',
  },
];

export const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    description: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        description: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.description;

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
              Contact Us
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
              Ready to start your next project? Get in touch with us today. 
              We'd love to hear about your ideas and discuss how we can help bring them to life.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Info Cards */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={info.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        bgcolor: info.color,
                        color: 'white',
                        borderRadius: '50%',
                        width: 64,
                        height: 64,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      {info.title}
                    </Typography>
                    {info.details.map((detail, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form and Map */}
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper elevation={0} sx={{ p: 4, bgcolor: 'grey.50', borderRadius: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}>
                  Send us a Message
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.7 }}>
                  Fill out the form below and we'll get back to you as soon as possible. 
                  We're here to help with any questions or project inquiries you may have.
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            bgcolor: 'white',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            bgcolor: 'white',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            bgcolor: 'white',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Project Description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        multiline
                        rows={4}
                        variant="outlined"
                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            bgcolor: 'white',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={!isFormValid || isSubmitting}
                        startIcon={<Send />}
                        sx={{
                          py: 1.5,
                          px: 4,
                          fontSize: '1.1rem',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Map and Additional Info */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}>
                  Visit Our Office
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.7 }}>
                  We're located in the heart of Karur, Tamil Nadu. Feel free to visit us during 
                  our working hours or schedule an appointment for a detailed discussion about your project.
                </Typography>

                {/* Map Placeholder */}
                <Paper
                  elevation={0}
                  sx={{
                    height: 300,
                    bgcolor: 'grey.100',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 4,
                    backgroundImage: 'url(https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: 'rgba(37, 99, 235, 0.9)',
                      color: 'white',
                      p: 3,
                      borderRadius: 2,
                      textAlign: 'center',
                    }}
                  >
                    <LocationOn sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Karur, Tamil Nadu
                    </Typography>
                    <Typography variant="body2">
                      India - 639002
                    </Typography>
                  </Box>
                </Paper>

                {/* Quick Contact */}
                <Paper elevation={0} sx={{ p: 3, bgcolor: 'primary.main', color: 'white', borderRadius: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Quick Contact
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
                    For urgent inquiries, call us directly:
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    +91-7624919806
                  </Typography>
                </Paper>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Thank you for your message! We'll get back to you within 24 hours.
        </Alert>
      </Snackbar>
    </Box>
  );
};