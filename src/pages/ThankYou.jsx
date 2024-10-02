import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
} from "@mui/material";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to right, #4caf50, #9c27b0, #e91e63)' }}
    >
      <Paper
        elevation={3}
        sx={{
          textAlign: 'center',
          padding: 5,
          borderRadius: 2,
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 7px 29px 0px',
        }}
      >
        <Typography variant="h3" component="h1" sx={{ color: '#2196f3', mb: 2 }}>
          Thank You!
        </Typography>
        <Typography variant="body1" sx={{ color: 'gray', mb: 2 }}>
          We appreciate your submission. We'll get back to you soon.
        </Typography>
        <Box sx={{ mb: 2 }}>
          <svg
            className="mx-auto w-20 h-20 text-green-500 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/form")}
          sx={{
            px: 4,
            py: 1,
            borderRadius: 1,
            '&:hover': { backgroundColor: '#1976d2' }, // Darker blue on hover
          }}
        >
          Go Back Home
        </Button>
      </Paper>
    </Container>
  );
};

export default ThankYou;
