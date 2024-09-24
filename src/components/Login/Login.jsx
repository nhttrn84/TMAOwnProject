import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../features/auth/authSlice';
import { Logo, Envelope, Lock, EyeClosed, EyeOpened } from "../../assets";
import { Card, Typography, Box, FormControlLabel, Checkbox, TextField, Button, IconButton, InputAdornment, CircularProgress, Link } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset error messages
    setEmailError('');
    setPasswordError('');

    let valid = true;

    // Email validation
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    }

    // Password validation
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters, including one letter and one number.');
      valid = false;
    }

    // If both are valid, dispatch the login action
    if (valid) {
      dispatch(login({ email, password }));
    }
  };

  return (
    <Card sx={{ backgroundColor: "#232F43", p: '2rem', borderRadius: '2rem', maxWidth: '400px', width: '100%', m: 'auto' }}>
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <Logo style={{ height: '60px' }} />
      </Box>
      <Typography style={{ color: "#216CE3", fontSize: '24px', fontWeight: '600' }}>Login</Typography>
      <TextField
        fullWidth
        placeholder="Your email"
        label="Email"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!emailError}
        helperText={emailError}
        slotProps={{
          inputLabel: {
            style: { color: '#CCC' },
          },
          input: {
            style: { color: '#AAA' },
            startAdornment: (
              <InputAdornment position="start" sx={{ color: '#CCC' }}>
                <Envelope style={{ width: '24px' }} />
              </InputAdornment>
            ),  
          }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#AAA' },
            '&:hover fieldset': { borderColor: '#CCC' },
            '&.Mui-focused fieldset': { borderColor: '#AAA' }
          }
        }}
      />
      <TextField
        fullWidth
        placeholder="Your password"
        label="Password"
        variant="outlined"
        margin="normal"
        type={hidePassword ? 'password' : 'text'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!passwordError}
        helperText={passwordError}
        slotProps={{
          inputLabel: {
            style: { color: '#CCC' },
          },
          input: {
            style: { color: '#CCC' },
            startAdornment: (
              <InputAdornment position="start" sx={{ color: '#CCC' }}>
                <Lock style={{ width: '24px' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={{ color: '#CCC' }}>
                <IconButton onClick={() => setHidePassword(prev => !prev)}>
                  {hidePassword ? <EyeClosed style={{ width: '24px' }} /> 
                    : <EyeOpened style={{ width: '24px' }} />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#AAA' },
            '&:hover fieldset': { borderColor: '#CCC' },
            '&.Mui-focused fieldset': { borderColor: '#AAA' }
          }
        }}
      />
      {error && <Typography sx={{ color: 'red', textAlign: 'center', mb: '1rem' }}>{error}</Typography>}
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
        <FormControlLabel 
          control={<Checkbox style={{ color: '#CCC' }} />}
          label={<Typography style={{ color: '#CCC' }}>Remember me</Typography>}
        />
        <Button color="primary">
          <Typography style={{ color: "#216CE3" }} sx={{ textTransform: 'capitalize' }}>
            Forgot password
          </Typography>
        </Button>
      </Box>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ my: '1rem', backgroundColor: '#216CE3' }}
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} sx={{ color: '#FFF' }} /> : 'Log In'}
      </Button>
      <Typography variant="body2" align="center" sx={{ color: 'white' }}>
        Don&apos;t have an account yet?&ensp;
        <Link href="/register" color="primary" underline="hover">
          Sign Up
        </Link>
      </Typography>
    </Card>
  );
};

export default Login;