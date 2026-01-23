import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 1000,
  margin: "40px auto",
  padding: theme.spacing(3),
}));

export const CartContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const ItemsSection = styled(Box)(({ theme }) => ({
  flex: 2,
  backgroundColor: "#fff",
  borderRadius: 10,
  padding: theme.spacing(3),
  boxShadow: theme.shadows[2],
}));

export const SummarySection = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: "#fff",
  borderRadius: 10,
  padding: theme.spacing(3),
  boxShadow: theme.shadows[2],
  height: "fit-content",
}));

export const CartItemRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

export const QuantityBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));
