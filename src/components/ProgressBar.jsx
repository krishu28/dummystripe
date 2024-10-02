import React from 'react';
import { LinearProgress, Box } from '@mui/material';

function ProgressBar({ step }) {
  const value = (step / 4) * 100; // Assuming there are 4 steps

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <LinearProgress variant="determinate" value={value} />
    </Box>
  );
}

export default ProgressBar;
