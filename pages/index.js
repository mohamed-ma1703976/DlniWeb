import * as React from 'react';
import Head from 'next/head';
import { Button, Container, CssBaseline, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const StyledBackground = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: linear-gradient(to bottom, ${props => props.bgColor}, #007070);
`;

const StyledLogoContainer = styled(Box)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const AppLogo = styled('img')`
  width: 200px;
  height: auto;
`;

const StyledButton = styled(Button)`
  background-color: #ff3300;
  color: white;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;

  &:hover {
    background-color: #ff5c33;
  }
`;

export default function Home() {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['#003333', '#FFC300', '#7CFFCB', '#FF5733'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [colorIndex]);

  return (
    <>
      <Head>
        <title>Dlni App</title>
        <meta name="description" content="Download the Doha Festival City Mall App" />
        <link rel="icon" href="https://i.ibb.co/RBkKbJV/LogoD.png" />
      </Head>

      <CssBaseline />

      <StyledBackground bgColor={colors[colorIndex]}>
        {/* Your liquid animation goes here */}
      </StyledBackground>

      <StyledLogoContainer>
        <AppLogo src="https://i.ibb.co/RBkKbJV/LogoD.png" alt="Doha Festival City Mall App Logo" />
      </StyledLogoContainer>

      <Container
        maxWidth="md"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', letterSpacing: '2px' }}>
          Welcome to Dlni App
        </Typography>

        <Typography variant="h5" component="p" gutterBottom sx={{ fontStyle: 'italic', textShadow: '2px 2px black' }}>
          Explore Doha Festival City mall, find exclusive deals, and enjoy your shopping experience!
        </Typography>

        <StyledButton
          variant="contained"
          href="/app-release (1).apk"
          download
          startIcon={<FontAwesomeIcon icon={faDownload} />}
          sx={{ mt: 4 }}
        >
          Download App (APK)
        </StyledButton>
      </Container>
    </>
  );
}
