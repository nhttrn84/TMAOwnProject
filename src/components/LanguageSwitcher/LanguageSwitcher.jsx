// src/components/LanguageSwitcher.js

import { Box, Button, Typography } from '@mui/material';
import { English, Vietnam } from "../../assets"; // Adjust the import path for your icons
import React, {useState} from 'react';

import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('en'); 

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng); // Update the selected language state
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Box display="inline-flex" justifyContent="center" alignItems="center" sx={{ mt: 2, p: 0.5, backgroundColor: '#ADC9F5', borderRadius: '10px' }}>
                <Button 
                    sx={{ 
                        borderRadius: '10px 0 0 10px', 
                        p: 1, 
                        backgroundColor: selectedLanguage === 'vn' ? '#77A5EE' : 'transparent', 
                        color: selectedLanguage === 'vn' ? '#FFF' : '#6F6F6F'
                    }}
                    onClick={() => changeLanguage('vn')}
                >
                    <Vietnam style={{ width: '24px', marginRight: '8px' }} />
                    <Typography variant="body2" sx={{ color: '#6F6F6F' }}>VIE</Typography>
                </Button>
                <Button 
                    sx={{ 
                        borderRadius: '0 10px 10px 0', 
                        p: 1, 
                        backgroundColor: selectedLanguage === 'en' ? '#77A5EE' : 'transparent',
                        color: selectedLanguage === 'en' ? '#FFF' : '#6F6F6F'
                    }} 
                    onClick={() => changeLanguage('en')}
                >
                    <English style={{ width: '24px', marginRight: '8px' }} />
                    <Typography variant="body2" sx={{ color: '#FFF' }}>ENG</Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default LanguageSwitcher;
