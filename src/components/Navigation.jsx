import React from "react";
import { Button, Box } from "@mui/material";

function Navigation({ step, handleBack, handleNext, handleSubmit }) {
  return (
    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
      {step > 1 && (
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
      )}
      {step < 4 ? (
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      )}
    </Box>
  );
}

export default Navigation;
