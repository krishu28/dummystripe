import { useState,useEffect } from 'react';
import { Grid, TextField, Typography, Checkbox, FormControlLabel } from '@mui/material';

function Step2({ formData, setFormData, errors }) {
  const [isCoOwner, setIsCoOwner] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCoOwnerChange = (e) => {
    setIsCoOwner(e.target.checked);
  };
  useEffect(() => {
   setFormData({ ...formData, isCoOwner });
  }, [setIsCoOwner]);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Business Ownership
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Home Address"
            name="homeaddress"
            value={formData.homeaddress}
            onChange={handleChange}
            error={!!errors.homeaddress}
            helperText={errors.homeaddress}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Passport"
            name="passport"
            value={formData.passport}
            onChange={handleChange}
            error={!!errors.passport}
            helperText={errors.passport}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            type="number"
            label="Ownership Percentage"
            name="ownershippercentage"
            value={formData.ownershippercentage}
            onChange={handleChange}
            error={!!errors.ownershippercentage}
            helperText={errors.ownershippercentage}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Home City"
            name="homecity"
            value={formData.homecity}
            onChange={handleChange}
            error={!!errors.homecity}
            helperText={errors.homecity}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Passport (2)"
            name="passport2"
            value={formData.passport2}
            onChange={handleChange}
            error={!!errors.passport2}
            helperText={errors.passport2}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            type="email"
            label="Business Email"
            name="businessemail"
            value={formData.businessemail}
            onChange={handleChange}
            error={!!errors.businessemail}
            helperText={errors.businessemail}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Home State/Province"
            name="homestate"
            value={formData.homestate}
            onChange={handleChange}
            error={!!errors.homestate}
            helperText={errors.homestate}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            type="date"
            label="Date of Birth"
            name="dateofbirth"
            value={formData.dateofbirth}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            error={!!errors.dateofbirth}
            helperText={errors.dateofbirth}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            error={!!errors.phonenumber}
            helperText={errors.phonenumber}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Home Zip/Postal Code"
            name="homezip"
            value={formData.homezip}
            onChange={handleChange}
            error={!!errors.homezip}
            helperText={errors.homezip}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="DL"
            name="dl"
            value={formData.dl}
            onChange={handleChange}
            error={!!errors.dl}
            helperText={errors.dl}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Skype ID"
            name="skypeid"
            value={formData.skypeid}
            onChange={handleChange}
            error={!!errors.skypeid}
            helperText={errors.skypeid}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Home Country"
            name="homecountry"
            value={formData.homecountry}
            onChange={handleChange}
            error={!!errors.homecountry}
            helperText={errors.homecountry}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="DL State/Country"
            name="dlstateL"
            value={formData.dlstateL}
            onChange={handleChange}
            error={!!errors.dlstateL}
            helperText={errors.dlstateL}
          />
        </Grid>

        {/* Checkbox for Co-Owner */}
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isCoOwner}
                onChange={handleCoOwnerChange}
              />
            }
            label="Is there a Co-Owner?"
          />
        </Grid>

        {isCoOwner && (
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Co-Owner Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  label="Co-Owner Name"
                  name="coOwnerName"
                  value={formData.coOwnerName}
                  onChange={handleChange}
                 
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  label="Co-Owner Email"
                  name="coOwnerEmail"
                  value={formData.coOwnerEmail}
                  onChange={handleChange}
                
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  label="Co-Owner Phone Number"
                  name="coOwnerPhoneNumber"
                  value={formData.coOwnerPhoneNumber}
                  onChange={handleChange}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  label="Co-Owner Percentage"
                  name="coOwnerPercentage"
                  value={formData.coOwnerPercentage}
                  onChange={handleChange}
                  
                />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Step2;
