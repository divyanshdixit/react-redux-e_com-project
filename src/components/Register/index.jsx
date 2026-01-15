import { TextField, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { PageWrapper, AuthCard, Title, SubTitle } from "../Login/styles";
import { validateEmail, validatePassword } from "../../utils/validation";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    // setForm({...form, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // valiadtion:

    const {name, email, password, confirmPassword} = form;

    const formErrors = {};

    formErrors.email = validateEmail(email);
    formErrors.password = validatePassword(password);

    if(Object.values(formErrors).some((item) => item)){
      setErrors(formErrors); 
      return;
    }
    // clg('api hit')
    
  };

  return (
    <PageWrapper>
      <AuthCard>
        <Title>Create Account</Title>
        <SubTitle>Join us today</SubTitle>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
            // error
              label="Name"
              name="name"
              placeholder="Enter name"
              value={form.name}
              onChange={handleChange}
              // helperText="Invalid"
            />

            <TextField
              error={!!errors.email}
              label="Email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              helperText={errors.email}
            />

            <TextField
              error={!!errors.password}
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              helperText={errors.password}
            />

            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Enter password again"
              value={form.confirmPassword}
              onChange={handleChange}
            />

            <Button type="submit" variant="contained" size="large">
              Register
            </Button>
          </Stack>
        </form>
        <Typography textAlign="center" mt={2}>
            Already have an account? Login
        </Typography>
      </AuthCard>
    </PageWrapper>
  );
};

export default Register;
