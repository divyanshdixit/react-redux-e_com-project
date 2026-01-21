import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 500,
  margin: "40px auto",
  padding: theme.spacing(3),
  borderRadius: 8,
  backgroundColor: "#fff",
  boxShadow: theme.shadows[2],
}));

export const FormField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const ActionButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));