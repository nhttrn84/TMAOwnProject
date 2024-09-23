import React from "react";
import { useMediaQuery, useTheme, Container, Box } from "@mui/material";
import { Register, Carousel } from "../../components";

const RegisterPage = () => {
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
          <Register />
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

export default RegisterPage;
