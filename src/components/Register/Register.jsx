import { Box, Button, Card, IconButton, InputAdornment, Link, TextField, Typography } from '@mui/material';
import { Envelope, EyeClosed, EyeOpened, Lock, Logo, Phone } from "../../assets";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { register } from '../../features/auth/authSlice';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, error, registered } = useSelector((state) => state.auth);

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: '', phone: ''
  });

  const toggleVisibility = (setVisibility) => setVisibility((prev) => !prev);;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Validation patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;  // Minimum 8 characters, at least one letter and one number
  const phoneRegex = /^\d{10,15}$/;  // Accepts 10 to 15 digit phone numbers

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName) return 'Please enter your name.';
    if (!emailRegex.test(formData.email)) return 'Invalid email address.';
    if (!passwordRegex.test(formData.password)) return 'Password must be at least 8 characters, with at least one letter and one number.';
    if (formData.password !== formData.confirmPassword) return 'Passwords do not match.';
    if (!phoneRegex.test(formData.phone)) return 'Invalid phone number.';
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) return alert(errorMsg);
    dispatch(register(formData));
  };

  const renderTextField = (label, name, type = 'text', placeholder, iconStart, iconEnd = null, visibility = null, setVisibility = null) => (
    <TextField
      size="small"
      label={label}
      name={name}
      type={type}
      fullWidth
      placeholder={placeholder}
      margin="normal"
      value={formData[name]}
      onChange={handleChange}
      slotProps={{
        inputLabel: {
          style: { 
              color: '#CCC'
          },
        },
        input: {
          style: { 
            color: '#CCC',
          },
          startAdornment: (
            <InputAdornment position="start" style={{ color: '#CCC'}}>
              {iconStart}
            </InputAdornment>
          ),
          endAdornment: iconEnd && (
            <InputAdornment position="end">
              <IconButton onClick={() => toggleVisibility(setVisibility)}>
                {visibility ? <EyeClosed style={{ width: '24px', height: '24px'}}/>
                  : <EyeOpened style={{ width: '24px', height: '24px'}}/>}
              </IconButton>
            </InputAdornment>
          )
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
  );

  return (
    <Card style={{ backgroundColor: "#232F43", padding: '2rem', borderRadius: '2rem', maxWidth: '460px' }}>
      <Box display="flex" justifyContent="center" alignItems="center" paddingLeft="2rem" paddingRight="2rem">
        <Logo style={{ height: '60px' }} />
      </Box>
      <Typography style={{ color: "#216CE3", fontSize: '24px', fontWeight: '600' }}>{t('register.signup')}</Typography>
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {renderTextField(t('register.firstName'), "firstName", "text", t('register.nameHolder'), <Envelope style={{ width: '24px', height: '24px'}}/>)}
        {renderTextField(t('register.lastName'), "lastName", "text", t('register.nameHolder'),  <Envelope style={{ width: '24px', height: '24px'}}/>)}
      </Box>
      {renderTextField(t('register.email'), "email", "text", t('register.emailHolder'), <Envelope style={{ width: '24px', height: '24px'}}/>)}
      {renderTextField(t('register.password'), "password", hidePassword ? 'password' : 'text', t('register.passwordHolder'), 
        <Lock style={{ width: '24px', height: '24px'}}/>, true, hidePassword, setHidePassword)}
      {renderTextField(t('register.confirmPassword'), "confirmPassword", hideConfirmPassword ? 'password' : 'text', t('register.passwordHolder'), 
        <Lock style={{ width: '24px', height: '24px'}}/>, true, hideConfirmPassword, setHideConfirmPassword)}
      {renderTextField(t('register.phone'), "phone", "text", t('register.phone'), <Phone style={{ width: '24px', height: '24px'}}/>)}
      {error && <Typography color="error">{error}</Typography>}
      {registered && <Typography color="primary">{t('register.phone')}</Typography>}
      {error && <Typography sx={{ color: 'red', textAlign: 'center', mb: '1rem' }}>{error}</Typography>}
      <Button fullWidth variant="contained" color="primary" onClick={handleSubmit} style={{ margin: '1rem 0' }} disabled={loading}>
        {loading ? 'Registering...' : t('register.signup')}
      </Button>
      <Typography variant="body2" align="center" color="white">
        {t('register.haveAccount')}
        <Link href="/login" color="primary" underline="hover">
          {t('register.login')}
        </Link>
      </Typography>
      <LanguageSwitcher/>
    </Card>
  );
};

export default Register;
