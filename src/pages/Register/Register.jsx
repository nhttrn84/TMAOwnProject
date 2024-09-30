import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { Carousel, Register } from "../../components";

import React from "react";

const RegisterPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('tablet'));

  return (
    <Container maxWidth={false} disableGutters
      sx={{
        backgroundColor: '#1C2636',
        width: '100vw',
        maxWidth: '100%',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
    {matches ? (
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ flexDirection: 'row', gap: '2rem', width: '100%', height: '100vh' }}
      >
        <Box
          sx={{
            flexBasis: '42%',
            flexGrow: 1
          }}
        >
          <Register style={{
            maxWidth: '460px'
          }}/>
        </Box>
        <Box
          sx={{
            flexBasis: '58%',
            flexGrow: 1,
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxHeight: '100vh',
            }}
          >
            <Carousel />
          </Box>
        </Box>
      </Box>
    ) : (
      <Register/>
    )}
    </Container>
  );
};

export default RegisterPage;
