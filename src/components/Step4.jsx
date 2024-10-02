
import { Container, Typography, Grid } from '@mui/material';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function Step4({ formData, setFormData, errors }) {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Business & Address Information
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Step1 formData={formData} setFormData={setFormData} errors={errors} />
        </Grid>
        <Grid item xs={12}>
          <Step2 formData={formData} setFormData={setFormData} errors={errors} />
        </Grid>
        <Grid item xs={12}>
          <Step3 formData={formData} setFormData={setFormData} errors={errors} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Step4;
