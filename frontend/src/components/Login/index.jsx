import {
  TextField,
  Button,
  Stack,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { PageWrapper, AuthCard, Title, SubTitle, StyledBox } from "./styles";
import { validateEmail, validatePassword } from "../../utils/validation";
import { useLoginMutation } from "../../redux/apiService/api";
import { setLogin } from "../../redux/feature/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading, error }] = useLoginMutation();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(form);
      const { email, password } = form;

      const formErrors = {};

      formErrors.email = validateEmail(email);
      formErrors.password = validatePassword(password);

      if (Object.values(formErrors).some((item) => item)) {
        setErrors(formErrors);
        return;
      }

      // clg('hit loginapi')

      const res = await login({ email, password }).unwrap();
      console.log("login result ", res);

      if (res.accessToken) {
        dispatch(setLogin({ token: res.accessToken, user: res.user }));
        navigate("/products");
      }
    } catch (err) {
      console.log(err);
      // toast
      toast.error(err.data);
    }
  };

  return (
    <StyledBox>
      <ToastContainer />
      <PageWrapper height="85vh">
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
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Button type="submit" variant="contained" size="large" disabled={!(!!form.email && !!form.password)}>
                  Login
                </Button>
              )}
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
