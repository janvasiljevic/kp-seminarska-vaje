import { Box, Loader } from '@mantine/core';
import React from 'react';

const FullSizeLoader = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
      {' '}
      <Loader />{' '}
    </Box>
  );
};

export default FullSizeLoader;
