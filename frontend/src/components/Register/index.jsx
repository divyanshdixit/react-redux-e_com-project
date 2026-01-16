import { TextField, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { PageWrapper, AuthCard, Title, SubTitle } from "../Login/styles";
import { validateEmail, validatePassword } from "../../utils/validation";
import { useRegisterMutation } from "../../redux/apiService/api";
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/feature/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, {isLoading, error}] = useRegisterMutation();

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

  const handleSubmit = async (e) => {
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

    const data = {user_id: 1, name, email, password}

  //   await fetch(`${API_URL}/register`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // }).then(res => res.json());

    const res = await register(data).unwrap();
    // navigate to login route:
    if(res.accessToken){
      dispatch(setLogin({token: res.accessToken, user: res.user}));
      navigate('/login');
    }
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
