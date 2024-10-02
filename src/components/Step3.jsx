
import { TextField, Grid, Typography,FormControl,InputLabel,Select,MenuItem } from '@mui/material';

function Step3({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const accountholder = [
    { code: 'SAVING', name: 'Saving' },
    { code: 'CURR', name: 'Current' },
  
  ];
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Bank Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="bankname"
            value={formData.bankname}
            onChange={handleChange}
            label="Name of the Bank"
            error={!!errors.bankname}
            helperText={errors.bankname}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="settlement"
            value={formData.settlement}
            onChange={handleChange}
            label="Settlement Transit ABA"
            error={!!errors.settlement}
            helperText={errors.settlement}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="swift"
            value={formData.swift}
            onChange={handleChange}
            label="Swift"
            error={!!errors.swift}
            helperText={errors.swift}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            name="depositaccount"
            value={formData.depositaccount}
            onChange={handleChange}
            label="Deposit Account"
            error={!!errors.depositaccount}
            helperText={errors.depositaccount}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            name="confirmdeposit"
            value={formData.confirmdeposit}
            onChange={handleChange}
            label="Confirm Deposit Account"
            error={!!errors.confirmdeposit}
            helperText={errors.confirmdeposit}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <TextField
            fullWidth
            name="accountholder"
            value={formData.accountholder}
            onChange={handleChange}
            label="Account Holder Type"
            error={!!errors.accountholder}
            helperText={errors.accountholder}
          /> */}
            <FormControl fullWidth error={!!errors.accountholder}>
            <InputLabel>Account Type</InputLabel>
            <Select
              name="accountholder"
              value={formData.accountholder}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Account Type Type</em>
              </MenuItem>
              {accountholder.map((accountholders) => (
                <MenuItem key={accountholders.code} value={accountholders.code}>
                  {accountholders.name}
                </MenuItem>
              ))}
            </Select>
            {errors.accountholder && <p className="text-red-500">{errors.accountholder}</p>}
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="customerservice"
            value={formData.customerservice}
            onChange={handleChange}
            label="Customer Service No."
            error={!!errors.customerservice}
            helperText={errors.customerservice}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="webaddress"
            value={formData.webaddress}
            onChange={handleChange}
            label="Web Address"
            error={!!errors.webaddress}
            helperText={errors.webaddress}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="email"
            name="contactemail"
            value={formData.contactemail}
            onChange={handleChange}
            label="Contact Email"
            error={!!errors.contactemail}
            helperText={errors.contactemail}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Step3;
