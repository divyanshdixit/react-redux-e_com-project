import { TextField, Button, Stack, Typography, Box } from "@mui/material";
import { useState } from "react";
import { PageWrapper, AuthCard, Title, SubTitle, StyledBox } from "./styles";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e) => {

  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <StyledBox >
      <PageWrapper>
        <AuthCard>
          <Title>Welcome Back</Title>
          <SubTitle>Login to continue</SubTitle>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />

              <Button type="submit" variant="contained" size="large">
                Login
              </Button>
            </Stack>
          </form>
          <Typography textAlign="center" mt={2}>
              Don’t have an account? Register
          </Typography>
        </AuthCard>
      </PageWrapper>
    </StyledBox>
  );
}
