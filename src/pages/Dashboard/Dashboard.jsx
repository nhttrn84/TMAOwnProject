import React from "react";
import { Logo } from "../../assets";
import { Card, useMediaQuery, useTheme, Container, Box, Typography } from "@mui/material";
import { Carousel } from "../../components";

const Dashboard = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container maxWidth={false} disableGutters
      sx={{
        backgroundColor: 'black',
        padding: '2rem',
        width: '100vw',
        maxWidth: '100%',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        maxWidth="1200px" 
        sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: '2rem' }}
      >
        <Box
          sx={{
            flex: '1', 
            maxWidth: '100%',
          }}
        >
            <Card sx={{ backgroundColor: "#232F43", p: '2rem', borderRadius: '2rem', maxWidth: '400px', width: '100%', m: 'auto' }}>
            <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                <Logo style={{ height: '60px' }} />
            </Box>
            <Typography style={{ color: "#216CE3", fontSize: '24px', fontWeight: '600' }}>Welcome</Typography>
            </Card>
        </Box>

        {matches && (
          <Box
            sx={{
              flex: '1',
              minWidth: '50vw',
            }}
          >
            <Carousel />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Dashboard;
