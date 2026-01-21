import React, { useEffect, useState } from "react";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";

import { useUpdateUserMutation } from "../../redux/apiService/api";
import { useDispatch, useSelector } from "react-redux";
import { ActionButton, FormField, PageWrapper } from "./styles";
import EditIcon from "@mui/icons-material/Edit";
import {ToastContainer, toast} from 'react-toastify';
import { validateForm } from "../../utils/validation";

const UserProfile = () => {
  const uid = localStorage.getItem("uid");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [updateUser] = useUpdateUserMutation();

  const [isEdit, setIsEdit] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  // pre-filled values to form:
  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        gender: user.gender || "",
        city: user.city || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async () => {
    try{
      const {name, phone, gender, city} = form;

      const formErrors = validateForm(name, phone, gender, city);
      console.log(formErrors)
      if(Object.keys(formErrors).length){
        setErrors(formErrors);
        return;
      }
      // hit the apis:
      const res = await updateUser({
        id: uid,
        body:{
          name,
          phone, 
          gender,
          city
        }
      }).unwrap();
      console.log(res);
      if(res){
        toast.success("Profile updated successfully!")
        setErrors({});
      }

    }catch(err){
      console.log(err);
      toast.error(err.data)
    }
    setIsEdit(false);
  };

  return (
    <PageWrapper>
      <ToastContainer />

      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="h6" gutterBottom>
          {isEdit ? "Edit " : "My "}Profile
        </Typography>

        <IconButton onClick={() => setIsEdit(true)}>
          <EditIcon sx={{width: 20, height: 20, color: 'green'}}/>
        </IconButton>
      </Box>

      <FormField
        error={!!errors.name}
        helperText={errors.name}
        label="Name"
        name="name"
        fullWidth
        disabled={!isEdit}
        value={form.name}
        onChange={handleChange}
      />

      <FormField
        label="Email"
        name="email"
        fullWidth
        disabled
        value={form.email}
      />

      <FormField
        error={!!errors.phone}
        helperText={errors.phone}
        label="Phone"
        name="phone"
        fullWidth
        disabled={!isEdit}
        value={form.phone}
        onChange={handleChange}
      />

      <FormField
        select
        error={!!errors.gender}
        helperText={errors.gender}
        label="Gender"
        name="gender"
        fullWidth
        disabled={!isEdit}
        value={form.gender}
        onChange={handleChange}
      >
        <MenuItem value="">Select</MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </FormField>

      <FormField
        error={!!errors.city}
        helperText={errors.city}
        label="City"
        name="city"
        fullWidth
        disabled={!isEdit}
        value={form.city}
        onChange={handleChange}
      />

      <ActionButton variant="contained" color="success" disabled={!isEdit} onClick={handleSave}>
        Save Changes
      </ActionButton>
    </PageWrapper>
  );
};

export default UserProfile;
