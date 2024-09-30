import { Box, Button, Card, Checkbox, CircularProgress, FormControlLabel, IconButton, InputAdornment, Link, TextField, Typography } from '@mui/material';
import { Envelope, EyeClosed, EyeOpened, Lock, Logo } from "../../assets";
import { useDispatch, useSelector } from "react-redux";

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { login } from '../../features/auth/authSlice';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { loading, error, isLoggedIn } = useSelector(state => state.auth);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^.{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters.');
      valid = false;
    }

    if (valid) {
      dispatch(login({ username: email, password }))
        .then((action) => {
          if (action.meta.requestStatus === 'fulfilled') { 
            navigate('/dashboard'); 
          }
        });
    }
  };

  return (
    <Card sx={{ backgroundColor: "#232F43", p: '2rem', borderRadius: '2rem', maxWidth: '308px', m: 'auto' }}>
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <Logo style={{ height: '60px' }} />
      </Box>
      <Typography style={{ color: "#216CE3", fontSize: '24px', fontWeight: '600' }}>{t('login.login')}</Typography>
      <TextField
        fullWidth
        placeholder={t('login.emailHolder')}
        label={t('login.email')}
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
        placeholder={t('login.passwordHolder')}
        label={t('login.password')}
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
          label={<Typography style={{ color: '#CCC' }}>{t('login.rememberMe')}</Typography>}
        />
        <Button color="primary">
          <Typography style={{ color: "#216CE3" }} sx={{ textTransform: 'capitalize' }}>
          {t('login.forgotPassword')}
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
        {loading ? <CircularProgress size={24} sx={{ color: '#FFF' }} /> : <>{t('login.login')}</>}
      </Button>
      <Typography variant="body2" align="center" sx={{ color: 'white' }}>
        {t('login.dontHaveAccount')}
        <Link href="/register" color="primary" underline="hover">
          {t('login.signUp')}
        </Link>
      </Typography>
      <LanguageSwitcher/>
    </Card>
  );
};

export default Login;
