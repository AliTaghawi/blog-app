import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Typography component='p' variant='p' bgcolor="#f7f7f7" color="primery" padding="10px" mt={10} textAlign="center" >
        پروژه وبلاک با graphql | علی‌گرمینگ
      </Typography>
    </footer>
  );
};

export default Footer;