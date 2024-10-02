import  { useEffect, useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography } from '@mui/material';

function Step1({ formData, setFormData, errors }) {
  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'AU', name: 'Australia' },
    { code: 'IN', name: 'India' },
  ];

  const allStates = {
    US: [
      { name: "Alabama", code: "AL" },
      { name: "Alaska", code: "AK" },
      { name: "Arizona", code: "AZ" },
      { name: "Arkansas", code: "AR" },
      { name: "California", code: "CA" },
    ],
    IN :  [
      { name: "Andhra Pradesh", code: "AP" },
      { name: "Arunachal Pradesh", code: "AR" },
      { name: "Assam", code: "AS" },
      { name: "Bihar", code: "BR" },
      { name: "Chhattisgarh", code: "CT" },
      { name: "Goa", code: "GA" },
      { name: "Gujarat", code: "GJ" },
      { name: "Haryana", code: "HR" },
      { name: "Himachal Pradesh", code: "HP" },
      { name: "Jharkhand", code: "JH" },
      { name: "Karnataka", code: "KA" },
      { name: "Kerala", code: "KL" },
      { name: "Madhya Pradesh", code: "MP" },
      { name: "Maharashtra", code: "MH" },
      { name: "Manipur", code: "MN" },
      { name: "Meghalaya", code: "ML" },
      { name: "Mizoram", code: "MZ" },
      { name: "Nagaland", code: "NL" },
      { name: "Odisha", code: "OR" },
      { name: "Punjab", code: "PB" },
      { name: "Rajasthan", code: "RJ" },
      { name: "Sikkim", code: "SK" },
      { name: "Tamil Nadu", code: "TN" },
      { name: "Telangana", code: "TG" },
      { name: "Tripura", code: "TR" },
      { name: "Uttar Pradesh", code: "UP" },
      { name: "Uttarakhand", code: "UT" },
      { name: "West Bengal", code: "WB" },
      { name: "Delhi", code: "DL" },
      { name: "Puducherry", code: "PY" },
      { name: "Chandigarh", code: "CH" },
      { name: "Jammu and Kashmir", code: "JK" },
      { name: "Ladakh", code: "LA" }
    ],
    
  };

  const bussine = [
    { code: 'INDU', name: 'Individual' },
    { code: 'INC', name: 'Incorporation' },
    { code: 'LLC', name: 'LLC' },
    { code: 'LLP', name: 'LLP' },
    { code: 'PVT', name: 'Pvt. Ltd.' },
    { code: 'LTD', name: 'Ltd' },
  ];

  const [filteredStates, setFilteredStates] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedFormData);

    if (e.target.name === "country") {
      setFilteredStates(allStates[e.target.value] || []);
      setFormData({ ...updatedFormData, state: '' });
    }
  };

  useEffect(() => {
    if (formData.country) {
      setFilteredStates(allStates[formData.country] || []);
    }
  }, [formData.country]);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Business & Address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="businessname"
            value={formData.businessname}
            onChange={handleChange}
            label="Business Name"
            error={!!errors.businessname}
            helperText={errors.businessname}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            label="Business Contact Email"
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="address"
            value={formData.address}
            onChange={handleChange}
            label="Business Address Street"
            error={!!errors.address}
            helperText={errors.address}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="fedraltax"
            value={formData.fedraltax}
            onChange={handleChange}
            label="Federal Tax ID"
            error={!!errors.fedraltax}
            helperText={errors.fedraltax}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="date"
            name="startdate"
            value={formData.startdate}
            onChange={handleChange}
            label="Company Corporation Date"
            InputLabelProps={{ shrink: true }}
            error={!!errors.startdate}
            helperText={errors.startdate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth error={!!errors.bussinesstype}>
            <InputLabel>Business Type</InputLabel>
            <Select
              name="bussinesstype"
              value={formData.bussinesstype}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Business Type</em>
              </MenuItem>
              {bussine.map((bussines) => (
                <MenuItem key={bussines.code} value={bussines.code}>
                  {bussines.name}
                </MenuItem>
              ))}
            </Select>
            {errors.bussinesstype && <p className="text-red-500">{errors.bussinesstype}</p>}
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth error={!!errors.country}>
            <InputLabel>Country</InputLabel>
            <Select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Select Country</em>
              </MenuItem>
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {errors.country && <p className="text-red-500">{errors.country}</p>}
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth error={!!errors.state}>
            <InputLabel>State/Province</InputLabel>
            <Select
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Select State/Province</em>
              </MenuItem>
              {filteredStates.map((state) => (
                <MenuItem key={state.code} value={state.code}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {errors.state && <p className="text-red-500">{errors.state}</p>}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="city"
            value={formData.city}
            onChange={handleChange}
            label="City"
            error={!!errors.city}
            helperText={errors.city}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            label="Business Zip/Postal Code"
            error={!!errors.zip}
            helperText={errors.zip}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="description"
            value={formData.description}
            onChange={handleChange}
            label="Business Description"
            error={!!errors.description}
            helperText={errors.description}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Step1;
