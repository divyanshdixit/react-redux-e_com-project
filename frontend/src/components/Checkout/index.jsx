// CheckoutPage.jsx
import React, { useState } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import AddressForm from "../../containers/UI/AddressForm";
import { useSelector } from "react-redux";
import { useAddAddressMutation, useGetAddressesQuery, useUpdateAddressMutation } from "../../redux/apiService/api";

const CheckoutPage = () => {
  const { token, user } = useSelector((state) => state.auth);
  const { data: addressList = [] } = useGetAddressesQuery(user?.id, {skip: !token || !user?.id});
    console.log(addressList)
  const [addAddress] = useAddAddressMutation();
  const [updateAddress] = useUpdateAddressMutation();

  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("ADD");
  const [editingAddress, setEditingAddress] = useState(null);

  const handleAddClick = () => {
    setFormMode("ADD");
    setEditingAddress(null);
    setShowForm(true);
  };

  const handleEditClick = (address) => {
    setFormMode("EDIT");
    setEditingAddress(address);
    setShowForm(true);
  };

  const handleSubmitAddress = async(data) => {

    if (formMode === "ADD") {
      const newAddress = {
        ...data,
        id: Date.now(), // timestamp => miliseconds
      };

      setAddresses((prev) =>
        data.isDefault
          ? prev.map((a) => ({ ...a, isDefault: false })).concat(newAddress)
          : [...prev, newAddress],
      );
    } else {
      setAddresses((prev) =>
        prev.map((a) =>
          a.id === data.id
            ? data
            : data.isDefault
              ? { ...a, isDefault: false }
              : a,
        ),
      );
    }

    if (editingAddress) {
      await updateAddress({ id: editing.id, body: data });
    } else {
      await addAddress({ ...data, user_id: user.id });
    }
    try{
        // toast.success('updated successfully!')
    }catch(err){
        
    }
    setShowForm(false);
    setEditingAddress(null);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
      <Typography variant="h5" mb={2}>
        Checkout – Address
      </Typography>

      <Button variant="contained" onClick={handleAddClick} sx={{ mb: 3 }}>
        Add New Address
      </Button>

      {showForm && (
        <AddressForm
          mode={formMode}
          initialData={editingAddress}
          onSubmit={handleSubmitAddress}
          onCancel={() => setShowForm(false)}
        />
      )}

      {(addressList && addressList.length) ? addressList.map((address) => (
        <Card key={address.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography fontWeight={600}>
              {address.name} {address.isDefault && "(Default)"}
            </Typography>

            <Typography variant="body2">
              {address.street}, {address.city}, {address.state} -{" "}
              {address.pincode}
            </Typography>

            <Typography variant="body2">Phone: {address.phone}</Typography>

            <Button
              size="small"
              sx={{ mt: 1 }}
              onClick={() => handleEditClick(address)}
            >
              Edit
            </Button>
          </CardContent>
        </Card>
      ))
      :
      "No address found, please add one!"
    }
    </Box>
  );
};

export default CheckoutPage;
