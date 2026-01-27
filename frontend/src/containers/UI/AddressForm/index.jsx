// AddressForm.jsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const emptyAddress = {
  id: null,
  name: "",
  phone: "",
  street: "",
  city: "",
  state: "",
  pincode: "",
  isDefault: false,
};

const AddressForm = ({ mode, initialData, onSubmit, onCancel }) => {
  const [address, setAddress] = useState(emptyAddress);

  useEffect(() => {
    if (mode === "EDIT" && initialData) {
      setAddress(initialData);
    } else {
      setAddress(emptyAddress);
    }
  }, [mode, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(address);
  };

  return (
    <Box sx={{ p: 3, border: "1px solid #ddd", borderRadius: 2, mb: 3 }}>
      <Typography variant="h6" mb={2}>
        {mode === "ADD" ? "Add New Address" : "Edit Address"}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Full Name"
            name="name"
            value={address.name}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Phone"
            name="phone"
            value={address.phone}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Street Address"
            name="street"
            value={address.street}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="City"
            name="city"
            value={address.city}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="State"
            name="state"
            value={address.state}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Pincode"
            name="pincode"
            value={address.pincode}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={address.isDefault}
                onChange={(e) =>
                  setAddress((prev) => ({
                    ...prev,
                    isDefault: e.target.checked,
                  }))
                }
              />
            }
            label="Set as default address"
          />
        </Grid>

        <Grid item xs={12} display="flex" gap={2}>
          <Button variant="contained" onClick={handleSubmit}>
            {mode === "ADD" ? "Add Address" : "Update Address"}
          </Button>

          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddressForm;
