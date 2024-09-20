import { useState } from "react";
import { Logo, Envelope, Lock, EyeClosed, EyeOpened } from "../../assets";
import { Card, Typography, Box, TextField, Button, IconButton, Checkbox, FormControlLabel, InputAdornment  } from '@mui/material';

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);

    const togglePasswordVisibility = () => {
        setHidePassword((prev) => !prev);
    };
    
    return (
        <Card style={{backgroundColor: "#232F43", padding: '2rem', borderRadius: '2rem'}}>
            <Box 
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding={'2rem'}
            >
                <Logo style={{height: '60px'}}/>
            </Box>
            <Typography style={{color: "#216CE3", fontSize: '24px', fontFamily: 'Roboto', fontWeight: '600'}}>
                Login
            </Typography>
            <TextField
                fullWidth
                label="Email"
                defaultValue={"Your email"}
                variant="outlined"
                margin="normal"
                slotProps={{
                    input: {
                        style: { 
                            color: '#AAA',
                        },
                        startAdornment: 
                            <InputAdornment position="start" style={{ color: '#CCC' }}>
                                <Envelope style={{ width: '24px', height: '24px'}}/>
                            </InputAdornment>,
                    },
                    inputLabel: {
                        style: { 
                            color: '#CCC'
                        },
                    }
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#AAA',
                      },
                      '&:hover fieldset': {
                        borderColor: '#CCC',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#AAA',
                      },
                    },
                }}
            />
            <TextField
                fullWidth
                label="Password"
                defaultValue={"Password"}
                variant="outlined"
                margin="normal"
                type={hidePassword ? 'password' : 'text'}
                slotProps={{
                    input: {
                        style: { 
                            color: '#CCC',
                        },
                        startAdornment: 
                            <InputAdornment position="start" style={{ color: '#CCC' }}>
                                <Lock style={{ width: '24px', height: '24px'}}/>
                            </InputAdornment>,
                        endAdornment: 
                            <InputAdornment position="end" style={{ color: '#CCC' }}>
                                <IconButton onClick={togglePasswordVisibility}>
                                    {hidePassword ? (
                                        <EyeClosed style={{ width: '24px', height: '24px' }} />
                                    ) : (
                                        <EyeOpened style={{ width: '24px', height: '24px' }} />
                                    )}
                                </IconButton>
                            </InputAdornment>,
                    },
                    inputLabel: {
                        style: { 
                            color: '#CCC'
                        },
                    }
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#AAA',
                      },
                      '&:hover fieldset': {
                        borderColor: '#CCC',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#AAA',
                      },
                    },
                }}
            />
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center" 
                width="100%"
            >
                <FormControlLabel
                    control={<Checkbox style={{ color: '#CCC' }} />}
                    label={
                        <Typography style={{ color: '#CCC' }}>
                            Remember me
                        </Typography>
                    }
                />
                <Button color="primary">
                    <Typography
                        style={{ color: "#216CE3" }}
                        sx={{ textTransform: 'capitalize' }}
                    >
                        Forgot password
                    </Typography>
                </Button>
            </Box>
           
            <Button fullWidth variant="contained" color="primary" style={{ margin: '1rem 0' }}>
                <Typography 
                    style={{ color: "#CCC" }} 
                    sx={{ textTransform: 'capitalize' }}
                >
                    Log In
                </Typography>
            </Button>
            <Typography variant="body2" align="center" color="white">
                Don&apos;t have an account yet? 
                <Button color="primary">
                    <Typography 
                        style={{ color: "#216CE3" }} 
                        sx={{ textTransform: 'capitalize' }}
                    >
                        Sign Up
                    </Typography>
                </Button>
            </Typography>
        </Card>
    )
}

export default Login;