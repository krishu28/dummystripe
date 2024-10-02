import  { useState, useEffect } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Navigation from "../components/Navigation";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Paper } from "@mui/material";

// Retrieve stored data from sessionStorage or use defaults
const storedData = JSON.parse(sessionStorage.getItem("formData")) || {};
const storedStep = JSON.parse(sessionStorage.getItem("step")) || 1;

// Initial form data structure
const initialFormData = {
  businessname: storedData.businessname || "",
  email: storedData.email || "",
  phone: storedData.phone || "",
  address: storedData.address || "",
  fedraltax: storedData.fedraltax || "",
  startdate: storedData.startdate || "",

  city: storedData.city || "",
  state: storedData.state || "",
  country: storedData.country || "",
  description: storedData.description || "",
  zip: storedData.zip || "",
  bussinesstype: storedData.bussinesstype || "",
  name: storedData.name || "",
  homeaddress: storedData.homeaddress || "",
  passport: storedData.passport || "",
  ownershippercentage: storedData.ownershippercentage || "",
  homecity: storedData.homecity || "",
  passport2: storedData.passport2 || "",
  coOwnerName: storedData.coOwnerName || "",
  coOwnerEmail: storedData.coOwnerEmail || "",
  coOwnerPhoneNumber: storedData.coOwnerPhoneNumber || "",
  coOwnerPercentage: storedData.coOwnerPercentage || "",
  businessemail: storedData.businessemail || "",
  homestate: storedData.homestate || "",
  dateofbirth: storedData.dateofbirth || "",
  phonenumber: storedData.phonenumber || "",
  homezip: storedData.homezip || "",
  dl: storedData.dl || "",
  skypeid: storedData.skypeid || "",
  homecountry: storedData.homecountry || "",
  dlstateL: storedData.dlstateL || "",
  bankname: storedData.bankname || "",
  settlement: storedData.settlement || "",
  swift: storedData.swift || "",
  depositaccount: storedData.depositaccount || "",
  confirmdeposit: storedData.confirmdeposit || "",
  accountholder: storedData.accountholder || "",
  customerservice: storedData.customerservice || "",
  webaddress: storedData.webaddress || "",
  contactemail: storedData.contactemail || "",
};

function MultiStepForm() {
  const [step, setStep] = useState(storedStep);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    sessionStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    sessionStorage.setItem("step", JSON.stringify(step));
  }, [step]);

  const validateStep = (currentStep) => {
    let newErrors = {};
    if (currentStep === 1) {
      // Validation for Step 1
      if (!formData.businessname) newErrors.businessname = "Business Name is required";
      if (!formData.email) newErrors.email = "Business Contact Email is required";
      if (!formData.address) newErrors.address = "Business Address is required";   
      if (!formData.fedraltax) newErrors.fedraltax = "Federal Tax ID is required";   
      if (!formData.startdate) newErrors.startdate = "Start Date is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.bussinesstype) newErrors.bussinesstype = "Business Type is required";
      if (!formData.city) newErrors.city = "Business City is required";
      if (!formData.zip) newErrors.zip = "Zip Code is required";
      if (!formData.country) newErrors.country = "Country is required";
      if (!formData.description) newErrors.description = "Business Description is required";
    }
    if (currentStep === 2) {
      // Validation for Step 2
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.homeaddress) newErrors.homeaddress = "Home Address is required";
      if (!formData.passport) newErrors.passport = "Passport is required";
      if (!formData.ownershippercentage) newErrors.ownershippercentage = "Owner Percentage is required";
      if (!formData.homecity) newErrors.homecity = "Home City is required";
      if (!formData.passport2) newErrors.passport2 = "Second Passport is required";
      if (!formData.businessemail) newErrors.businessemail = "Business Contact Email is required";
      if (!formData.homestate) newErrors.homestate = "Home State is required";
      if (!formData.dateofbirth) newErrors.dateofbirth = "Date of Birth is required";
      if (!formData.phonenumber) newErrors.phonenumber = "Phone Number is required";
      if (!formData.homezip) newErrors.homezip = "Home Zip Code is required";
      if (!formData.dl) newErrors.dl = "Driver's License is required";
      if (!formData.skypeid) newErrors.skypeid = "Skype ID is required";
      if (!formData.homecountry) newErrors.homecountry = "Home Country is required";
      if (!formData.dlstateL) newErrors.dlstateL = "Driver's License State is required";      
    }
    if (currentStep === 3) {
      // Validation for Step 3
      if (!formData.bankname) newErrors.bankname = "Bank Name is required";
      if (!formData.settlement) newErrors.settlement = "Settlement Transit ABA is required";
      if (!formData.swift) newErrors.swift = "Swift Code is required";
      if (!formData.depositaccount) newErrors.depositaccount = "Deposit Account is required";
      if (!formData.confirmdeposit) newErrors.confirmdeposit = "Confirm Deposit Account is required";
      if (formData.depositaccount && formData.confirmdeposit !== formData.depositaccount) {
        newErrors.confirmdeposit = "Deposit Account and Confirm Deposit Account must match";
      }
      if (!formData.accountholder) newErrors.accountholder = "Account Holder Name is required";
      if (!formData.customerservice) newErrors.customerservice = "Customer Service Number is required";
      if (!formData.webaddress) newErrors.webaddress = "Web Address is required";
      if (!formData.contactemail) newErrors.contactemail = "Contact Email is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setAnimate(false);
      setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
        setAnimate(true);
      }, 300);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setAnimate(false);
      setTimeout(() => {
        setStep((prevStep) => prevStep - 1);
        setAnimate(true);
      }, 300);
    }
  };

  const handleSubmit = () => {
    if (validateStep(step)) {
    

      // Clear session storage data
      sessionStorage.clear(); // Clears all session storage

      // Reset form data to initial state
      setFormData(initialFormData);
      setStep(1); // Reset step to 1

      // Navigate to the thank you page
      navigate("/thank-you");}
  };

  return (
    <Container maxWidth="lg" sx={{ height: "auto", display: "flex", alignItems: "center", justifyContent: "center", marginTop:"20px" }}>
      <Paper elevation={3} sx={{ p: 3, width: "100%", height: "100%", bgcolor: 'linear-gradient(to right, #blue, #purple, #pink)', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',zIndex: '1' }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Merchant Form
        </Typography>
        <ProgressBar step={step} />
        <Box sx={{ opacity: animate ? 1 : 0, transition: "opacity 300ms" }}>
          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {step === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {step === 3 && (
            <Step3
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {step === 4 && (
            <Step4
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
        </Box>
        <Navigation
          step={step}
          handleBack={handleBack}
          handleNext={handleNext}
          handleSubmit={handleSubmit}
        />
      </Paper>
    </Container>
  );
}

export default MultiStepForm;
