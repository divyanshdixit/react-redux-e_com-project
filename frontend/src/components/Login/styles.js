import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
}));

export const PageWrapper = styled(Box)(({ }) => ({
  // minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #1976d2, #0d47a1)",
}));

export const AuthCard = styled(Box)(({ theme }) => ({
  width: 420,
  padding: theme.spacing(5),
  backgroundColor: "#fff",
  borderRadius: 12,
  boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
}));

export const Title = styled("h2")({
  marginBottom: 8,
  fontWeight: 700,
  color: "#1976d2",
  textAlign: "center",
});

export const SubTitle = styled("p")({
  textAlign: "center",
  color: "#666",
  marginBottom: 32,
});
